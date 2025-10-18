import { NextRequest } from "next/server";
import { crmUpsertSchema } from "@/lib/validation";
import { upsertContactAndLogCall } from "@/lib/integrations/crm";

export async function POST(req: NextRequest) {
  const payload = await req.json();
  const parsed = crmUpsertSchema.safeParse(payload);
  if (!parsed.success) {
    return new Response(JSON.stringify({ error: parsed.error.flatten() }), { status: 400 });
  }
  const result = await upsertContactAndLogCall(parsed.data);
  return Response.json(result);
}
