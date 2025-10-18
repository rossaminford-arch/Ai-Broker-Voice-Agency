import Stripe from "stripe";
import { NextRequest } from "next/server";
import { logger } from "@/lib/logger";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const key = process.env.STRIPE_SECRET_KEY;
  const rawBody = await req.text();
  const signature = req.headers.get("stripe-signature") || "";

  if (!secret || !key) {
    logger.warn("Stripe credentials missing; webhook mocked");
    return new Response("ok");
  }

  const stripe = new Stripe(key, { apiVersion: "2024-06-20" });
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, secret);
  } catch (error) {
    logger.error("Stripe webhook signature failed", { error });
    return new Response("invalid", { status: 400 });
  }

  logger.info("Stripe webhook received", { type: event.type });
  // TODO: handle invoice.paid, customer.subscription.updated, usage events

  return new Response("ok");
}
