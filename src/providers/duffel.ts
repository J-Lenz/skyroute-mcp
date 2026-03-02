import { FlightDetails, FlightOffer, FlightProvider, NormalizedSearchInput } from "../types";

interface DuffelProviderOptions {
  apiKey: string;
  baseUrl: string;
}

interface DuffelOfferRequestResponse {
  id: string;
  offers?: DuffelOffer[];
}

interface DuffelOffer {
  id?: string;
  created_at?: string;
  expires_at?: string;
  total_amount?: string;
  total_currency?: string;
  total_duration?: string;
  owner?: {
    name?: string;
    iata_code?: string;
  };
  slices?: Array<{
    duration?: string;
    segments?: Array<{
      departing_at?: string;
      arriving_at?: string;
      marketing_carrier?: {
        iata_code?: string;
        name?: string;
      };
      operating_carrier?: {
        iata_code?: string;
        name?: string;
      };
      marketing_carrier_flight_number?: string;
      operating_carrier_flight_number?: string;
    }>;
  }>;
  conditions?: any;
}

export class DuffelFlightProvider implements FlightProvider {
  name: "duffel" = "duffel";
  private readonly apiKey: string;
  private readonly baseUrl: string;

  constructor(options: DuffelProviderOptions) {
    if (!options.apiKey) {
      throw new Error("DUFFEL_API_KEY is required when FLIGHT_PROVIDER=duffel");
    }

    this.apiKey = options.apiKey;
    this.baseUrl = options.baseUrl.replace(/\/$/, "");
  }

  async searchFlights(input: NormalizedSearchInput): Promise<FlightOffer[]> {
    const passengers = this.buildPassengers(input);
    const slices = [{ origin: input.origin.iata, destination: input.destination.iata, departure_date: input.departureDate }];

    if (input.returnDate) {
      slices.push({
        origin: input.destination.iata,
        destination: input.origin.iata,
        departure_date: input.returnDate
      });
    }

    const offerRequest = await this.request<DuffelOfferRequestResponse>("POST", "/air/offer_requests", {
      data: {
        slices,
        passengers,
        cabin_class: this.mapCabinClass(input.cabinClass),
        return_offers: true,
        currency: input.currency
      }
    });

    const offers = Array.isArray(offerRequest.offers) ? offerRequest.offers : [];
    return offers
      .map((offer) => this.mapOffer(offer, input))
      .filter((offer): offer is FlightOffer => Boolean(offer))
      .slice(0, input.maxResults);
  }

  async getConditions(offer: FlightOffer): Promise<FlightDetails["conditions"]> {
    const offerId = this.extractDuffelOfferId(offer);

    if (!offerId) {
      return this.mapConditions((offer.raw as any)?.conditions);
    }

    try {
      const latestOffer = await this.request<DuffelOffer>("GET", `/air/offers/${encodeURIComponent(offerId)}`);
      return this.mapConditions(latestOffer.conditions ?? (offer.raw as any)?.conditions);
    } catch {
      return this.mapConditions((offer.raw as any)?.conditions);
    }
  }

