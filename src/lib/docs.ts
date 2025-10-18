import { createPresignedUpload } from "@/lib/integrations/storage";
import { logger } from "@/lib/logger";
import { TWILIO_FROM, TWILIO_WHATSAPP, twilioClient } from "@/lib/twilio";

export async function issueDocLinks(contact: { phone?: string; name?: string }, checklist: string[]) {
  const uploads = await Promise.all(
    checklist.map(async item => {
      const key = `docs/${contact.phone || "unknown"}/${item.replace(/\s+/g, "-").toLowerCase()}.pdf`;
      const link = await createPresignedUpload(key, "application/pdf");
      return { item, upload: link };
    })
  );
  if (contact.phone && twilioClient) {
    const fromNumber = TWILIO_FROM || (TWILIO_WHATSAPP ? `whatsapp:${TWILIO_WHATSAPP}` : "");
    if (fromNumber) {
      const body = `Hi ${contact.name || "there"}, here are your secure upload links: ${uploads
        .map(u => `${u.item}: ${u.upload.url}`)
        .join(" | ")}`;
      await twilioClient.messages.create({
        from: fromNumber,
        to: TWILIO_WHATSAPP ? `whatsapp:${contact.phone}` : contact.phone,
        body
      });
    }
  }
  logger.info("Issued document links", { contact, uploads });
  return uploads;
}

export async function markDocumentReceived(requestId: string, item: string) {
  logger.info("Document marked received", { requestId, item });
  return { ok: true };
}
