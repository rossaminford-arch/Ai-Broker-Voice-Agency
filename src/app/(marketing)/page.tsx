import { CTASection } from "@/components/CTASection";
import { FeatureCards } from "@/components/FeatureCards";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LogoWall } from "@/components/LogoWall";
import Link from "next/link";

const proofTiles = [
  { label: "Speed-to-lead", value: "↓ 71%", helper: "vs. manual call back" },
  { label: "Contact rate", value: "↑ 31%", helper: "More conversations started" },
  { label: "Bookings/week", value: "+12", helper: "Average per branch" }
];

const faq = [
  {
    q: "Is the agent FCA compliant?",
    a: "The assistant sticks to scripted disclosures, never provides advice, and escalates rate or underwriting queries to humans."
  },
  {
    q: "Can we use our own phone numbers?",
    a: "Yes—import your Twilio numbers or let us provision fresh UK/EU lines with geo routing."
  },
  {
    q: "How fast can we go live?",
    a: "Most brokerages launch within 48 hours once the scripts, calendars, and CRM access are confirmed."
  },
  {
    q: "What about data residency?",
    a: "Supabase (EU region), S3 object storage, and optional onshore call recording storage keep data within UK/EU."
  }
];

export default function MarketingPage() {
  return (
    <>
      <Hero />
      <LogoWall />
      <HowItWorks />
      <FeatureCards />
      <Proof />
      <Compliance />
      <Pricing />
      <FAQ />
      <CTASection />
      <Footer />
    </>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: "Train in under an hour",
      description: "Upload scripts, disclosures, FAQs, and business hours. Connect HubSpot and Cal.com."
    },
    {
      title: "Deploy to every inbound & outbound line",
      description: "Route landlines, mobiles, and speed-to-lead automations through the AI receptionist."
    },
    {
      title: "Monitor the evidence",
      description: "Call summaries, transcripts, and compliance artefacts feed straight into the dashboard and CRM."
    }
  ];
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold text-slate-900">How it works</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-4xl font-semibold text-brand-500">0{index + 1}</div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="container mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-semibold">Proof it performs</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {proofTiles.map(tile => (
            <div key={tile.label} className="rounded-3xl bg-white/10 p-6">
              <div className="text-sm uppercase text-brand-200">{tile.label}</div>
              <div className="mt-4 text-4xl font-bold">{tile.value}</div>
              <p className="mt-2 text-sm text-slate-200">{tile.helper}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Compliance() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900">Compliance baked-in</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">PECR & GDPR first</h3>
              <p className="mt-2 text-sm text-slate-600">
                Mandatory disclosure lines, consent capture, and retention timers (audio 90 days, summaries 12 months)
                are enforced by default.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Opt-outs honoured automatically</h3>
              <p className="mt-2 text-sm text-slate-600">
                STOP/TPS/CTPS checks pause outreach instantly while logging audit events for each channel.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Evidence packs</h3>
              <p className="mt-2 text-sm text-slate-600">
                Every call stores the wording version, full transcript, redactions, and outcomes for FCA-ready reviews.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Secure storage</h3>
              <p className="mt-2 text-sm text-slate-600">
                Recordings and documents stay on encrypted S3 buckets in-region with per-tenant access controls.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "£249",
      description: "Single branch coverage, 1,000 minutes included",
      cta: "Launch pilot",
      features: ["Inbound receptionist", "Speed-to-lead dial outs", "HubSpot sync", "Doc nudges"]
    },
    {
      name: "Pro",
      price: "£299",
      description: "Adds WhatsApp, compliance exports, and partner dashboards",
      cta: "Scale operations",
      features: ["WhatsApp follow-ups", "Affiliate tracking", "Usage metering", "Evidence packs"]
    },
    {
      name: "Scale",
      price: "£399",
      description: "Multi-brand, custom reporting, and dedicated success manager",
      cta: "Talk to sales",
      features: ["Multi-tenant brands", "Custom reporting", "Priority support", "Advisor scorecards"]
    }
  ];
  return (
    <section id="pricing" className="bg-white py-20">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Pricing that scales with outcomes</h2>
          <p className="text-sm text-slate-500">Minutes billed via Stripe metered usage. SMS/WhatsApp billed separately.</p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {plans.map(plan => (
            <div key={plan.name} className="flex flex-col rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="text-sm font-semibold uppercase text-brand-500">{plan.name}</div>
              <div className="mt-4 text-4xl font-bold">{plan.price}</div>
              <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-slate-600">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-brand-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/payments"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-500"
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="container mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold text-slate-900">FAQ</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {faq.map(item => (
            <div key={item.q} className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">{item.q}</h3>
              <p className="mt-3 text-sm text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
