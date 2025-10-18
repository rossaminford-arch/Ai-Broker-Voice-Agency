import { NextRequest } from "next/server";
import { twiml } from "twilio";
import { startAgentSession } from "@/lib/agent";
import { disclosureMetadata } from "@/lib/compliance";
import { logger } from "@/lib/logger";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const from = String(formData.get("From") || "");
  const to = String(formData.get("To") || "");
  const callSid = String(formData.get("CallSid") || "");
  const accountId = "11111111-1111-1111-1111-111111111111"; // TODO: derive from number lookup

  logger.info("Inbound call received", { from, to, callSid });

  startAgentSession({
    callSid,
    contact: { phone: from },
    accountId,
    direction: "inbound"
  }).catch(error => logger.error("startAgentSession failed", { error }));

  const response = new twiml.VoiceResponse();
  const disclosure = disclosureMetadata();
  response.say(disclosure.text);

  const provider = (process.env.AGENT_PROVIDER || "retell").toLowerCase();
  if (provider === "custom") {
    const streamUrl = `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/voice/stream`; // placeholder
    const connect = response.connect();
    connect.stream({ url: streamUrl });
  } else {
    // For Retell/Vapi, typically dial SIP endpoint or <Connect><Agent>
    response.pause({ length: 1 });
  }

  response.say("A specialist will join shortly if you need further assistance.");
  return new Response(response.toString(), {
    headers: { "Content-Type": "text/xml" }
  });
}
