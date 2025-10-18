import { NextRequest } from "next/server";
import { logger } from "@/lib/logger";
import { recordUsage } from "@/lib/usage";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const payload = Object.fromEntries(formData.entries());
  logger.info("Twilio status callback", payload as Record<string, unknown>);

  if (payload.CallStatus === "completed" && payload.CallDuration) {
    await recordUsage({
      accountId: "11111111-1111-1111-1111-111111111111",
      minutes: Number(payload.CallDuration) / 60
    });
  }

  return new Response("ok");
}
