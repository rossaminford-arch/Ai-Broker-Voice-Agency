import { NextRequest } from "next/server";
import { isOptOut, persistOptOut } from "@/lib/compliance";
import { inboundSmsSchema } from "@/lib/validation";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const payload: Record<string, string> = Object.fromEntries(formData.entries()) as Record<string, string>;
  const parsed = inboundSmsSchema.safeParse(payload);
  if (!parsed.success) {
    return new Response("invalid", { status: 400 });
  }

  if (isOptOut(parsed.data.Body)) {
    await persistOptOut("sms", parsed.data.From);
    return new Response("You have been opted out.", { headers: { "Content-Type": "text/plain" } });
  }

  return new Response("ok", { headers: { "Content-Type": "text/plain" } });
}
