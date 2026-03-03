import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { OfferCache } from "../../src/services/cache";
import { SearchResult, FlightOffer } from "../../src/types";

function makeSearchResult(searchId: string, offers: Partial<FlightOffer>[] = []): SearchResult {
  return {
    searchId,
    request: {
      origin: { iata: "SFO", city: "San Francisco", name: "SFO Airport", country: "US" },
      destination: { iata: "LIS", city: "Lisbon", name: "LIS Airport", country: "PT" },
      departureDate: "2025-06-15",
      passengers: { adults: 1, children: 0, infants: 0 },
      cabinClass: "economy",
      currency: "USD",
      locale: "en-US"
    },
    summary: { totalResults: offers.length },
    offers: offers.map((o, i) => ({
      offerId: `offer_${i}`,
      provider: "mock" as const,
      airline: "Test Air",
      airlineCode: "TA",
      flightNumber: "TA100",
      originIata: "SFO",
      destinationIata: "LIS",
      departureAt: "2025-06-15T08:00:00Z",
      arrivalAt: "2025-06-15T18:00:00Z",
      durationMinutes: 600,
      stops: 0,
      cabinClass: "economy" as const,
      price: { amount: "300.00", currency: "USD" },
      baggage: { cabin: "1 cabin bag", checked: "1 checked bag" },
      fareType: "standard",
      offerExpiresAt: "2025-06-15T23:00:00Z",
      bookingRedirectUrl: "https://example.com",
      ...o
    })),
    nextActions: []
  };
}

describe("OfferCache", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("stores and retrieves a search result", () => {
    const cache = new OfferCache(60_000);
    const search = makeSearchResult("search_abc");
    cache.set(search);
    expect(cache.get("search_abc")).toBe(search);
  });

  it("returns undefined for unknown ID", () => {
    const cache = new OfferCache(60_000);
    expect(cache.get("search_unknown")).toBeUndefined();
  });

  it("finds an offer by offerId within a search", () => {
    const cache = new OfferCache(60_000);
    const search = makeSearchResult("search_abc", [{ offerId: "offer_x" }, { offerId: "offer_y" }]);
    cache.set(search);
    const offer = cache.getOffer("search_abc", "offer_x");
    expect(offer).toBeDefined();
    expect(offer!.offerId).toBe("offer_x");
  });

  it("returns undefined for missing offer ID", () => {
    const cache = new OfferCache(60_000);
    const search = makeSearchResult("search_abc", [{ offerId: "offer_x" }]);
    cache.set(search);
    expect(cache.getOffer("search_abc", "offer_missing")).toBeUndefined();
  });

  it("expires entries after TTL", () => {
    const cache = new OfferCache(5_000);
    const search = makeSearchResult("search_abc");
    cache.set(search);
    expect(cache.get("search_abc")).toBeDefined();

    vi.advanceTimersByTime(5_001);
    expect(cache.get("search_abc")).toBeUndefined();
  });

  it("does not expire entries before TTL", () => {
    const cache = new OfferCache(10_000);
    const search = makeSearchResult("search_abc");
    cache.set(search);

    vi.advanceTimersByTime(9_999);
    expect(cache.get("search_abc")).toBeDefined();
  });
});
