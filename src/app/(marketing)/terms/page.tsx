export default function TermsPage() {
  return (
    <main className="bg-white py-24">
      <div className="container mx-auto max-w-4xl px-6 space-y-8 text-sm text-slate-600">
        <h1 className="text-4xl font-bold text-slate-900">Terms of Service</h1>
        <p>
          Broker Voice Agency is a software-as-a-service platform providing compliant AI receptionist services for UK/EU
          brokers. By using the platform, you agree to these terms and any referenced policies.
        </p>
        <section>
          <h2 className="text-xl font-semibold text-slate-900">1. Accounts & access</h2>
          <p>
            Each user must belong to a single brokerage account. You are responsible for maintaining secure credentials
            and ensuring your usage complies with FCA, GDPR, and PECR requirements.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-slate-900">2. Acceptable use</h2>
          <p>
            You may not use the service to provide regulated mortgage or investment advice. The AI receptionist performs
            triage and booking only; advice must be delivered by authorised humans.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-slate-900">3. Data processing</h2>
          <p>
            We store data within the EU on Supabase and S3. Customers remain controllers of end-customer data. Detailed
            data processing terms are available upon request.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-slate-900">4. Billing</h2>
          <p>
            Subscriptions renew monthly via Stripe. Usage beyond included minutes/SMS is billed daily using Stripe usage
            records. Late payments may pause service.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-slate-900">5. Termination</h2>
          <p>
            Either party may cancel with 30 days notice. We retain call recordings for 90 days and summaries for 12 months
            unless you request accelerated deletion.
          </p>
        </section>
      </div>
    </main>
  );
}
