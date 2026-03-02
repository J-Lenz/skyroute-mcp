import dotenv from "dotenv";

dotenv.config();

function parseNumber(value: string | undefined, fallback: number): number {
  const parsed = Number.parseInt(value ?? "", 10);
  return Number.isFinite(parsed) ? parsed : fallback;
}

export interface AppConfig {
  port: number;
  mcpBaseUrl: string;
  provider: "mock" | "duffel";
  duffelApiKey: string;
  defaultCurrency: string;
  defaultLocale: string;
  defaultMaxResults: number;
  offerCacheTtlMs: number;
}

export function loadConfig(): AppConfig {
  return {
    port: parseNumber(process.env.PORT, 3000),
    mcpBaseUrl: process.env.MCP_BASE_URL ?? "http://localhost:3000",
    provider: process.env.FLIGHT_PROVIDER === "duffel" ? "duffel" : "mock",
    duffelApiKey: process.env.DUFFEL_API_KEY ?? "",
    defaultCurrency: process.env.DEFAULT_CURRENCY ?? "USD",
    defaultLocale: process.env.DEFAULT_LOCALE ?? "en-US",
    defaultMaxResults: parseNumber(process.env.DEFAULT_MAX_RESULTS, 20),
    offerCacheTtlMs: parseNumber(process.env.OFFER_CACHE_TTL_MS, 30 * 60 * 1000)
  };
}
