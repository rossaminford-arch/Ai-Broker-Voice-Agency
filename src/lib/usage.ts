import { logger } from "@/lib/logger";

export type UsageEvent = {
  accountId: string;
  minutes?: number;
  sms?: number;
  wa_sessions?: number;
  storage_gb?: number;
};

export async function recordUsage(event: UsageEvent) {
  logger.info("Recording usage", event);
  // TODO: Persist to Supabase usage table using service role
  return { ok: true };
}

export async function pushUsageToStripe(accountId: string) {
  if (!process.env.STRIPE_SECRET_KEY) {
    logger.warn("Stripe key missing; skipping usage sync", { accountId });
    return { ok: true, mocked: true };
  }
  logger.info("Pushing usage to Stripe", { accountId });
  // TODO: Implement Stripe usage reporting via UsageRecord API
  return { ok: true };
}
