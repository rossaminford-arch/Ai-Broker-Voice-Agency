import { describe, expect, it } from "vitest";
import { disclosureLine, isOptOut, retentionDefaults, shouldHandoffForTopic } from "@/lib/compliance";

describe("compliance helpers", () => {
  it("returns disclosure line", () => {
    expect(disclosureLine()).toContain("recorded");
  });

  it("detects opt out keywords", () => {
    expect(isOptOut("stop")).toBe(true);
    expect(isOptOut("hello")).toBe(false);
  });

  it("flags do-not-answer topics", () => {
    expect(shouldHandoffForTopic("Can you tell me the underwriting decision?")).toBe(true);
  });

  it("returns retention defaults", () => {
    const defaults = retentionDefaults();
    expect(defaults.audioDays).toBe(90);
    expect(defaults.summaryDays).toBe(365);
  });
});
