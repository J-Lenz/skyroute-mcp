import { Request, RequestHandler } from "express";

interface RateLimitOptions {
  windowMs: number;
  maxRequests: number;
}

interface Bucket {
  count: number;
  resetAt: number;
}

function getClientIp(req: Request): string {
  // Rely on Express trusted proxy resolution (`req.ip`) instead of raw headers.
  // This avoids clients bypassing limits by spoofing x-forwarded-for directly.
  return req.ip || req.socket.remoteAddress || "unknown";
}

export function createIpRateLimiter(options: RateLimitOptions): RequestHandler {
  const buckets = new Map<string, Bucket>();
  const windowMs = Math.max(1_000, options.windowMs);
  const maxRequests = Math.max(1, options.maxRequests);
  let requestsSinceSweep = 0;

  function sweepExpired(now: number): void {
    for (const [ip, bucket] of buckets.entries()) {
      if (now >= bucket.resetAt) {
        buckets.delete(ip);
      }
    }
  }

  return (req, res, next) => {
    const ip = getClientIp(req);
    const now = Date.now();
    requestsSinceSweep += 1;

    // Opportunistic sweep keeps memory bounded without timers.
    if (requestsSinceSweep >= 200) {
      sweepExpired(now);
      requestsSinceSweep = 0;
    }

    const existing = buckets.get(ip);
    if (!existing || now >= existing.resetAt) {
      buckets.set(ip, { count: 1, resetAt: now + windowMs });
      next();
      return;
    }

    if (existing.count >= maxRequests) {
      const retryAfterSeconds = Math.ceil((existing.resetAt - now) / 1000);
      res.setHeader("Retry-After", retryAfterSeconds.toString());
      res.status(429).json({
        error: "Rate limit exceeded",
        message: `Too many requests from this IP. Retry in ${retryAfterSeconds} seconds.`
      });
      return;
    }

    existing.count += 1;
    next();
  };
}
