import { describe, it, expect, vi } from "vitest";
import { createBearerAuth } from "../../src/middleware/auth";
import { Request, Response } from "express";

function mockReq(authorization?: string): Partial<Request> {
  return {
    headers: authorization ? { authorization } : {}
  };
}

function mockRes(): Partial<Response> & { statusCode: number; body: any } {
  const res: any = {
    statusCode: 200,
    body: null,
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

describe("createBearerAuth", () => {
  it("passes through when no API key is configured", () => {
    const auth = createBearerAuth({ apiKey: "" });
    const next = vi.fn();

    auth(mockReq() as Request, mockRes() as unknown as Response, next);
    expect(next).toHaveBeenCalled();
  });

  it("passes through with valid bearer token", () => {
    const auth = createBearerAuth({ apiKey: "my-secret-key" });
    const next = vi.fn();

    auth(mockReq("Bearer my-secret-key") as Request, mockRes() as unknown as Response, next);
    expect(next).toHaveBeenCalled();
  });

  it("returns 401 when Authorization header is missing", () => {
    const auth = createBearerAuth({ apiKey: "my-secret-key" });
    const res = mockRes();

    auth(mockReq() as Request, res as unknown as Response, vi.fn());
    expect(res.statusCode).toBe(401);
    expect(res.body.error).toContain("Authorization");
  });

  it("returns 401 when Authorization header has wrong scheme", () => {
    const auth = createBearerAuth({ apiKey: "my-secret-key" });
    const res = mockRes();

    auth(mockReq("Basic abc123") as Request, res as unknown as Response, vi.fn());
    expect(res.statusCode).toBe(401);
  });

  it("returns 403 when token is wrong", () => {
    const auth = createBearerAuth({ apiKey: "my-secret-key" });
    const res = mockRes();

    auth(mockReq("Bearer wrong-key") as Request, res as unknown as Response, vi.fn());
    expect(res.statusCode).toBe(403);
    expect(res.body.error).toContain("Invalid");
  });

  it("returns 403 for empty token after Bearer prefix", () => {
    const auth = createBearerAuth({ apiKey: "my-secret-key" });
    const res = mockRes();

    auth(mockReq("Bearer ") as Request, res as unknown as Response, vi.fn());
    expect(res.statusCode).toBe(403);
  });
});
