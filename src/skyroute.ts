import { AppConfig } from "./config";
import { DuffelFlightProvider } from "./providers/duffel";
import { MockFlightProvider } from "./providers/mock";
import { resolveAirport, supportedAirportsCount } from "./services/airports";
import { OfferCache } from "./services/cache";
import { isValidDateOrder, toIsoDate } from "./services/dates";
import { stableId } from "./services/id";
import { rankOffers } from "./services/ranking";
import { sanitizeCurrency, sanitizeId, sanitizeTextInput } from "./services/sanitize";
import {
  BookingRedirect,
  CabinClass,
  FlightDetails,
  FlightOffer,
  FlightProvider,
  NormalizedSearchInput,
  PassengerCounts,
  SearchResult
} from "./types";

export interface SearchFlightsRequest {
  origin: string;
  destination: string;
  departure_date?: string;
  date?: string;
  return_date?: string;
  adults?: number;
  children?: number;
  infants?: number;
  cabin_class?: CabinClass;
  cabinClass?: CabinClass;
  cabin?: CabinClass;
  currency?: string;
  locale?: string;
  max_results?: number;
  sort?: "cheapest" | "fastest" | "best";
}

export interface GetDetailsRequest {
  search_id: string;
  offer_id: string;
}

export interface BookFlightRequest {
  search_id: string;
  offer_id: string;
}

export class SkyRouteService {
  private readonly cache: OfferCache;
  private readonly provider: FlightProvider;
  private readonly config: AppConfig;

  constructor(config: AppConfig) {
    this.config = config;
    this.cache = new OfferCache(config.offerCacheTtlMs);
    this.provider =
      config.provider === "duffel"
        ? new DuffelFlightProvider({
            apiKey: config.duffelApiKey,
            baseUrl: config.duffelBaseUrl,
            linksConfig: {
              successUrl: config.duffelLinksSuccessUrl,
              failureUrl: config.duffelLinksFailureUrl,
              abandonmentUrl: config.duffelLinksAbandonmentUrl
            }
          })
        : new MockFlightProvider();
  }

  getMeta(): { provider: string; supportedAirports: number; cacheTtlMs: number } {
    return {
      provider: this.provider.name,
      supportedAirports: supportedAirportsCount(),
      cacheTtlMs: this.config.offerCacheTtlMs
    };
  }

  async searchFlights(request: SearchFlightsRequest): Promise<SearchResult> {
    // --- Input hardening: sanitize all agent-provided strings ---
    request = this.sanitizeSearchRequest(request);

    const notes: string[] = [];

    const originResult = resolveAirport(request.origin);
    const destinationResult = resolveAirport(request.destination);

    if (!originResult.airport) {
      throw new Error(`Invalid origin: ${originResult.note ?? "unable to resolve airport"}`);
    }

    if (!destinationResult.airport) {
      throw new Error(`Invalid destination: ${destinationResult.note ?? "unable to resolve airport"}`);
    }

    if (originResult.note) {
      notes.push(originResult.note);
    }
    if (destinationResult.note) {
      notes.push(destinationResult.note);
    }

    const departureInput = request.departure_date ?? request.date;
    const departureDate = departureInput ? toIsoDate(departureInput) : undefined;
    if (!departureDate) {
      throw new Error("Unable to parse departure_date (or date alias). Use an ISO date or natural phrase like 'next Friday'.");
    }

    const returnDate = request.return_date ? toIsoDate(request.return_date) : undefined;
    if (request.return_date && !returnDate) {
      throw new Error("Unable to parse return_date. Use an ISO date or natural phrase like 'in 2 weeks'.");
    }

    if (!isValidDateOrder(departureDate, returnDate)) {
      throw new Error("return_date must be on or after departure_date.");
    }

    const passengers = this.normalizePassengers({
      adults: request.adults,
      children: request.children,
      infants: request.infants
    });

    const maxResults = this.normalizeMaxResults(request.max_results);
    const cabinClass = request.cabin_class ?? request.cabinClass ?? request.cabin ?? "economy";

    const normalizedInput: NormalizedSearchInput = {
      origin: originResult.airport,
      destination: destinationResult.airport,
      departureDate,
      returnDate,
      passengers,
      cabinClass,
      currency: (request.currency ?? this.config.defaultCurrency).toUpperCase(),
      locale: request.locale ?? this.config.defaultLocale,
      maxResults,
      sort: request.sort ?? "best"
    };

    const providerOffers = await this.provider.searchFlights(normalizedInput);
    if (providerOffers.length === 0) {
      return {
        searchId: stableId("search", originResult.airport.iata, destinationResult.airport.iata, departureDate, Date.now().toString()),
        request: {
          origin: normalizedInput.origin,
          destination: normalizedInput.destination,
          departureDate: normalizedInput.departureDate,
          returnDate: normalizedInput.returnDate,
          passengers: normalizedInput.passengers,
          cabinClass: normalizedInput.cabinClass,
          currency: normalizedInput.currency,
          locale: normalizedInput.locale
        },
        summary: { totalResults: 0 },
        offers: [],
        nextActions: ["search_flights (refine route, dates, or passengers)"],
        notes
      };
    }

    const sortedOffers = rankOffers(providerOffers, normalizedInput.sort);
    const cheapest = rankOffers(providerOffers, "cheapest")[0];
    const fastest = rankOffers(providerOffers, "fastest")[0];
    const best = rankOffers(providerOffers, "best")[0];

    const searchId = stableId(
      "search",
      normalizedInput.origin.iata,
      normalizedInput.destination.iata,
      normalizedInput.departureDate,
      normalizedInput.returnDate ?? "oneway",
      JSON.stringify(normalizedInput.passengers),
      normalizedInput.cabinClass,
      normalizedInput.currency,
      normalizedInput.locale,
      normalizedInput.sort,
      Date.now().toString()
    );

    const result: SearchResult = {
      searchId,
      request: {
        origin: normalizedInput.origin,
        destination: normalizedInput.destination,
        departureDate: normalizedInput.departureDate,
        returnDate: normalizedInput.returnDate,
        passengers: normalizedInput.passengers,
        cabinClass: normalizedInput.cabinClass,
        currency: normalizedInput.currency,
        locale: normalizedInput.locale
      },
      summary: {
        totalResults: sortedOffers.length,
        cheapest,
        fastest,
        best
      },
      offers: sortedOffers,
      nextActions: ["get_flight_details", "book_flight", "search_flights (refine)"],
      notes
    };

    this.cache.set(result);
    return result;
  }

