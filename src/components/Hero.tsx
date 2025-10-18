import Link from "next/link";
import { PhoneCall } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-700">
              Compliant AI Receptionist for Brokers
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Answer every lead in seconds, qualify thoroughly, and book meetings 24/7.
            </h1>
            <p className="text-lg text-slate-600">
              Broker Voice Agency pairs best-in-class voice AI with the compliance rigor UK & EU brokers expect.
              Speed-to-lead dial outs, document nudges, CRM evidence packs—all done automatically.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-5 py-3 text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-500"
              >
                <PhoneCall className="mr-2 h-5 w-5" /> Try the live demo
              </Link>
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center rounded-lg border border-brand-200 px-5 py-3 text-brand-700 hover:border-brand-400 hover:text-brand-600"
              >
                Book a walk-through
              </Link>
            </div>
            <ul className="grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
              {[
                "FCA-style audit trail for every call",
                "Speed-to-lead dial outs under 60 seconds",
                "WhatsApp/SMS follow-ups when nobody picks up",
                "Evidence packs synced to HubSpot in real time"
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-3xl bg-slate-900 p-8 text-slate-200 shadow-2xl">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-wide text-brand-200">Live dashboard snapshot</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Speed-to-lead P95", value: "52s" },
                  { label: "Contact rate", value: "86%" },
                  { label: "Bookings (7d)", value: "38" },
                  { label: "Docs received", value: "112" }
                ].map(card => (
                  <div key={card.label} className="rounded-xl bg-slate-800/70 p-4">
                    <div className="text-xs uppercase text-slate-400">{card.label}</div>
                    <div className="text-2xl font-semibold text-white">{card.value}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                <h3 className="text-lg font-semibold text-white">360° evidence pack</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Every conversation is transcribed, summarised, and attached to the CRM with timestamps, consent
                  wording, and next steps for the advisor.
                </p>
                <p className="mt-4 text-xs uppercase tracking-wide text-brand-200">GDPR-ready, PECR compliant.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
