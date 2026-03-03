import crypto from "crypto";
import { RequestHandler } from "express";

interface AuthOptions {
  apiKey: string;
}

export function createBearerAuth(options: AuthOptions): RequestHandler {
  return (req, res, next) => {
    if (!options.apiKey) {
      next();
      return;
    }

    const header = req.headers.authorization;
    if (!header || !header.startsWith("Bearer ")) {
      res.status(401).json({ error: "Missing or invalid Authorization header. Use: Bearer <api-key>" });
      return;
    }

    const token = header.slice(7);
    const tokenBuffer = Buffer.from(token);
    const keyBuffer = Buffer.from(options.apiKey);

    if (tokenBuffer.length !== keyBuffer.length || !crypto.timingSafeEqual(tokenBuffer, keyBuffer)) {
      res.status(403).json({ error: "Invalid API key." });
      return;
    }

    next();
  };
}
