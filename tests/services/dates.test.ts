import { describe, it, expect } from "vitest";
import { toIsoDate, isValidDateOrder, combineDateAndMinutes } from "../../src/services/dates";

describe("toIsoDate", () => {
  const fixedNow = new Date("2025-06-10T12:00:00Z");

  it("parses ISO date string", () => {
    expect(toIsoDate("2025-06-15", fixedNow)).toBe("2025-06-15");
  });

  it("parses natural language date", () => {
    const result = toIsoDate("next Friday", fixedNow);
    expect(result).toBeDefined();
    expect(result).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it("parses relative date", () => {
    const result = toIsoDate("in 2 weeks", fixedNow);
    expect(result).toBeDefined();
    expect(result).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    const parsed = new Date(result!);
    expect(parsed.getTime()).toBeGreaterThan(fixedNow.getTime());
  });

  it("parses month and day", () => {
    const result = toIsoDate("March 6", fixedNow);
    expect(result).toBeDefined();
    expect(result).toMatch(/\d{4}-03-06/);
  });

  it("returns undefined for invalid input", () => {
    expect(toIsoDate("not a date", fixedNow)).toBeUndefined();
  });

  it("returns undefined for empty string", () => {
    expect(toIsoDate("", fixedNow)).toBeUndefined();
  });
});

describe("isValidDateOrder", () => {
  it("returns true when return is after departure", () => {
    expect(isValidDateOrder("2025-06-10", "2025-06-20")).toBe(true);
  });

  it("returns false when return is before departure", () => {
    expect(isValidDateOrder("2025-06-20", "2025-06-10")).toBe(false);
  });

  it("returns true when return equals departure", () => {
    expect(isValidDateOrder("2025-06-15", "2025-06-15")).toBe(true);
  });

  it("returns true when no return date", () => {
    expect(isValidDateOrder("2025-06-10")).toBe(true);
    expect(isValidDateOrder("2025-06-10", undefined)).toBe(true);
  });
});

describe("combineDateAndMinutes", () => {
  it("produces correct ISO string for morning time", () => {
    const result = combineDateAndMinutes("2025-06-15", 480);
    expect(result).toBe("2025-06-15T08:00:00.000Z");
  });

  it("produces correct ISO string for midnight", () => {
    const result = combineDateAndMinutes("2025-06-15", 0);
    expect(result).toBe("2025-06-15T00:00:00.000Z");
  });

  it("handles minutes past midnight wrapping to next day", () => {
    const result = combineDateAndMinutes("2025-06-15", 1500);
    const parsed = new Date(result);
    expect(parsed.getUTCDate()).toBe(16);
    expect(parsed.getUTCHours()).toBe(1);
  });
});
