import { describe, expect, it, vi } from "vitest";
import * as usage from "@/lib/usage";

vi.spyOn(console, "info").mockImplementation(() => undefined);

describe("recordUsage", () => {
  it("logs usage events", async () => {
    const result = await usage.recordUsage({ accountId: "11111111-1111-1111-1111-111111111111", minutes: 10 });
    expect(result.ok).toBe(true);
  });
});
