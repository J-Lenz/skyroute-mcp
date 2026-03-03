import express from "express";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import { z } from "zod";
import { loadConfig, validateConfig } from "./config";
import { createBearerAuth } from "./middleware/auth";
import { createIpRateLimiter } from "./middleware/rateLimit";
import { SkyRouteService } from "./skyroute";

const config = loadConfig();
validateConfig(config);
const service = new SkyRouteService(config);

function createServer(): McpServer {
  const server = new McpServer({
    name: "skyroute",
    version: "0.1.0"
  });

  const registerToolCompat = (
    name: string,
    description: string,
    schema: Record<string, z.ZodTypeAny>,
    handler: (args: any) => Promise<any>
  ): void => {
    const typedServer = server as any;
    if (typeof typedServer.registerTool === "function") {
      typedServer.registerTool(
        name,
        {
          title: name,
          description,
          inputSchema: schema
        },
        handler
      );
      return;
    }

    typedServer.tool(name, description, schema, handler);
  };

  registerToolCompat(
    "search_flights",
    [
      "Search flight offers for a route and date.",
      "Call this first before get_flight_details or book_flight.",
      "Use natural dates such as 'next Friday' or ISO dates.",
      "Returns normalized offers, search_id, and next_actions."
    ].join(" "),
    {
      origin: z.string().min(2).describe("Origin city or airport code, e.g. 'SFO' or 'San Francisco'."),
      destination: z.string().min(2).describe("Destination city or airport code, e.g. 'LIS' or 'Lisbon'."),
      departure_date: z.string().min(2).optional().describe("Departure date in natural language or ISO format."),
      date: z.string().min(2).optional().describe("Alias for departure_date (for compatibility)."),
      return_date: z.string().optional().describe("Optional return date in natural language or ISO format."),
      adults: z.number().int().min(1).max(9).optional().describe("Number of adult passengers. Default 1."),
      children: z.number().int().min(0).max(8).optional().describe("Number of child passengers. Default 0."),
      infants: z.number().int().min(0).max(8).optional().describe("Number of infant passengers. Default 0."),
      cabin_class: z.enum(["economy", "premium_economy", "business", "first"]).optional(),
      currency: z.string().length(3).optional().describe("ISO currency code, e.g. USD."),
      locale: z.string().optional().describe("Locale tag, e.g. en-US."),
      max_results: z.number().int().min(1).max(50).optional(),
      sort: z.enum(["cheapest", "fastest", "best"]).optional().describe("Sort strategy for returned offers.")
    },
    async (args) => {
      const result = await service.searchFlights(args);
      return {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
        structuredContent: result
      };
    }
  );

  registerToolCompat(
    "get_flight_details",
    [
      "Get fare conditions and baggage details for one offer.",
      "Call this only after search_flights and only with search_id + offer_id from that response.",
      "Use this before book_flight when user asks about change/cancel rules."
    ].join(" "),
    {
      search_id: z.string().min(5).describe("ID returned by search_flights."),
      offer_id: z.string().min(5).describe("Offer ID returned by search_flights.")
    },
    async (args) => {
      const result = await service.getFlightDetails(args);
      return {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
        structuredContent: result
      };
    }
  );

  registerToolCompat(
    "book_flight",
    [
      "Create a checkout session and return the booking URL for the selected offer.",
      "Call this only after search_flights with a valid search_id and offer_id.",
      "Creates a Duffel checkout session and returns the booking URL. Open the URL to complete payment on Duffel's hosted checkout page."
    ].join(" "),
    {
      search_id: z.string().min(5).describe("ID returned by search_flights."),
      offer_id: z.string().min(5).describe("Offer ID returned by search_flights.")
    },
    async (args) => {
      const result = await service.bookFlight(args);
      return {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
        structuredContent: result
      };
    }
  );

  return server;
}

const app = express();
const transports: Record<string, { transport: SSEServerTransport; server: McpServer }> = {};
app.use(express.json());
app.set("trust proxy", true);

const rateLimiter = createIpRateLimiter({
  windowMs: config.rateLimitWindowMs,
  maxRequests: config.rateLimitMaxRequests
});
const bearerAuth = createBearerAuth({ apiKey: config.apiKey });
app.use("/sse", rateLimiter, bearerAuth);
app.use("/messages", rateLimiter, bearerAuth);

app.get("/health", (_req, res) => {
  res.json({
    ok: true,
    service: "skyroute-mcp",
    provider: service.getMeta().provider,
    supportedAirports: service.getMeta().supportedAirports,
    now: new Date().toISOString()
  });
});

app.get("/sse", async (_req, res) => {
  const server = createServer();
  const transport = new SSEServerTransport("/messages", res);
  transports[transport.sessionId] = { transport, server };

  res.on("close", () => {
    delete transports[transport.sessionId];
  });

  await server.connect(transport);
});

app.post("/messages", async (req, res) => {
  const sessionId = req.query.sessionId;
  if (typeof sessionId !== "string") {
    res.status(400).json({ error: "sessionId query parameter is required" });
    return;
  }

  const active = transports[sessionId];
  if (!active) {
    res.status(404).json({ error: "No active MCP session for this sessionId" });
    return;
  }

  const transportAny = active.transport as any;
  await transportAny.handlePostMessage(req, res, req.body);
});

app.listen(config.port, () => {
  const authStatus = config.apiKey ? "enabled" : "disabled";
  const envLabel = config.provider === "duffel" ? `, env=${config.duffelEnv}` : "";
  console.log(
    `SkyRoute MCP listening on port ${config.port} (provider=${config.provider}${envLabel}, auth=${authStatus}). SSE endpoint: ${config.mcpBaseUrl}/sse`
  );
});
