export default function PaymentsPage() {
  return (
    <main className="bg-white py-24">
      <div className="container mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-bold text-slate-900">Payment portal</h1>
        <p className="mt-4 text-slate-600">
          View invoices, update payment methods, and download receipts. Stripe Billing keeps all subscription and usage
          charges in sync daily.
        </p>
        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <p className="text-sm text-slate-600">
            This portal is in preview. Existing customers can access their Stripe-hosted billing portal via the link sent
            in onboarding emails or by contacting support@broker.ai.
          </p>
          <form className="mt-6 space-y-4">
            <input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm" placeholder="Enter billing email" />
            <button className="w-full rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-500">
              Send portal link
            </button>
          </form>
        </div>
        <p className="mt-6 text-xs text-slate-500">Need procurement docs? Email accounts@broker.ai.</p>
      </div>
    </main>
  );
}
