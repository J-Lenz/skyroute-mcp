import { describe, it, expect } from "vitest";
import { stableId } from "../../src/services/id";

describe("stableId", () => {
  it("produces deterministic output for same inputs", () => {
    const id1 = stableId("offer", "SFO", "LIS", "2025-06-15");
    const id2 = stableId("offer", "SFO", "LIS", "2025-06-15");
    expect(id1).toBe(id2);
  });

  it("produces different output for different inputs", () => {
    const id1 = stableId("offer", "SFO", "LIS", "2025-06-15");
    const id2 = stableId("offer", "JFK", "LHR", "2025-06-15");
    expect(id1).not.toBe(id2);
  });

  it("uses the prefix correctly", () => {
    const id = stableId("search", "SFO", "LIS");
    expect(id).toMatch(/^search_/);
  });

  it("produces the format prefix_12hexchars", () => {
    const id = stableId("offer", "SFO", "LIS");
    expect(id).toMatch(/^offer_[a-f0-9]{12}$/);
  });

  it("different prefixes with same parts produce different IDs", () => {
    const id1 = stableId("offer", "SFO", "LIS");
    const id2 = stableId("search", "SFO", "LIS");
    expect(id1).not.toBe(id2);
  });
});
