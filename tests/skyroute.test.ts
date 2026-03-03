import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { SkyRouteService } from "../src/skyroute";
import { AppConfig } from "../src/config";

function makeConfig(overrides?: Partial<AppConfig>): AppConfig {
  return {
    port: 3000,
    mcpBaseUrl: "http://localhost:3000",
    provider: "mock",
    duffelApiKey: "",
    duffelEnv: "sandbox",
    duffelBaseUrl: "https://api.duffel.com",
    defaultCurrency: "USD",
    defaultLocale: "en-US",
    defaultMaxResults: 20,
    offerCacheTtlMs: 30 * 60 * 1000,
    rateLimitWindowMs: 60_000,
    rateLimitMaxRequests: 300,
    duffelLinksSuccessUrl: "https://skyroute.dev/booking/success",
    duffelLinksFailureUrl: "https://skyroute.dev/booking/failure",
    duffelLinksAbandonmentUrl: "https://skyroute.dev/booking/abandoned",
    ...overrides
  };
}

describe("SkyRouteService", () => {
  let service: SkyRouteService;

  beforeEach(() => {
    vi.useFakeTimers({ now: new Date("2025-06-10T12:00:00Z") });
    service = new SkyRouteService(makeConfig());
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe("getMeta", () => {
    it("returns provider and airport count", () => {
      const meta = service.getMeta();
      expect(meta.provider).toBe("mock");
      expect(meta.supportedAirports).toBe(70);
      expect(meta.cacheTtlMs).toBe(30 * 60 * 1000);
    });
  });

  describe("searchFlights", () => {
    it("returns a SearchResult for valid input", async () => {
      const result = await service.searchFlights({
        origin: "SFO",
        destination: "LIS",
        departure_date: "2025-06-15"
      });

      expect(result.searchId).toMatch(/^search_/);
      expect(result.offers.length).toBeGreaterThan(0);
      expect(result.summary.totalResults).toBe(result.offers.length);
      expect(result.summary.cheapest).toBeDefined();
      expect(result.summary.fastest).toBeDefined();
      expect(result.summary.best).toBeDefined();
      expect(result.nextActions).toContain("get_flight_details");
    });

    it("resolves city names", async () => {
      const result = await service.searchFlights({
        origin: "San Francisco",
        destination: "Lisbon",
        departure_date: "2025-06-15"
      });

      expect(result.request.origin.iata).toBe("SFO");
      expect(result.request.destination.iata).toBe("LIS");
      expect(result.notes).toBeDefined();
      expect(result.notes!.length).toBeGreaterThan(0);
    });

    it("accepts date alias", async () => {
      const result = await service.searchFlights({
        origin: "SFO",
        destination: "LIS",
        date: "2025-06-15"
      });

      expect(result.request.departureDate).toBe("2025-06-15");
    });

    it("throws for invalid origin", async () => {
      await expect(
        service.searchFlights({
          origin: "Atlantis",
          destination: "LIS",
          departure_date: "2025-06-15"
        })
      ).rejects.toThrow("Invalid origin");
    });

    it("throws for unparseable date", async () => {
      await expect(
        service.searchFlights({
          origin: "SFO",
          destination: "LIS",
          departure_date: "not a date"
        })
      ).rejects.toThrow("Unable to parse");
    });

    it("throws when return date is before departure", async () => {
      await expect(
        service.searchFlights({
          origin: "SFO",
          destination: "LIS",
          departure_date: "2025-06-20",
          return_date: "2025-06-10"
        })
      ).rejects.toThrow("return_date must be on or after");
    });

    it("clamps infants to adult count", async () => {
      const result = await service.searchFlights({
        origin: "SFO",
        destination: "LIS",
        departure_date: "2025-06-15",
        adults: 1,
        infants: 5
      });

      expect(result.request.passengers.infants).toBe(1);
    });
  });

  describe("getFlightDetails", () => {
    it("returns details for a cached offer", async () => {
      const search = await service.searchFlights({
        origin: "SFO",
        destination: "LIS",
        departure_date: "2025-06-15"
      });

      const details = await service.getFlightDetails({
        search_id: search.searchId,
        offer_id: search.offers[0].offerId
      });

      expect(details.offerId).toBe(search.offers[0].offerId);
      expect(details.airline).toBeDefined();
      expect(details.route).toContain("SFO");
      expect(details.conditions).toBeDefined();
      expect(details.nextActions).toContain("book_flight");
    });

    it("throws for unknown search ID", async () => {
      await expect(
        service.getFlightDetails({ search_id: "search_unknown", offer_id: "offer_unknown" })
      ).rejects.toThrow("Search not found");
    });
  });

  describe("bookFlight", () => {
    it("returns a booking session URL from the provider", async () => {
      const search = await service.searchFlights({
        origin: "SFO",
        destination: "LIS",
        departure_date: "2025-06-15"
      });

      const booking = await service.bookFlight({
        search_id: search.searchId,
        offer_id: search.offers[0].offerId
      });

      expect(booking.offerId).toBe(search.offers[0].offerId);
      expect(booking.bookingRedirectUrl).toContain("links.duffel.com/mock");
      expect(booking.provider).toBe("mock");
      expect(booking.message).toContain("checkout");
    });

    it("throws for unknown search ID", async () => {
      await expect(
        service.bookFlight({ search_id: "search_unknown", offer_id: "offer_unknown" })
      ).rejects.toThrow("Search not found");
    });
  });
});
