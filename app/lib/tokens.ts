import crypto from "crypto";

export function generateEmailVerificationToken() {
  const token = crypto.randomBytes(32).toString("hex");
  const tokenHash = sha256(token);
  return { token, tokenHash };
}

export function sha256(value: string) {
  return crypto.createHash("sha256").update(value).digest("hex");
}
