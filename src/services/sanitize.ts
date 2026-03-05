/**
 * Input hardening & response sanitization for agent safety.
 *
 * Agents hallucinate IDs, inject garbage, and can relay prompt-injection
 * payloads that arrive inside API response fields.  This module provides
 * defence-in-depth at two boundaries:
 *
 *   1. **Input hardening** — validate & sanitize every value that arrives
 *      from the agent before it touches business logic or external APIs.
 *
 *   2. **Response sanitization** — strip prompt-injection patterns from
 *      strings returned by upstream APIs (Duffel, airlines) before they
 *      are surfaced back to the agent's context window.
 */

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/** Maximum length for free-text string inputs (origin, destination, dates). */
const MAX_TEXT_INPUT_LENGTH = 200;

/** Maximum length for ID strings (search_id, offer_id). */
const MAX_ID_LENGTH = 300;

/** Maximum length for any single response string field. */
const MAX_RESPONSE_STRING_LENGTH = 500;

/**
 * Regex matching ASCII control characters (0x00-0x1F) except TAB (0x09),
 * LF (0x0A), and CR (0x0D).  Also matches DEL (0x7F).
 */
const CONTROL_CHARS_RE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g;

/** Path traversal sequences that should never appear in inputs. */
const PATH_TRAVERSAL_RE = /(?:^|[/\\])\.\.(?:[/\\]|$)/;

/** Embedded query-param characters in IDs — indicates hallucination. */
const QUERY_PARAM_RE = /[?&#=]/;

/** Pre-URL-encoded sequences (%XX) that might cause double-encoding. */
const URL_ENCODED_RE = /%[0-9A-Fa-f]{2}/;

/**
 * Patterns commonly used in prompt injection payloads.
 * Case-insensitive matching.  Each pattern is tested individually.
 */
const INJECTION_PATTERNS: RegExp[] = [
  /ignore\s+(all\s+)?previous\s+instructions/i,
  /ignore\s+(all\s+)?prior\s+instructions/i,
  /ignore\s+(all\s+)?above\s+instructions/i,
  /disregard\s+(all\s+)?previous/i,
  /you\s+are\s+now\s+(a|an)\b/i,
  /new\s+instructions?\s*:/i,
  /system\s*:\s*/i,
  /\buser\s*:\s*/i,
  /\bassistant\s*:\s*/i,
  /\bhuman\s*:\s*/i,
  /do\s+not\s+follow\s+(any\s+)?previous/i,
  /override\s+(all\s+)?instructions/i,
  /forget\s+(all\s+)?previous/i,
  /act\s+as\s+(a|an)\b/i,
  /jailbreak/i,
  /\bDAN\b/,
  /\bprompt\s+injection\b/i,
];

// ---------------------------------------------------------------------------
// Input hardening
// ---------------------------------------------------------------------------

/** Strip control characters from a string. */
export function stripControlChars(value: string): string {
  return value.replace(CONTROL_CHARS_RE, "");
}

/** Truncate a string to `maxLen` characters. */
export function truncate(value: string, maxLen: number): string {
  return value.length > maxLen ? value.slice(0, maxLen) : value;
}

/**
 * Sanitize a free-text input string (origin, destination, date, locale, etc.).
 *
 * 1. Strip control characters
 * 2. Trim whitespace
 * 3. Enforce maximum length
 * 4. Reject path traversal
 */
export function sanitizeTextInput(value: string): string {
  let clean = stripControlChars(value).trim();
  clean = truncate(clean, MAX_TEXT_INPUT_LENGTH);

  if (PATH_TRAVERSAL_RE.test(clean)) {
    throw new Error("Invalid input: path traversal sequences are not allowed.");
  }

  return clean;
}

/**
 * Sanitize an ID string (search_id, offer_id).
 *
 * IDs must not contain:
 * - Control characters
 * - Path traversal sequences
 * - Query-param characters (? & # =)
 * - Pre-URL-encoded sequences (%XX)
 */
export function sanitizeId(value: string): string {
  let clean = stripControlChars(value).trim();
  clean = truncate(clean, MAX_ID_LENGTH);

  if (PATH_TRAVERSAL_RE.test(clean)) {
    throw new Error("Invalid ID: path traversal sequences are not allowed.");
  }

  if (QUERY_PARAM_RE.test(clean)) {
    throw new Error("Invalid ID: query parameter characters (?, &, #, =) are not allowed.");
  }

  if (URL_ENCODED_RE.test(clean)) {
    throw new Error("Invalid ID: pre-URL-encoded sequences are not allowed.");
  }

  return clean;
}

/**
 * Validate that a currency code is strictly 3 uppercase ASCII letters.
 * Returns the uppercased value or throws.
 */
export function sanitizeCurrency(value: string): string {
  const clean = stripControlChars(value).trim().toUpperCase();
  if (!/^[A-Z]{3}$/.test(clean)) {
    throw new Error(`Invalid currency code: "${clean}". Must be exactly 3 letters (e.g. USD, EUR).`);
  }
  return clean;
}

/**
 * Validate that an IATA code is strictly 2-4 uppercase alpha characters.
 * (3 for airports, 2 for airlines.)
 */
export function sanitizeIataCode(value: string): string {
  const clean = stripControlChars(value).trim().toUpperCase();
  if (!/^[A-Z]{2,4}$/.test(clean)) {
    throw new Error(`Invalid IATA code: "${clean}". Must be 2-4 letters.`);
  }
  return clean;
}

// ---------------------------------------------------------------------------
// Response sanitization (anti-prompt-injection)
// ---------------------------------------------------------------------------

/**
 * Sanitize a single string field from an upstream API response.
 *
 * 1. Strip control characters
 * 2. Truncate to a safe length
 * 3. Detect and neutralize prompt-injection patterns
 *
 * Returns the cleaned string.  Never throws — returns a safe fallback
 * if the entire string is suspicious.
 */
export function sanitizeResponseString(value: string, fallback = ""): string {
  if (typeof value !== "string") {
    return fallback;
  }

  let clean = stripControlChars(value).trim();
  clean = truncate(clean, MAX_RESPONSE_STRING_LENGTH);

  // Check for injection patterns
  for (const pattern of INJECTION_PATTERNS) {
    if (pattern.test(clean)) {
      console.warn(`[sanitize] Prompt injection pattern detected and stripped: "${clean.slice(0, 80)}…"`);
      // Replace the injected portion rather than rejecting the whole string.
      // This lets legitimate airline names through even if they share a prefix.
      clean = clean.replace(pattern, "[removed]");
    }
  }

  return clean;
}

/**
 * Sanitize all string values in an object (shallow, one level deep).
 * Non-string values are passed through unchanged.
 */
export function sanitizeResponseObject<T extends Record<string, unknown>>(obj: T, fallback = ""): T {
  const result = { ...obj };
  for (const key of Object.keys(result)) {
    if (typeof result[key] === "string") {
      (result as any)[key] = sanitizeResponseString(result[key] as string, fallback);
    }
  }
  return result;
}
