import { logger } from "@/lib/logger";

export interface UpsertPayload {
  accountId: string;
  contact: { name?: string; phone?: string; email?: string };
  summary?: string;
  metadata?: Record<string, unknown>;
}

export async function upsertContactAndLogCall(payload: UpsertPayload) {
  const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  if (!token) {
    logger.warn("HubSpot token missing; CRM upsert operating in mock mode.", { payload });
    return { ok: true, id: "mock-contact" };
  }
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
  };
  const body = {
    properties: {
      email: payload.contact.email,
      phone: payload.contact.phone,
      firstname: payload.contact.name?.split(" ")[0],
      lastname: payload.contact.name?.split(" ").slice(1).join(" ") || "",
      lifecyclestage: "opportunity"
    }
  };
  const resp = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  });
  if (!resp.ok) {
    logger.error("HubSpot upsert failed", { status: resp.status });
    return { ok: false };
  }
  const data = (await resp.json()) as { id: string };
  if (payload.summary) {
    await fetch(`https://api.hubapi.com/crm/v3/objects/notes`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        properties: {
          hs_timestamp: new Date().toISOString(),
          hs_note_body: payload.summary
        },
        associations: [
          {
            to: { id: data.id },
            types: [{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: 10 }]
          }
        ]
      })
    });
  }
  return { ok: true, id: data.id };
}
