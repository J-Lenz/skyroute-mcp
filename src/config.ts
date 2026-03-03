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
  duffelEnv: "sandbox" | "live";
  duffelBaseUrl: string;
  apiKey: string;
  defaultCurrency: string;
  defaultLocale: string;
  defaultMaxResults: number;
  offerCacheTtlMs: number;
  rateLimitWindowMs: number;
  rateLimitMaxRequests: number;
}

export function validateConfig(config: AppConfig): void {
  if (config.provider !== "duffel") {
    return;
  }

  if (!config.duffelApiKey) {
    throw new Error("DUFFEL_API_KEY is required when FLIGHT_PROVIDER=duffel");
  }

  const isTestKey = config.duffelApiKey.startsWith("duffel_test_");
  const isLiveKey = config.duffelApiKey.startsWith("duffel_live_");

  if (config.duffelEnv === "live" && isTestKey) {
    console.warn("[config] WARNING: DUFFEL_ENV=live but API key appears to be a test key.");
  }

  if (config.duffelEnv === "sandbox" && isLiveKey) {
    console.warn("[config] WARNING: DUFFEL_ENV=sandbox but API key appears to be a live key.");
  }
}

export function loadConfig(): AppConfig {
  return {
    port: parseNumber(process.env.PORT, 3000),
    mcpBaseUrl: process.env.MCP_BASE_URL ?? "http://localhost:3000",
    provider: process.env.FLIGHT_PROVIDER === "duffel" ? "duffel" : "mock",
    duffelApiKey: process.env.DUFFEL_API_KEY ?? "",
    duffelEnv: process.env.DUFFEL_ENV === "live" ? "live" : "sandbox",
    duffelBaseUrl: process.env.DUFFEL_BASE_URL ?? "https://api.duffel.com",
    apiKey: process.env.API_KEY ?? "",
    defaultCurrency: process.env.DEFAULT_CURRENCY ?? "USD",
    defaultLocale: process.env.DEFAULT_LOCALE ?? "en-US",
    defaultMaxResults: parseNumber(process.env.DEFAULT_MAX_RESULTS, 20),
    offerCacheTtlMs: parseNumber(process.env.OFFER_CACHE_TTL_MS, 30 * 60 * 1000),
    rateLimitWindowMs: parseNumber(process.env.RATE_LIMIT_WINDOW_MS, 60_000),
    rateLimitMaxRequests: parseNumber(process.env.RATE_LIMIT_MAX_REQUESTS, 300)
  };
}
