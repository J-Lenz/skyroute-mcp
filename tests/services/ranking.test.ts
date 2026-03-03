import { describe, it, expect } from "vitest";
import { rankOffers } from "../../src/services/ranking";
import { FlightOffer } from "../../src/types";

function makeOffer(overrides: Partial<FlightOffer> & { price: { amount: string; currency: string }; durationMinutes: number }): FlightOffer {
  return {
    offerId: "offer_test",
    provider: "mock",
    airline: "Test Air",
    airlineCode: "TA",
    flightNumber: "TA100",
    originIata: "SFO",
    destinationIata: "LIS",
    departureAt: "2025-06-15T08:00:00.000Z",
    arrivalAt: "2025-06-15T18:00:00.000Z",
    stops: 0,
    cabinClass: "economy",
    baggage: { cabin: "1 cabin bag", checked: "1 checked bag" },
    fareType: "standard",
    offerExpiresAt: "2025-06-15T23:00:00.000Z",
    bookingRedirectUrl: "https://example.com",
    ...overrides
  };
}

describe("rankOffers", () => {
  const cheapFast = makeOffer({ offerId: "a", price: { amount: "100.00", currency: "USD" }, durationMinutes: 300 });
  const cheapSlow = makeOffer({ offerId: "b", price: { amount: "100.00", currency: "USD" }, durationMinutes: 600 });
  const expensiveFast = makeOffer({ offerId: "c", price: { amount: "500.00", currency: "USD" }, durationMinutes: 300 });
  const expensiveSlow = makeOffer({ offerId: "d", price: { amount: "500.00", currency: "USD" }, durationMinutes: 600 });

  it("sorts cheapest by price ascending, duration as tiebreaker", () => {
    const result = rankOffers([expensiveSlow, cheapSlow, cheapFast, expensiveFast], "cheapest");
    expect(result.map((o) => o.offerId)).toEqual(["a", "b", "c", "d"]);
  });

  it("sorts fastest by duration ascending, price as tiebreaker", () => {
    const result = rankOffers([expensiveSlow, cheapSlow, cheapFast, expensiveFast], "fastest");
    expect(result.map((o) => o.offerId)).toEqual(["a", "c", "b", "d"]);
  });

  it("sorts best using weighted score", () => {
    const result = rankOffers([expensiveSlow, cheapSlow, cheapFast, expensiveFast], "best");
    expect(result[0].offerId).toBe("a");
    expect(result[result.length - 1].offerId).toBe("d");
  });

  it("returns empty array for empty input", () => {
    expect(rankOffers([], "cheapest")).toEqual([]);
  });

  it("returns single offer for all sort modes", () => {
    const single = makeOffer({ offerId: "x", price: { amount: "200.00", currency: "USD" }, durationMinutes: 400 });
    expect(rankOffers([single], "cheapest")).toHaveLength(1);
    expect(rankOffers([single], "fastest")).toHaveLength(1);
    expect(rankOffers([single], "best")).toHaveLength(1);
  });

  it("does not mutate the original array", () => {
    const original = [expensiveSlow, cheapFast];
    const copy = [...original];
    rankOffers(original, "cheapest");
    expect(original.map((o) => o.offerId)).toEqual(copy.map((o) => o.offerId));
  });
});