  private async request<T>(method: "GET" | "POST", path: string, body?: unknown): Promise<T> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method,
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
        "Duffel-Version": "v2"
      },
      body: body ? JSON.stringify(body) : undefined
    });

    const raw = await response.text();
    let payload: any = {};
    if (raw) {
      try {
        payload = JSON.parse(raw) as any;
      } catch {
        payload = {};
      }
    }

    if (!response.ok) {
      const message = payload?.errors?.[0]?.message || payload?.message || raw || "Unknown Duffel error";
      throw new Error(`Duffel API error (${response.status}): ${message}`);
    }

    return payload.data as T;
  }

  private buildPassengers(input: NormalizedSearchInput): Array<{ type: string }> {
    const passengers: Array<{ type: string }> = [];

    for (let i = 0; i < input.passengers.adults; i += 1) {
      passengers.push({ type: "adult" });
    }

    for (let i = 0; i < input.passengers.children; i += 1) {
      passengers.push({ type: "child" });
    }

    for (let i = 0; i < input.passengers.infants; i += 1) {
      passengers.push({ type: "infant_without_seat" });
    }

    return passengers;
  }

  private mapCabinClass(cabinClass: NormalizedSearchInput["cabinClass"]): string {
    if (cabinClass === "premium_economy") {
      return "premium_economy";
    }
    return cabinClass;
  }

  private mapOffer(offer: DuffelOffer, input: NormalizedSearchInput): FlightOffer | undefined {
    if (!offer || !offer.id) {
      return undefined;
    }

    const firstSlice = offer.slices?.[0];
    const segments = firstSlice?.segments ?? [];
    const firstSegment = segments[0];
    const lastSegment = segments.length > 0 ? segments[segments.length - 1] : undefined;

    const departureAt = firstSegment?.departing_at ?? new Date().toISOString();
    const arrivalAt = lastSegment?.arriving_at ?? departureAt;
    const durationMinutes =
      this.parseDurationMinutes(offer.total_duration || firstSlice?.duration) ??
      this.durationBetween(departureAt, arrivalAt) ??
      0;

    const airline =
      offer.owner?.name ||
      firstSegment?.marketing_carrier?.name ||
      firstSegment?.operating_carrier?.name ||
      "Unknown airline";

    const airlineCode =
      offer.owner?.iata_code ||
      firstSegment?.marketing_carrier?.iata_code ||
      firstSegment?.operating_carrier?.iata_code ||
      "XX";

    const flightNumberSuffix =
      firstSegment?.marketing_carrier_flight_number || firstSegment?.operating_carrier_flight_number || "";
    const flightNumber = `${airlineCode}${flightNumberSuffix}`.trim() || "N/A";

    const bookingRedirectUrl = this.buildBookingRedirectUrl(input);

    return {
      offerId: offer.id,
      provider: "duffel",
      airline,
      airlineCode,
      flightNumber,
      originIata: input.origin.iata,
      destinationIata: input.destination.iata,
      departureAt,
      arrivalAt,
      durationMinutes,
      stops: Math.max(0, segments.length - 1),
      cabinClass: input.cabinClass,
      price: {
        amount: offer.total_amount ?? "0.00",
        currency: offer.total_currency ?? input.currency
      },
      baggage: {
        cabin: "Check baggage policy in fare details before booking.",
        checked: "Checked bag allowance depends on fare and airline policy."
      },
      fareType: this.inferFareType(offer.conditions),
      offerExpiresAt: offer.expires_at ?? new Date(Date.now() + 20 * 60 * 1000).toISOString(),
      bookingRedirectUrl,
      raw: offer
    };
  }

  private inferFareType(conditions: any): string {
    const changeAllowed = conditions?.change_before_departure?.allowed;
    const refundAllowed = conditions?.refund_before_departure?.allowed;

    if (changeAllowed === true && refundAllowed === true) {
      return "flexible";
    }

    if (changeAllowed === true || refundAllowed === true) {
      return "standard";
    }

    return "basic";
  }

  private mapConditions(conditions: any): FlightDetails["conditions"] {
    const cancellation = this.ruleSummary("Cancellation", conditions?.refund_before_departure, conditions?.refund_after_departure);
    const changes = this.ruleSummary("Changes", conditions?.change_before_departure, conditions?.change_after_departure);

    const noShow =
      typeof conditions?.no_show?.allowed === "boolean"
        ? conditions.no_show.allowed
          ? "No-show may keep partial value depending on airline policy."
          : "No-show is not allowed and is usually non-refundable."
        : "No-show policy depends on airline fare rules.";

    return {
      cancellation,
      changes,
      noShow
    };
  }

  private ruleSummary(label: string, before: any, after: any): string {
    const beforeSummary = this.singleRuleSummary("before departure", before);
    const afterSummary = this.singleRuleSummary("after departure", after);

    if (!beforeSummary && !afterSummary) {
      return `${label} policy depends on airline fare rules.`;
    }

    return [beforeSummary, afterSummary].filter(Boolean).join(" ");
  }

  private singleRuleSummary(windowLabel: string, rule: any): string {
    if (!rule || typeof rule.allowed !== "boolean") {
      return "";
    }

    if (!rule.allowed) {
      return `${windowLabel}: not allowed.`;
    }

    const amount = this.formatPenalty(rule.penalty_amount, rule.penalty_currency);
    if (amount) {
      return `${windowLabel}: allowed with penalty ${amount}.`;
    }

    return `${windowLabel}: allowed; fare difference may apply.`;
  }

  private formatPenalty(amount?: string, currency?: string): string | undefined {
    if (!amount) {
      return undefined;
    }

    return currency ? `${currency} ${amount}` : amount;
  }

  private durationBetween(departureAt: string, arrivalAt: string): number | undefined {
    const departure = Date.parse(departureAt);
    const arrival = Date.parse(arrivalAt);

    if (!Number.isFinite(departure) || !Number.isFinite(arrival) || arrival < departure) {
      return undefined;
    }

    return Math.round((arrival - departure) / 60000);
  }

  private parseDurationMinutes(value?: string): number | undefined {
    if (!value) {
      return undefined;
    }

    const match = value.match(/^PT(?:(\d+)H)?(?:(\d+)M)?$/);
    if (!match) {
      return undefined;
    }

    const hours = Number.parseInt(match[1] ?? "0", 10);
    const minutes = Number.parseInt(match[2] ?? "0", 10);
    return hours * 60 + minutes;
  }

  private buildBookingRedirectUrl(input: NormalizedSearchInput): string {
    const outbound = `${input.origin.iata}.${input.destination.iata}.${input.departureDate}`;
    const inbound = input.returnDate ? `*${input.destination.iata}.${input.origin.iata}.${input.returnDate}` : "";
    return `https://www.google.com/travel/flights?hl=${encodeURIComponent(input.locale)}#flt=${outbound}${inbound}`;
  }

  private extractDuffelOfferId(offer: FlightOffer): string | undefined {
    const rawId = (offer.raw as any)?.id;
    if (typeof rawId === "string" && rawId.length > 0) {
      return rawId;
    }

    if (offer.offerId.startsWith("off_")) {
      return offer.offerId;
    }
    return undefined;
  }
}
