import { CalendarClock, FileCheck, Headset, Timer } from "lucide-react";

const features = [
  {
    title: "Inbound AI receptionist",
    description:
      "Answers every line with the mandated disclosure, qualifies callers, and routes urgent cases to humans.",
    icon: Headset
  },
  {
    title: "Speed-to-lead dial outs",
    description:
      "Trigger automatic outbound calls to fresh leads within 60 seconds and follow with WhatsApp/SMS failsafes.",
    icon: Timer
  },
  {
    title: "Document & KYC nudges",
    description:
      "Issue secure upload links and chase missing statements, IDs, or payslips with gentle reminders.",
    icon: FileCheck
  },
  {
    title: "Calendars that sync",
    description:
      "Offer real availability from Cal.com or Calendly, then drop the confirmed slot and ICS into your CRM.",
    icon: CalendarClock
  }
];

export function FeatureCards() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900">Built for regulated broker teams</h2>
          <p className="mt-4 text-lg text-slate-600">
            Every workflow is designed around PECR/GDPR requirements, auditable history, and fast lead response.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {features.map(feature => (
            <div key={feature.title} className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <feature.icon className="h-10 w-10 text-brand-500" />
              <h3 className="mt-6 text-xl font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
              <div className="mt-6 text-sm font-medium text-brand-600 group-hover:underline">Learn more</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
