export const runtime = "edge";

export async function GET() {
  return new Response("WebSocket upgrade required", { status: 426 });
}
