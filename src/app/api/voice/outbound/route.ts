import { NextRequest } from "next/server";
import { ensureTwilioClient, TWILIO_FROM } from "@/lib/twilio";
import { outboundCallSchema } from "@/lib/validation";
import { logger } from "@/lib/logger";

const RETRY_LIMIT = 3;

export async function POST(req: NextRequest) {
  const json = await req.json();
  const parsed = outboundCallSchema.safeParse(json);
  if (!parsed.success) {
    return new Response(JSON.stringify({ error: parsed.error.flatten() }), { status: 400 });
  }

  if (!TWILIO_FROM || !process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN) {
    logger.warn("Twilio credentials missing; skipping live call", { to: parsed.data.phone });
    return Response.json({ ok: true, mocked: true });
  }

  const client = ensureTwilioClient();
  const to = parsed.data.phone;

  const url = `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/voice/inbound`;
  const statusCallback = `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/voice/status`;

  const attempt = Number(parsed.data.accountId ? 1 : 1);
  if (attempt > RETRY_LIMIT) {
    return new Response(JSON.stringify({ error: "retry limit exceeded" }), { status: 429 });
  }

  const call = await client.calls.create({
    to,
    from: TWILIO_FROM,
    url,
    method: "POST",
    statusCallback,
    statusCallbackEvent: ["initiated", "ringing", "answered", "completed"]
  });

  logger.info("Outbound call initiated", { sid: call.sid, to });
  return Response.json({ ok: true, callSid: call.sid });
}
