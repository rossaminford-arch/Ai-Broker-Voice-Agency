import { NextRequest } from "next/server";
import { logger } from "@/lib/logger";

export async function POST(req: NextRequest) {
  const payload = await req.json();
  logger.info("Affiliate webhook", payload as Record<string, unknown>);
  return Response.json({ ok: true });
}