  async getFlightDetails(request: GetDetailsRequest): Promise<FlightDetails> {
    request = { search_id: sanitizeId(request.search_id), offer_id: sanitizeId(request.offer_id) };
    const offer = this.mustGetOffer(request.search_id, request.offer_id);
    const conditions = await this.provider.getConditions(offer);

    return {
      searchId: request.search_id,
      offerId: offer.offerId,
      airline: offer.airline,
      route: `${offer.originIata} -> ${offer.destinationIata}`,
      schedule: {
        departureAt: offer.departureAt,
        arrivalAt: offer.arrivalAt,
        durationMinutes: offer.durationMinutes,
        stops: offer.stops
      },
      pricing: {
        amount: offer.price.amount,
        currency: offer.price.currency,
        fareType: offer.fareType
      },
      baggage: offer.baggage,
      conditions,
      bookingRedirectUrl: offer.bookingRedirectUrl,
      expiresAt: offer.offerExpiresAt,
      nextActions: ["book_flight", "search_flights (refine if needed)"]
    };
  }

  async bookFlight(request: BookFlightRequest): Promise<BookingRedirect> {
    request = { search_id: sanitizeId(request.search_id), offer_id: sanitizeId(request.offer_id) };
    const offer = this.mustGetOffer(request.search_id, request.offer_id);

    let bookingUrl = offer.bookingRedirectUrl;
    let message: string;

    if (this.provider.createBookingSession) {
      try {
        const session = await this.provider.createBookingSession(offer);
        bookingUrl = session.url;
        message = "Open the checkout URL to complete your booking. The session is valid for 20 minutes after you open it.";
      } catch (err: any) {
        console.error(`[skyroute] Failed to create booking session: ${err?.message ?? err}`);
        message = "Could not create a direct checkout session. Use the fallback redirect URL to search and book on the airline website.";
      }
    } else {
      message = "Use the redirect URL to complete checkout with the supplier.";
    }

    return {
      searchId: request.search_id,
      offerId: offer.offerId,
      bookingRedirectUrl: bookingUrl,
      provider: offer.provider,
      message,
      nextActions: ["open bookingRedirectUrl in browser", "search_flights (if you want alternatives)"]
    };
  }

  private normalizePassengers(input: Partial<PassengerCounts>): PassengerCounts {
    const adults = this.clampInt(input.adults ?? 1, 1, 9);
    const children = this.clampInt(input.children ?? 0, 0, 8);
    const infants = this.clampInt(input.infants ?? 0, 0, adults);

    return { adults, children, infants };
  }

  private normalizeMaxResults(input?: number): number {
    const fallback = this.config.defaultMaxResults;
    if (typeof input !== "number" || Number.isNaN(input)) {
      return fallback;
    }

    return this.clampInt(input, 1, 50);
  }

  private clampInt(value: number, min: number, max: number): number {
    return Math.min(max, Math.max(min, Math.floor(value)));
  }

  private sanitizeSearchRequest(req: SearchFlightsRequest): SearchFlightsRequest {
    return {
      ...req,
      origin: sanitizeTextInput(req.origin),
      destination: sanitizeTextInput(req.destination),
      departure_date: req.departure_date ? sanitizeTextInput(req.departure_date) : undefined,
      date: req.date ? sanitizeTextInput(req.date) : undefined,
      return_date: req.return_date ? sanitizeTextInput(req.return_date) : undefined,
      currency: req.currency ? sanitizeCurrency(req.currency) : undefined,
      locale: req.locale ? sanitizeTextInput(req.locale) : undefined
    };
  }

  private mustGetOffer(searchId: string, offerId: string): FlightOffer {
    const search = this.cache.get(searchId);
    if (!search) {
      throw new Error("Search not found or expired. Run search_flights again.");
    }

    const offer = this.cache.getOffer(searchId, offerId);
    if (!offer) {
      throw new Error("Offer not found in this search. Use get offer_id values from search_flights.");
    }

    if (Date.parse(offer.offerExpiresAt) < Date.now()) {
      throw new Error("Offer expired. Run search_flights again for fresh prices.");
    }

    return offer;
  }
}
