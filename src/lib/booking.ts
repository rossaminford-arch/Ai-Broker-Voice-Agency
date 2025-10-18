import { createBooking, getNextFreeSlots } from "@/lib/integrations/calendar";
import { sendTransactionalEmail } from "@/lib/integrations/email";
import { logger } from "@/lib/logger";

export async function offerSlotsAndBook(contact: { name?: string; email?: string; phone?: string }) {
  const advisorEmail = contact.email || "advisor@example.com";
  const slots = await getNextFreeSlots(advisorEmail, 3);
  const booking = await createBooking(contact, slots[0].starts_at);
  logger.info("Booked slot", { booking, contact });
  if (contact.email) {
    await sendTransactionalEmail({
      to: contact.email,
      subject: "Your consultation is booked",
      html: `<p>Thanks ${contact.name || "there"}, we've reserved ${new Date(booking.starts_at).toLocaleString()}.</p>`
    });
  }
  return { slots, booking };
}

export function generateIcs({ starts_at, subject, description }: { starts_at: string; subject: string; description: string }) {
  const dtStart = starts_at.replace(/[-:]/g, "").split(".")[0];
  return `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART:${dtStart}Z\nSUMMARY:${subject}\nDESCRIPTION:${description}\nEND:VEVENT\nEND:VCALENDAR`;
}
