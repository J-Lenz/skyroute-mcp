import { BookingSession, FlightOffer, FlightProvider, NormalizedSearchInput } from "../types";
import { combineDateAndMinutes } from "../services/dates";
import { stableId } from "../services/id";

const AIRLINES = [
  { code: "TP", name: "TAP Air Portugal" },
  { code: "LH", name: "Lufthansa" },
  { code: "BA", name: "British Airways" },
  { code: "AF", name: "Air France" },
  { code: "KL", name: "KLM" },
  { code: "UA", name: "United Airlines" },
  { code: "DL", name: "Delta Air Lines" },
  { code: "AA", name: "American Airlines" },
  { code: "IB", name: "Iberia" }
];

function hashToInt(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function generateBasePrice(input: NormalizedSearchInput): number {
  const routeFactor = (input.origin.iata.charCodeAt(0) + input.destination.iata.charCodeAt(0)) % 300;
  const dateFactor = hashToInt(input.departureDate) % 120;
  const passengerFactor = input.passengers.adults * 70 + input.passengers.children * 40 + input.passengers.infants * 15;
  const cabinMultiplier =
    input.cabinClass === "first"
      ? 3.2
      : input.cabinClass === "business"
        ? 2.1
        : input.cabinClass === "premium_economy"
          ? 1.4
          : 1;

  return Math.round((220 + routeFactor + dateFactor + passengerFactor) * cabinMultiplier);
}

function generateStops(seed: number): number {
  if (seed % 10 < 5) {
    return 0;
  }
  if (seed % 10 < 9) {
    return 1;
  }
  return 2;
}

function generateDurationMinutes(seed: number, stops: number): number {
  const base = 180 + (seed % 420);
  return base + stops * 85;
}

export class MockFlightProvider implements FlightProvider {
  name: "mock" = "mock";

  async searchFlights(input: NormalizedSearchInput): Promise<FlightOffer[]> {
    const basePrice = generateBasePrice(input);
    const routeSeed = hashToInt(`${input.origin.iata}-${input.destination.iata}-${input.departureDate}`);

    const offers = new Array(Math.max(input.maxResults, 6)).fill(null).map((_, idx): FlightOffer => {
      const seed = routeSeed + idx * 7919;
      const airline = AIRLINES[seed % AIRLINES.length];
      const stops = generateStops(seed);
      const durationMinutes = generateDurationMinutes(seed, stops);
      const departMinute = 300 + (seed % 840);
      const arrivalMinute = departMinute + durationMinutes;
      const departureAt = combineDateAndMinutes(input.departureDate, departMinute);
      const arrivalAt = combineDateAndMinutes(input.departureDate, arrivalMinute);
      const price = basePrice + (idx * 23 + (seed % 90));

      const offerId = stableId(
        "offer",
        input.origin.iata,
        input.destination.iata,
        input.departureDate,
        String(idx),
        String(price),
        String(durationMinutes)
      );

      const fareType = seed % 3 === 0 ? "flexible" : seed % 2 === 0 ? "standard" : "basic";
      const checkedBag = fareType === "basic" ? "No checked bag included" : "1 x 23kg checked bag included";
      const cabinBag = "1 cabin bag (8kg)";
      const offerExpiresAt = new Date(Date.now() + 45 * 60 * 1000).toISOString();

      return {
        offerId,
        provider: "mock",
        airline: airline.name,
        airlineCode: airline.code,
        flightNumber: `${airline.code}${100 + (seed % 900)}`,
        originIata: input.origin.iata,
        destinationIata: input.destination.iata,
        departureAt,
        arrivalAt,
        durationMinutes,
        stops,
        cabinClass: input.cabinClass,
        price: {
          amount: `${price.toFixed(2)}`,
          currency: input.currency
        },
        baggage: {
          cabin: cabinBag,
          checked: checkedBag
        },
        fareType,
        offerExpiresAt,
        bookingRedirectUrl: `https://www.duffel.com/flights?from=${input.origin.iata}&to=${input.destination.iata}&departure_date=${input.departureDate}`
      };
    });

    return offers.slice(0, input.maxResults);
  }

  async createBookingSession(offer: FlightOffer): Promise<BookingSession> {
    return {
      url: `https://links.duffel.com/mock?offer=${offer.offerId}`,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
    };
  }

  async getConditions(offer: FlightOffer): Promise<{ cancellation: string; changes: string; noShow: string }> {
    if (offer.fareType === "flexible") {
      return {
        cancellation: "Cancellation allowed until 24h before departure; airline fee may apply.",
        changes: "Date and time changes allowed with fare difference.",
        noShow: "No-show forfeits remaining value."
      };
    }

    if (offer.fareType === "standard") {
      return {
        cancellation: "Cancellation may be possible with penalty based on airline rules.",
        changes: "Changes allowed with fare difference and change fee.",
        noShow: "No-show usually non-refundable."
      };
    }

    return {
      cancellation: "Basic fares are generally non-refundable.",
      changes: "Changes are limited and usually incur high penalties.",
      noShow: "No-show results in ticket value loss."
    };
  }
}
