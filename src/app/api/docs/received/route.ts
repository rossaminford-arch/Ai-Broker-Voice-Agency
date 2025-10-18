import { NextRequest } from "next/server";
import { docReceivedSchema } from "@/lib/validation";
import { markDocumentReceived } from "@/lib/docs";

export async function POST(req: NextRequest) {
  const payload = await req.json();
  const parsed = docReceivedSchema.safeParse(payload);
  if (!parsed.success) {
    return new Response(JSON.stringify({ error: parsed.error.flatten() }), { status: 400 });
  }
  const result = await markDocumentReceived(parsed.data.requestId, parsed.data.item);
  return Response.json(result);
}
