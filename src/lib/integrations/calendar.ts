import { logger } from "@/lib/logger";

type Slot = { starts_at: string; advisor_email: string };

async function fetchCalComSlots(advisorEmail: string, count: number): Promise<Slot[]> {
  const apiKey = process.env.CALCOM_API_KEY;
  if (!apiKey) {
    logger.warn("Cal.com API key missing; returning mocked availability.");
    return mockSlots(advisorEmail, count);
  }
  const resp = await fetch("https://api.cal.com/v2/availability", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      schedules: [advisorEmail],
      length: 30,
      timezone: "Europe/London"
    })
  });
  if (!resp.ok) {
    logger.error("Cal.com availability failed", { status: resp.status });
    return mockSlots(advisorEmail, count);
  }
  const data = (await resp.json()) as { slots: { start: string }[] };
  return data.slots.slice(0, count).map(slot => ({ starts_at: slot.start, advisor_email: advisorEmail }));
}

function mockSlots(advisorEmail: string, count: number): Slot[] {
  const now = new Date();
  return Array.from({ length: count }, (_, i) => {
    const date = new Date(now.getTime() + (i + 1) * 3600_000);
    return { starts_at: date.toISOString(), advisor_email: advisorEmail };
  });
}

export async function getNextFreeSlots(advisorEmail: string, count = 3) {
  const provider = (process.env.CAL_PROVIDER || "calcom").toLowerCase();
  if (provider === "calcom") {
    return fetchCalComSlots(advisorEmail, count);
  }
  // Calendly fallback (mocked)
  logger.warn("Calendly integration not fully implemented; returning mocked slots.");
  return mockSlots(advisorEmail, count);
}

export async function createBooking(contact: { name?: string; email?: string; phone?: string }, slotIso: string) {
  const provider = (process.env.CAL_PROVIDER || "calcom").toLowerCase();
  const payload = { contact, slotIso };
  logger.info("Creating booking", { provider, contact, slotIso });
  // In production, call provider API; we simulate success here.
  return { id: `evt_${Math.random().toString(36).slice(2, 8)}`, starts_at: slotIso, contact };
}
