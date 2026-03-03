export type CabinClass = "economy" | "premium_economy" | "business" | "first";

export interface Airport {
  iata: string;
  city: string;
  name: string;
  country: string;
}

export interface PassengerCounts {
  adults: number;
  children: number;
  infants: number;
}

export interface NormalizedSearchInput {
  origin: Airport;
  destination: Airport;
  departureDate: string;
  returnDate?: string;
  passengers: PassengerCounts;
  cabinClass: CabinClass;
  currency: string;
  locale: string;
  maxResults: number;
  sort: "cheapest" | "fastest" | "best";
}

export interface FlightOffer {
  offerId: string;
  provider: "mock" | "duffel";
  airline: string;
  airlineCode: string;
  flightNumber: string;
  originIata: string;
  destinationIata: string;
  departureAt: string;
  arrivalAt: string;
  durationMinutes: number;
  stops: number;
  cabinClass: CabinClass;
  price: {
    amount: string;
    currency: string;
  };
  baggage: {
    cabin: string;
    checked: string;
  };
  fareType: string;
  offerExpiresAt: string;
  bookingRedirectUrl: string;
  raw?: unknown;
}

export interface SearchResult {
  searchId: string;
  request: {
    origin: Airport;
    destination: Airport;
    departureDate: string;
    returnDate?: string;
    passengers: PassengerCounts;
    cabinClass: CabinClass;
    currency: string;
    locale: string;
  };
  summary: {
    totalResults: number;
    cheapest?: FlightOffer;
    fastest?: FlightOffer;
    best?: FlightOffer;
  };
  offers: FlightOffer[];
  nextActions: string[];
  notes?: string[];
}

export interface FlightDetails {
  searchId: string;
  offerId: string;
  airline: string;
  route: string;
  schedule: {
    departureAt: string;
    arrivalAt: string;
    durationMinutes: number;
    stops: number;
  };
  pricing: {
    amount: string;
    currency: string;
    fareType: string;
  };
  baggage: {
    cabin: string;
    checked: string;
  };
  conditions: {
    cancellation: string;
    changes: string;
    noShow: string;
  };
  bookingRedirectUrl: string;
  expiresAt: string;
  nextActions: string[];
}

export interface BookingRedirect {
  searchId: string;
  offerId: string;
  bookingRedirectUrl: string;
  provider: "mock" | "duffel";
  message: string;
  nextActions: string[];
}

export interface BookingSession {
  url: string;
  expiresAt?: string;
}

export interface FlightProvider {
  name: "mock" | "duffel";
  searchFlights(input: NormalizedSearchInput): Promise<FlightOffer[]>;
  getConditions(offer: FlightOffer): Promise<FlightDetails["conditions"]>;
  createBookingSession?(offer: FlightOffer): Promise<BookingSession>;
}
