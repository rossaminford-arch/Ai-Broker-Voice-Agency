import { NextRequest } from "next/server";
import { ensureTwilioClient, TWILIO_FROM } from "@/lib/twilio";
import { leadWebhookSchema } from "@/lib/validation";
import { logger } from "@/lib/logger";

export async function POST(req: NextRequest) {
  const payload = await req.json();
  const parsed = leadWebhookSchema.safeParse(payload);
  if (!parsed.success) {
    return new Response(JSON.stringify({ error: parsed.error.flatten() }), { status: 400 });
  }

  logger.info("Lead webhook received", parsed.data);

  if (!TWILIO_FROM || !process.env.TWILIO_ACCOUNT_SID) {
    logger.warn("Twilio credentials missing; returning mocked response");
    return Response.json({ ok: true, mocked: true });
  }

  const client = ensureTwilioClient();
  const call = await client.calls.create({
    to: parsed.data.phone,
    from: TWILIO_FROM,
    url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/voice/inbound`,
    method: "POST",
    statusCallback: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/voice/status`,
    statusCallbackEvent: ["initiated", "ringing", "answered", "completed"]
  });

  return Response.json({ ok: true, callSid: call.sid });
}
