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
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length > 0) {
    return forwarded.split(",")[0].trim();
  }

  if (Array.isArray(forwarded) && forwarded.length > 0) {
    return forwarded[0].trim();
  }

  return req.ip || req.socket.remoteAddress || "unknown";
}

export function createIpRateLimiter(options: RateLimitOptions): RequestHandler {
  const buckets = new Map<string, Bucket>();
  const windowMs = Math.max(1_000, options.windowMs);
  const maxRequests = Math.max(1, options.maxRequests);

  return (req, res, next) => {
    const ip = getClientIp(req);
    const now = Date.now();

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
