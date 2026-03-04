# SkyRoute MCP (v0)

SkyRoute is a personal MCP server for flight workflows with three tools:

- `search_flights`
- `get_flight_details`
- `book_flight`

SkyRoute supports both `mock` and `duffel` providers.

## Live Status

- Public MCP endpoint: `https://mcp.skyroute.dev/sse`
- Current production provider: `duffel` (live)
- Transport: SSE (`/sse` + `/messages`)

## What Works In v0

- Natural date parsing (`next Friday`, `March 6`, `in 2 weeks`)
- Fuzzy airport matching (`Lisbon` -> `LIS`)
- Normalized, ranked offers (`cheapest`, `fastest`, `best`)
- Offer cache for details and booking follow-ups
- Duffel Links checkout sessions for booking
- MCP over SSE transport for remote hosting
- IP-based request rate limiting for public endpoint protection

## Quick Start

```bash
npm install
cp .env.example .env
npm run dev
```

Health check:

```bash
curl http://localhost:3000/health
```

Build and run:

```bash
npm run build
npm start
```

## Environment

See `.env.example`.

Key vars:

- `FLIGHT_PROVIDER=mock|duffel`
- `DUFFEL_API_KEY` (required when provider is `duffel`; key prefix determines env: `duffel_test_` = sandbox, `duffel_live_` = live)
- `DUFFEL_ENV=sandbox|live` (safety label; should match your key prefix)
- `DUFFEL_BASE_URL` (default `https://api.duffel.com`)
- `API_KEY` (bearer token for auth; leave empty to disable)
- `MCP_BASE_URL` (set this to your deployed domain in production)
- `DEFAULT_CURRENCY` (default `USD`)
- `DEFAULT_LOCALE` (default `en-US`)
- `DEFAULT_MAX_RESULTS` (default `20`)
- `RATE_LIMIT_WINDOW_MS` (default `60000`)
- `RATE_LIMIT_MAX_REQUESTS` (default `300`)
- `DUFFEL_LINKS_SUCCESS_URL` (default `https://skyroute.dev/booking/success`)
- `DUFFEL_LINKS_FAILURE_URL` (default `https://skyroute.dev/booking/failure`)
- `DUFFEL_LINKS_ABANDONMENT_URL` (default `https://skyroute.dev/booking/abandoned`)

## MCP Endpoints

- SSE: `GET /sse`
- Messages: `POST /messages?sessionId=<id>`

Production endpoint example:

- `https://mcp.skyroute.dev/sse`

## Connect From Other Machines

Anyone can connect if they can reach your public Railway URL.

Use this MCP endpoint:

- `https://mcp.skyroute.dev/sse`

Important:

- `localhost` only works on your own device.
- Other devices must use your public HTTPS URL.
- If `API_KEY` is set, clients must include `Authorization: Bearer <key>` in their requests.

### Claude Desktop

1. Open Claude Desktop.
2. Go to `Settings -> Connectors`.
3. Add a custom remote MCP server.
4. Set URL to `https://mcp.skyroute.dev/sse`.
5. If auth is enabled, add the `Authorization: Bearer <key>` header.
6. Save and reconnect.

### OpenClaw

Use `mcporter` with the same remote URL:

```bash
npx mcporter config add skyroute https://mcp.skyroute.dev/sse --transport sse --scope home
```

Then verify tools:

```bash
npx mcporter list skyroute --schema
```

## Tool Contracts

### `search_flights`
Call this first.

Input:
- `origin` (city or IATA)
- `destination` (city or IATA)
- `departure_date` (natural or ISO)
- `date` (alias for `departure_date`, optional)
- `return_date` (optional)
- `adults`, `children`, `infants` (optional)
- `cabin_class` (`economy|premium_economy|business|first`, optional)
- `cabinClass` / `cabin` (aliases for `cabin_class`, optional)
- `currency`, `locale`, `max_results`, `sort` (optional)

Output includes:
- `searchId`
- normalized request
- ranked `offers`
- `nextActions`

### `get_flight_details`
Call after `search_flights` using returned IDs.

Input:
- `search_id`
- `offer_id`

Output includes:
- fare rules in plain language
- baggage and schedule
- `nextActions`

### `book_flight`
Call after `search_flights` using returned IDs.

Input:
- `search_id`
- `offer_id`

Output includes:
- `bookingRedirectUrl` (Duffel checkout session URL)
- Guidance message about completing checkout on Duffel's hosted page

## Example Interaction Recipes

### Recipe 1: Quick one-way search
User: "Find me flights from SFO to Lisbon next Friday, 1 adult"

1. Agent calls `search_flights`
2. Agent presents top 3 offers
3. User picks offer
4. Agent calls `get_flight_details`
5. Agent calls `book_flight`

### Recipe 2: User asks about cancellation policy
User: "Can I cancel this one?"

1. Agent calls `get_flight_details`
2. Agent summarizes `conditions.cancellation`
3. Agent offers `book_flight` or new `search_flights`

### Recipe 3: User wants cheaper options
User: "Show only cheapest options"

1. Agent calls `search_flights` with `sort=cheapest`
2. Agent presents constrained list

## Deploy (Railway)

1. Push this repo to GitHub.
2. Create Railway project from repo.
3. Set environment variables from `.env.example`.
4. Deploy.
5. Use `https://<your-domain>/sse` as MCP endpoint.

### Railway Production Variables (example)

- `MCP_BASE_URL=https://mcp.skyroute.dev`
- `FLIGHT_PROVIDER=duffel`
- `DUFFEL_API_KEY=<your key>`
- `DUFFEL_ENV=sandbox` (or `live` with a live key)
- `DUFFEL_BASE_URL=https://api.duffel.com`
- `API_KEY=<your secret token>`
- `DEFAULT_CURRENCY=USD`
- `DEFAULT_LOCALE=en-US`
- `DEFAULT_MAX_RESULTS=20`
- `OFFER_CACHE_TTL_MS=1800000`
- `RATE_LIMIT_WINDOW_MS=60000`
- `RATE_LIMIT_MAX_REQUESTS=300`

### Go Live with Duffel

1. Get a live API key from your Duffel dashboard (starts with `duffel_live_`).
2. Set `DUFFEL_API_KEY` to the live key in Railway env vars.
3. Set `DUFFEL_ENV=live` in Railway env vars.
4. Set `API_KEY` to a secure token to protect the endpoint.
5. Redeploy.

## Current Limitations

- No in-chat payment collection.
- `book_flight` creates a Duffel Links checkout session. Payment is completed on Duffel's hosted page, not inside MCP.

## Next Step

Move to direct booking via Duffel order creation with full pricing controls and order servicing.

## License

MIT
