import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { createIpRateLimiter } from "../../src/middleware/rateLimit";
import { Request, Response } from "express";

function mockReq(ip: string): Partial<Request> {
  return {
    headers: { "x-forwarded-for": ip },
    ip,
    socket: { remoteAddress: ip } as any
  };
}

function mockRes(): Partial<Response> & { statusCode: number; headers: Record<string, string>; body: any } {
  const res: any = {
    statusCode: 200,
    headers: {},
    body: null,
    setHeader(key: string, value: string) {
      res.headers[key] = value;
      return res;
    },
    status(code: number) {
      res.statusCode = code;
      return res;
    },
    json(data: any) {
      res.body = data;
      return res;
    }
  };
  return res;
}

describe("createIpRateLimiter", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("allows requests under the limit", () => {
    const limiter = createIpRateLimiter({ windowMs: 60_000, maxRequests: 5 });
    const req = mockReq("1.2.3.4");
    const res = mockRes();
    const next = vi.fn();

    limiter(req as Request, res as unknown as Response, next);
    expect(next).toHaveBeenCalled();
  });

  it("blocks requests at the limit with 429", () => {
    const limiter = createIpRateLimiter({ windowMs: 60_000, maxRequests: 2 });
    const next = vi.fn();

    limiter(mockReq("1.2.3.4") as Request, mockRes() as unknown as Response, next);
    limiter(mockReq("1.2.3.4") as Request, mockRes() as unknown as Response, next);

    const res3 = mockRes();
    limiter(mockReq("1.2.3.4") as Request, res3 as unknown as Response, vi.fn());
    expect(res3.statusCode).toBe(429);
    expect(res3.headers["Retry-After"]).toBeDefined();
    expect(res3.body.error).toContain("Rate limit");
  });

  it("resets after window expires", () => {
    const limiter = createIpRateLimiter({ windowMs: 10_000, maxRequests: 1 });
    const next1 = vi.fn();
    limiter(mockReq("1.2.3.4") as Request, mockRes() as unknown as Response, next1);
    expect(next1).toHaveBeenCalled();

    const res2 = mockRes();
    limiter(mockReq("1.2.3.4") as Request, res2 as unknown as Response, vi.fn());
    expect(res2.statusCode).toBe(429);

    vi.advanceTimersByTime(10_001);

    const next3 = vi.fn();
    limiter(mockReq("1.2.3.4") as Request, mockRes() as unknown as Response, next3);
    expect(next3).toHaveBeenCalled();
  });

  it("tracks different IPs independently", () => {
    const limiter = createIpRateLimiter({ windowMs: 60_000, maxRequests: 1 });

    const next1 = vi.fn();
    limiter(mockReq("1.1.1.1") as Request, mockRes() as unknown as Response, next1);
    expect(next1).toHaveBeenCalled();

    const next2 = vi.fn();
    limiter(mockReq("2.2.2.2") as Request, mockRes() as unknown as Response, next2);
    expect(next2).toHaveBeenCalled();

    const res3 = mockRes();
    limiter(mockReq("1.1.1.1") as Request, res3 as unknown as Response, vi.fn());
    expect(res3.statusCode).toBe(429);
  });
});
