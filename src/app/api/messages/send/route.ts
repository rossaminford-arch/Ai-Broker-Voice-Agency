import { NextRequest } from "next/server";
import { ensureTwilioClient, TWILIO_FROM, TWILIO_WHATSAPP } from "@/lib/twilio";
import { sendMessageSchema } from "@/lib/validation";

export async function POST(req: NextRequest) {
  const json = await req.json();
  const parsed = sendMessageSchema.safeParse(json);
  if (!parsed.success) {
    return new Response(JSON.stringify({ error: parsed.error.flatten() }), { status: 400 });
  }
  if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN) {
    return Response.json({ ok: true, mocked: true });
  }
  const client = ensureTwilioClient();
  const from = parsed.data.channel === "whatsapp"
    ? (TWILIO_WHATSAPP ? `whatsapp:${TWILIO_WHATSAPP}` : "")
    : TWILIO_FROM;
  if (!from) {
    return Response.json({ ok: true, mocked: true });
  }
  const to = parsed.data.channel === "whatsapp" ? `whatsapp:${parsed.data.to}` : parsed.data.to;
  await client.messages.create({ to, from, body: parsed.data.body });
  return Response.json({ ok: true });
}
