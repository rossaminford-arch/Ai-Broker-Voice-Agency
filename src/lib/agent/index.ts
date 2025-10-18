import { startRetellSession } from "./retell";
import { startVapiSession } from "./vapi";
import { startCustomSession } from "./custom";

export type AgentSessionParams = {
  callSid: string;
  contact: { name?: string; phone?: string; email?: string };
  accountId: string;
  direction: "inbound" | "outbound";
};

export async function startAgentSession(params: AgentSessionParams) {
  const provider = (process.env.AGENT_PROVIDER || "retell").toLowerCase();
  if (provider === "retell") return startRetellSession(params);
  if (provider === "vapi") return startVapiSession(params);
  return startCustomSession(params);
}
