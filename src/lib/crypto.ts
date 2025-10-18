import { createHmac } from "crypto";

export function signPayload(payload: string, secret: string) {
  return createHmac("sha256", secret).update(payload).digest("hex");
}

export function verifySignature(payload: string, secret: string, signature: string) {
  const computed = signPayload(payload, secret);
  return computed === signature;
}
