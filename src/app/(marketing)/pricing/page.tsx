import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    price: "£249",
    description: "Perfect for single-branch brokerages testing voice automation.",
    includes: ["1,000 minutes included", "Inbound receptionist", "HubSpot sync", "Document nudges"],
    highlight: false
  },
  {
    name: "Pro",
    price: "£299",
    description: "Adds WhatsApp messaging, affiliate tracking, and compliance exports.",
    includes: ["WhatsApp and SMS follow-ups", "Affiliate portal", "Call evidence pack exports", "Stripe usage metering"],
    highlight: true
  },
  {
    name: "Scale",
    price: "£399",
    description: "Built for multi-branch, multi-brand networks needing deeper reporting.",
    includes: ["Multi-brand routing", "Advanced analytics", "Dedicated success manager", "Custom data residency"],
    highlight: false
  }
];

export default function PricingPage() {
  return (
    <main className="bg-slate-50 py-24">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900">Pricing</h1>
          <p className="mt-4 text-slate-600">
            All plans include FCA-style audit trails, compliant disclosures, and HubSpot integration.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {tiers.map(tier => (
            <div
              key={tier.name}
              className={`rounded-3xl border ${tier.highlight ? "border-brand-400 bg-white shadow-xl" : "border-slate-200 bg-white"} p-8`}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-slate-900">{tier.name}</h2>
                {tier.highlight ? <span className="rounded-full bg-brand-100 px-3 py-1 text-xs text-brand-600">Most popular</span> : null}
              </div>
              <div className="mt-4 text-4xl font-bold text-slate-900">{tier.price}</div>
              <p className="mt-2 text-sm text-slate-600">{tier.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                {tier.includes.map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-brand-500" /> {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/payments"
                className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-4 py-3 text-sm font-medium text-white hover:bg-brand-500"
              >
                Get started
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-xs text-slate-500">
          Minutes and SMS above plan allowances billed daily via Stripe usage records.
        </p>
      </div>
    </main>
  );
}
