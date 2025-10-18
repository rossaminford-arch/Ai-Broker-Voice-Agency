import { logger } from "@/lib/logger";
import { disclosureVersion } from "@/lib/rls";

const STOP_KEYWORDS = ["STOP", "STOP ALL", "UNSUBSCRIBE", "CANCEL", "END", "QUIT"];

const doNotAnswerTopics = ["specific rates", "underwriting decision", "investment advice"];

export function disclosureLine() {
  return "This call may be recorded. You're speaking with our virtual receptionist supporting your broker.";
}

export function shouldHandoffForTopic(topic: string) {
  return doNotAnswerTopics.some(t => topic.toLowerCase().includes(t));
}

export function isOptOut(body: string) {
  return STOP_KEYWORDS.includes(body.trim().toUpperCase());
}

export async function persistOptOut(channel: "sms" | "whatsapp", from: string) {
  logger.info("Persisting opt-out", { channel, from });
  // TODO: write to Supabase once service role available
  return { ok: true };
}

export function retentionDefaults() {
  return { audioDays: 90, summaryDays: 365 };
}

export function disclosureMetadata() {
  return { version: disclosureVersion, text: disclosureLine() };
}
