import { describe, it, expect } from "vitest";
import { MockFlightProvider } from "../../src/providers/mock";
import { NormalizedSearchInput } from "../../src/types";

function makeInput(overrides?: Partial<NormalizedSearchInput>): NormalizedSearchInput {
  return {
    origin: { iata: "SFO", city: "San Francisco", name: "SFO Airport", country: "US" },
    destination: { iata: "LIS", city: "Lisbon", name: "LIS Airport", country: "PT" },
    departureDate: "2025-06-15",
    passengers: { adults: 1, children: 0, infants: 0 },
    cabinClass: "economy",
    currency: "USD",
    locale: "en-US",
    maxResults: 5,
    sort: "best",
    ...overrides
  };
}

describe("MockFlightProvider", () => {
  const provider = new MockFlightProvider();

  it("has name 'mock'", () => {
    expect(provider.name).toBe("mock");
  });

  it("returns flight offers", async () => {
    const offers = await provider.searchFlights(makeInput());
    expect(offers.length).toBeGreaterThan(0);
    expect(offers[0].provider).toBe("mock");
  });

  it("respects maxResults", async () => {
    const offers = await provider.searchFlights(makeInput({ maxResults: 3 }));
    expect(offers).toHaveLength(3);
  });

  it("returns at least 6 offers when maxResults is higher", async () => {
    const offers = await provider.searchFlights(makeInput({ maxResults: 10 }));
    expect(offers).toHaveLength(10);
  });

  it("produces deterministic results for same input", async () => {
    const input = makeInput();
    const offers1 = await provider.searchFlights(input);
    const offers2 = await provider.searchFlights(input);
    expect(offers1.map((o) => o.offerId)).toEqual(offers2.map((o) => o.offerId));
    expect(offers1.map((o) => o.price.amount)).toEqual(offers2.map((o) => o.price.amount));
  });

  it("returns offers with all required fields", async () => {
    const offers = await provider.searchFlights(makeInput());
    const offer = offers[0];
    expect(offer.offerId).toBeDefined();
    expect(offer.airline).toBeDefined();
    expect(offer.airlineCode).toBeDefined();
    expect(offer.flightNumber).toBeDefined();
    expect(offer.originIata).toBe("SFO");
    expect(offer.destinationIata).toBe("LIS");
    expect(offer.departureAt).toBeDefined();
    expect(offer.arrivalAt).toBeDefined();
    expect(offer.durationMinutes).toBeGreaterThan(0);
    expect(offer.stops).toBeGreaterThanOrEqual(0);
    expect(offer.price.amount).toBeDefined();
    expect(offer.price.currency).toBe("USD");
    expect(offer.baggage).toBeDefined();
    expect(offer.fareType).toBeDefined();
    expect(offer.bookingRedirectUrl).toBeDefined();
  });

  describe("getConditions", () => {
    it("returns flexible conditions", async () => {
      const conditions = await provider.getConditions({
        fareType: "flexible"
      } as any);
      expect(conditions.cancellation).toContain("allowed");
      expect(conditions.changes).toContain("allowed");
    });

    it("returns standard conditions", async () => {
      const conditions = await provider.getConditions({
        fareType: "standard"
      } as any);
      expect(conditions.cancellation).toContain("possible");
      expect(conditions.changes).toContain("allowed");
    });

    it("returns basic conditions", async () => {
      const conditions = await provider.getConditions({
        fareType: "basic"
      } as any);
      expect(conditions.cancellation).toContain("non-refundable");
      expect(conditions.changes).toContain("limited");
    });
  });
});
