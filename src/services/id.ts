import crypto from "crypto";

export function stableId(prefix: string, ...parts: string[]): string {
  const hash = crypto.createHash("sha256").update(parts.join("|")).digest("hex").slice(0, 12);
  return `${prefix}_${hash}`;
}
