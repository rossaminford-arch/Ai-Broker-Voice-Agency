export default function PrivacyPage() {
  return (
    <main className="bg-white py-24">
      <div className="container mx-auto max-w-4xl px-6 space-y-8 text-sm text-slate-600">
        <h1 className="text-4xl font-bold text-slate-900">Privacy policy</h1>
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Overview</h2>
          <p>
            Broker Voice Agency acts as a processor for your end-customer data. We collect call metadata, recordings,
            transcripts, and booking information to enable the service. Data is stored within EU regions on Supabase and
            encrypted S3.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Data retention</h2>
          <p>
            Recordings are retained for 90 days by default, transcripts and summaries for 12 months. You can configure
            shorter retention per account within the dashboard.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Your rights</h2>
          <p>
            End customers may request access or deletion via their broker. We provide admin tools to export call data and
            honour deletion requests within 7 days.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Subprocessors</h2>
          <p>
            Core vendors include Supabase, Vercel, AWS S3/MinIO, Twilio, Stripe, and Retell/Vapi for voice handling. We
            maintain a full list in the dashboard settings.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
          <p>Email privacy@broker.ai for any questions or DPA requests.</p>
        </section>
      </div>
    </main>
  );
}
