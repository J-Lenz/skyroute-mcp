---
name: skyroute-mcp
version: 0.1.0
provider: duffel
transport: sse
tools:
  - search_flights
  - get_flight_details
  - book_flight
---

# SkyRoute MCP — Agent Skill File

## Overview

SkyRoute is an MCP server that searches real-time flight offers via the
Duffel API and returns structured, normalized results.  It exposes three
tools designed to be called **in sequence**.

## Tool Call Order (mandatory)

```
search_flights  -->  get_flight_details  -->  book_flight
     1                     2                      3
```

1. **Always** start with `search_flights`.  The other two tools require
   `search_id` and `offer_id` values that only `search_flights` returns.
2. Call `get_flight_details` when the user wants fare conditions, baggage
   details, or change/cancel rules **before** committing to a booking.
3. Call `book_flight` only when the user has confirmed they want to proceed.

**Never** call `get_flight_details` or `book_flight` without a preceding
`search_flights` in the same session.

## Invariants

- **Always show the price before booking.**  Never call `book_flight` without
  first presenting the fare amount and currency to the user.
- **Use `sort: "best"` by default** unless the user explicitly asks for
  "cheapest" or "fastest".
- **Offer IDs expire** (~30 minutes).  If a booking attempt fails with an
  expiration error, re-run `search_flights` to get fresh offers.
- **`search_id` values are session-scoped.**  They cannot be reused across
  different MCP sessions or after a server restart.
- **Passenger limits:** 1-9 adults, 0-8 children, 0-8 infants.  Infants
  cannot exceed the number of adults.
- **Max 50 results** per search.  Default is 20.

## Input Guidelines

- **origin / destination**: Use IATA codes (e.g. `SFO`, `LIS`) when known.
  City names like `"San Francisco"` also work via fuzzy matching.
- **dates**: ISO format (`2025-07-15`) is preferred.  Natural language
  (`"next Friday"`, `"in 2 weeks"`) is also accepted.
- **currency**: Use ISO 4217 codes (`USD`, `EUR`, `GBP`).  Always 3 letters.
- **cabin_class**: One of `economy`, `premium_economy`, `business`, `first`.

## What NOT to Do

- **Do not fabricate IDs.**  `search_id` and `offer_id` must come verbatim
  from a `search_flights` response.  Hallucinated IDs will be rejected.
- **Do not embed query parameters in IDs.**  Values like
  `off_123?fields=name` will be rejected by input validation.
- **Do not call `book_flight` in a loop** or retry without user confirmation.
  Each call creates a real checkout session.
- **Do not assume baggage is included.**  Always check `get_flight_details`
  for the actual baggage policy before telling the user.

## Response Handling

- The `nextActions` array in every response tells you which tools to
  suggest next.  **Follow it.**
- The `notes` array may contain disambiguation warnings (e.g. "Interpreted
  'Frankfurt' as FRA — Frankfurt am Main").  Surface these to the user.
- The `summary` object contains pre-ranked highlights: `cheapest`,
  `fastest`, and `best`.  Use these when the user asks for a quick
  recommendation.

## Error Recovery

| Error message pattern | Action |
|---|---|
| `Search not found or expired` | Re-run `search_flights` |
| `Offer not found in this search` | Check `offer_id` against the search results |
| `Offer expired` | Re-run `search_flights` for fresh prices |
| `Invalid origin` / `Invalid destination` | Ask the user to clarify the city or use an IATA code |
| `Unable to parse departure_date` | Ask for an ISO date or clearer phrasing |

## Supported Airports

~73 airports are currently supported (major hubs in Europe, North America,
Middle East, and Asia-Pacific).  If an airport is not recognized, the error
message will suggest nearby alternatives when possible.

## Authentication

Requests require a Bearer token in the `Authorization` header.  The token
is configured server-side via the `API_KEY` environment variable.  If no
key is set, authentication is disabled (development mode only).

## Safety Notes

- All string inputs are sanitized: control characters stripped, length
  capped, path traversal and injection patterns rejected.
- All response strings from the upstream Duffel API are sanitized for
  prompt-injection patterns before being returned to the agent.
- Rate limiting is enforced per IP (default: 300 requests / 60 seconds).
