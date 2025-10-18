import { NextRequest } from "next/server";
import { docRequestSchema } from "@/lib/validation";
import { issueDocLinks } from "@/lib/docs";

export async function POST(req: NextRequest) {
  const payload = await req.json();
  const parsed = docRequestSchema.safeParse(payload);
  if (!parsed.success) {
    return new Response(JSON.stringify({ error: parsed.error.flatten() }), { status: 400 });
  }
  const links = await issueDocLinks({ phone: "", name: "" }, parsed.data.checklist);
  return Response.json({ ok: true, links });
}
