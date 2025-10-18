import { logger } from "@/lib/logger";

type EmailPayload = { to: string; subject: string; html: string };

export async function sendTransactionalEmail(payload: EmailPayload) {
  const provider = (process.env.EMAIL_PROVIDER || "resend").toLowerCase();
  if (provider === "resend" && process.env.RESEND_API_KEY) {
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Broker Voice Agency <hello@broker.ai>",
        to: payload.to,
        subject: payload.subject,
        html: payload.html
      })
    });
    if (!resp.ok) {
      logger.error("Resend email failed", { status: resp.status });
      return { ok: false };
    }
    return { ok: true };
  }
  if (provider === "postmark" && process.env.POSTMARK_SERVER_TOKEN) {
    const resp = await fetch("https://api.postmarkapp.com/email", {
      method: "POST",
      headers: {
        "X-Postmark-Server-Token": process.env.POSTMARK_SERVER_TOKEN,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        From: "hello@broker.ai",
        To: payload.to,
        Subject: payload.subject,
        HtmlBody: payload.html
      })
    });
    if (!resp.ok) {
      logger.error("Postmark email failed", { status: resp.status });
      return { ok: false };
    }
    return { ok: true };
  }
  logger.warn("Email provider missing credentials; skipping send.", payload as Record<string, unknown>);
  return { ok: true, mocked: true };
}
