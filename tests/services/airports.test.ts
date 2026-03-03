import { describe, it, expect } from "vitest";
import { resolveAirport, supportedAirportsCount } from "../../src/services/airports";

describe("resolveAirport", () => {
  it("resolves exact IATA code", () => {
    const result = resolveAirport("SFO");
    expect(result.airport).toBeDefined();
    expect(result.airport!.iata).toBe("SFO");
    expect(result.note).toBeUndefined();
  });

  it("resolves IATA code case-insensitively", () => {
    const result = resolveAirport("sfo");
    expect(result.airport).toBeDefined();
    expect(result.airport!.iata).toBe("SFO");
  });

  it("resolves exact city name", () => {
    const result = resolveAirport("Lisbon");
    expect(result.airport).toBeDefined();
    expect(result.airport!.iata).toBe("LIS");
    expect(result.note).toContain("Resolved");
  });

  it("resolves city name case-insensitively", () => {
    const result = resolveAirport("lisbon");
    expect(result.airport).toBeDefined();
    expect(result.airport!.iata).toBe("LIS");
  });

  it("fuzzy matches partial city name", () => {
    const result = resolveAirport("San Fran");
    expect(result.airport).toBeDefined();
    expect(result.airport!.iata).toBe("SFO");
    expect(result.note).toContain("Fuzzy matched");
  });

  it("fuzzy matches airport name substring", () => {
    const result = resolveAirport("Heathrow");
    expect(result.airport).toBeDefined();
    expect(result.airport!.iata).toBe("LHR");
    expect(result.note).toContain("Fuzzy matched");
  });

  it("returns no airport for unrecognized input", () => {
    const result = resolveAirport("Atlantis");
    expect(result.airport).toBeUndefined();
    expect(result.note).toContain("No airport match found");
  });

  it("returns note for empty input", () => {
    const result = resolveAirport("");
    expect(result.airport).toBeUndefined();
    expect(result.note).toContain("empty");
  });

  it("returns note for whitespace-only input", () => {
    const result = resolveAirport("   ");
    expect(result.airport).toBeUndefined();
    expect(result.note).toContain("empty");
  });

  it("resolves multi-airport city to first match", () => {
    const result = resolveAirport("New York");
    expect(result.airport).toBeDefined();
    expect(result.airport!.iata).toBe("JFK");
  });

  it("resolves London to LHR as first match", () => {
    const result = resolveAirport("London");
    expect(result.airport).toBeDefined();
    expect(result.airport!.iata).toBe("LHR");
  });
});

describe("supportedAirportsCount", () => {
  it("returns the correct airport count", () => {
    expect(supportedAirportsCount()).toBe(70);
  });
});
