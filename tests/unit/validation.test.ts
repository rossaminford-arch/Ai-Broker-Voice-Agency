import { describe, expect, it } from "vitest";
import { leadWebhookSchema, sendMessageSchema } from "@/lib/validation";

describe("validation schemas", () => {
  it("validates lead webhook", () => {
    const parsed = leadWebhookSchema.safeParse({ phone: "+447700900123" });
    expect(parsed.success).toBe(true);
  });

  it("rejects invalid message payload", () => {
    const parsed = sendMessageSchema.safeParse({ to: "123" });
    expect(parsed.success).toBe(false);
  });
});
