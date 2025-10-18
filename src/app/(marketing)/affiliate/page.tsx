import Link from "next/link";

export default function AffiliatePage() {
  return (
    <main className="bg-slate-50 py-24">
      <div className="container mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-bold text-slate-900">Affiliate programme</h1>
        <p className="mt-4 text-slate-600">
          Introduce brokerages who need a compliant AI receptionist and earn 20% of monthly revenue for 12 months.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">How it works</h2>
            <ol className="mt-4 space-y-3 text-sm text-slate-600">
              <li>1. Apply below and get your unique referral link.</li>
              <li>2. Leads book a call or trigger the live demo.</li>
              <li>3. Earn monthly payouts for each converted account.</li>
            </ol>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Why partners love it</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>💷 Transparent payouts via Stripe Connect.</li>
              <li>📊 Dashboard with clicks, trials, conversions, and forecasted earnings.</li>
              <li>📞 Co-selling support for larger networks.</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 rounded-3xl border border-brand-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Apply for affiliate access</h2>
          <p className="mt-2 text-sm text-slate-600">We review submissions within 2 business days.</p>
          <form className="mt-6 grid gap-4 md:grid-cols-2">
            <input className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm" placeholder="Your name" />
            <input className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm" placeholder="Email" />
            <input className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm md:col-span-2" placeholder="Company / audience" />
            <textarea className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm md:col-span-2" placeholder="How do you plan to promote?" rows={4} />
            <button className="md:col-span-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-500">
              Submit application
            </button>
          </form>
        </div>
        <p className="mt-6 text-sm text-slate-500">
          Already a partner? <Link href="/app/affiliates" className="text-brand-600">Log in to the affiliate dashboard</Link>.
        </p>
      </div>
    </main>
  );
}
