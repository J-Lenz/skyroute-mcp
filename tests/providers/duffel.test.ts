import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { DuffelFlightProvider } from "../../src/providers/duffel";
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

function makeDuffelOfferResponse(offers: any[] = []) {
  return {
    ok: true,
    status: 200,
    text: async () => JSON.stringify({ data: { id: "orq_test", offers } })
  };
}

function makeDuffelOffer(overrides: any = {}) {
  return {
    id: "off_test_123",
    total_amount: "450.00",
    total_currency: "USD",
    total_duration: "PT10H30M",
    expires_at: "2025-06-15T23:00:00Z",
    owner: { name: "TAP Air Portugal", iata_code: "TP" },
    slices: [
      {
        duration: "PT10H30M",
        segments: [
          {
            departing_at: "2025-06-15T08:00:00",
            arriving_at: "2025-06-15T18:30:00",
            marketing_carrier: { iata_code: "TP", name: "TAP Air Portugal" },
            marketing_carrier_flight_number: "202"
          }
        ]
      }
    ],
    conditions: {
      change_before_departure: { allowed: true, penalty_amount: "50.00", penalty_currency: "USD" },
      refund_before_departure: { allowed: false },
      no_show: { allowed: false }
    },
    ...overrides
  };
}

describe("DuffelFlightProvider", () => {
  let fetchSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    fetchSpy = vi.spyOn(globalThis, "fetch");
  });

  afterEach(() => {
    fetchSpy.mockRestore();
  });

  it("throws if apiKey is empty", () => {
    expect(() => new DuffelFlightProvider({ apiKey: "", baseUrl: "https://api.duffel.com" })).toThrow(
      "DUFFEL_API_KEY is required"
    );
  });

  it("has name 'duffel'", () => {
    const provider = new DuffelFlightProvider({ apiKey: "duffel_test_abc", baseUrl: "https://api.duffel.com" });
    expect(provider.name).toBe("duffel");
  });

  describe("searchFlights", () => {
    it("maps Duffel offers to FlightOffer type", async () => {
      const provider = new DuffelFlightProvider({ apiKey: "duffel_test_abc", baseUrl: "https://api.duffel.com" });
      fetchSpy.mockResolvedValue(makeDuffelOfferResponse([makeDuffelOffer()]) as any);

      const offers = await provider.searchFlights(makeInput());
      expect(offers).toHaveLength(1);

      const offer = offers[0];
      expect(offer.provider).toBe("duffel");
      expect(offer.offerId).toBe("off_test_123");
      expect(offer.airline).toBe("TAP Air Portugal");
      expect(offer.airlineCode).toBe("TP");
      expect(offer.price.amount).toBe("450.00");
      expect(offer.price.currency).toBe("USD");
      expect(offer.durationMinutes).toBe(630);
      expect(offer.stops).toBe(0);
      expect(offer.fareType).toBe("standard");
    });

    it("returns empty array when no offers", async () => {
      const provider = new DuffelFlightProvider({ apiKey: "duffel_test_abc", baseUrl: "https://api.duffel.com" });
      fetchSpy.mockResolvedValue(makeDuffelOfferResponse([]) as any);

      const offers = await provider.searchFlights(makeInput());
      expect(offers).toEqual([]);
    });

    it("throws on API error", async () => {
      const provider = new DuffelFlightProvider({ apiKey: "duffel_test_abc", baseUrl: "https://api.duffel.com" });
      fetchSpy.mockResolvedValue({
        ok: false,
        status: 422,
        text: async () => JSON.stringify({ errors: [{ message: "Invalid request" }] })
      } as any);

      await expect(provider.searchFlights(makeInput())).rejects.toThrow("Duffel API error (422)");
    });

    it("skips offers without id", async () => {
      const provider = new DuffelFlightProvider({ apiKey: "duffel_test_abc", baseUrl: "https://api.duffel.com" });
      fetchSpy.mockResolvedValue(makeDuffelOfferResponse([makeDuffelOffer({ id: undefined })]) as any);

      const offers = await provider.searchFlights(makeInput());
      expect(offers).toHaveLength(0);
    });

    it("skips offers with zero or missing price", async () => {
      const provider = new DuffelFlightProvider({ apiKey: "duffel_test_abc", baseUrl: "https://api.duffel.com" });
      fetchSpy.mockResolvedValue(
        makeDuffelOfferResponse([
          makeDuffelOffer({ id: "off_zero", total_amount: "0.00" }),
          makeDuffelOffer({ id: "off_missing", total_amount: undefined }),
          makeDuffelOffer({ id: "off_valid", total_amount: "250.00" })
        ]) as any
      );

      const offers = await provider.searchFlights(makeInput());
      expect(offers).toHaveLength(1);
      expect(offers[0].offerId).toBe("off_valid");
    });

    it("respects maxResults", async () => {
      const provider = new DuffelFlightProvider({ apiKey: "duffel_test_abc", baseUrl: "https://api.duffel.com" });
      const manyOffers = Array.from({ length: 10 }, (_, i) => makeDuffelOffer({ id: `off_${i}` }));
      fetchSpy.mockResolvedValue(makeDuffelOfferResponse(manyOffers) as any);

      const offers = await provider.searchFlights(makeInput({ maxResults: 3 }));
      expect(offers).toHaveLength(3);
    });

    it("infers flexible fare type when both change and refund allowed", async () => {
      const provider = new DuffelFlightProvider({ apiKey: "duffel_test_abc", baseUrl: "https://api.duffel.com" });
      const offer = makeDuffelOffer({
        conditions: {
          change_before_departure: { allowed: true },
          refund_before_departure: { allowed: true }
        }
      });
      fetchSpy.mockResolvedValue(makeDuffelOfferResponse([offer]) as any);

      const offers = await provider.searchFlights(makeInput());
      expect(offers[0].fareType).toBe("flexible");
    });

    it("infers basic fare type when nothing allowed", async () => {
      const provider = new DuffelFlightProvider({ apiKey: "duffel_test_abc", baseUrl: "https://api.duffel.com" });
      const offer = makeDuffelOffer({
        conditions: {
          change_before_departure: { allowed: false },
          refund_before_departure: { allowed: false }
        }
      });
      fetchSpy.mockResolvedValue(makeDuffelOfferResponse([offer]) as any);

      const offers = await provider.searchFlights(makeInput());
      expect(offers[0].fareType).toBe("basic");
    });
  });

  describe("getConditions", () => {
    it("fetches conditions from Duffel API", async () => {
      const provider = new DuffelFlightProvider({ apiKey: "duffel_test_abc", baseUrl: "https://api.duffel.com" });

      fetchSpy.mockResolvedValue({
        ok: true,
        status: 200,
        text: async () =>
          JSON.stringify({
            data: {
              conditions: {
                change_before_departure: { allowed: true, penalty_amount: "50.00", penalty_currency: "USD" },
                refund_before_departure: { allowed: false },
                no_show: { allowed: false }
              }
            }
          })
      } as any);

      const conditions = await provider.getConditions({
        offerId: "off_test_123",
        raw: { id: "off_test_123" }
      } as any);

      expect(conditions.changes).toContain("allowed");
      expect(conditions.changes).toContain("USD 50.00");
      expect(conditions.cancellation).toContain("not allowed");
      expect(conditions.noShow).toContain("not allowed");
    });

    it("falls back to raw conditions on API error", async () => {
      const provider = new DuffelFlightProvider({ apiKey: "duffel_test_abc", baseUrl: "https://api.duffel.com" });

      fetchSpy.mockRejectedValue(new Error("Network error"));

      const conditions = await provider.getConditions({
        offerId: "off_test_123",
        raw: {
          id: "off_test_123",
          conditions: {
            change_before_departure: { allowed: true },
            refund_before_departure: { allowed: true },
            no_show: { allowed: false }
          }
        }
      } as any);

      expect(conditions.changes).toContain("allowed");
      expect(conditions.cancellation).toContain("allowed");
    });
  });
});
