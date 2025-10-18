import { AgentSessionParams } from "./index";
import { logger } from "@/lib/logger";

export async function startVapiSession(params: AgentSessionParams) {
  logger.info("Starting Vapi session", params);
  if (!process.env.AGENT_API_KEY) {
    logger.warn("Vapi API key missing; returning mocked session");
    return { ok: true, sessionId: "mock-vapi" };
  }
  // Example Vapi attach flow with assistant_id from env
  // await fetch("https://api.vapi.ai/v1/calls", {
  //   method: "POST",
  //   headers: { Authorization: `Bearer ${process.env.AGENT_API_KEY}`, "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     callSid: params.callSid,
  //     assistant_id: process.env.VAPI_ASSISTANT_ID,
  //     webhooks: {
  //       tool_calls: `${process.env.NEXT_PUBLIC_APP_URL}/api/agent/tool-calls`
  //     }
  //   })
  // });
  return { ok: true, sessionId: `vapi_${params.callSid}` };
}
