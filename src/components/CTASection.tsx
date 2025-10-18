import Link from "next/link";

export function CTASection() {
  return (
    <section className="bg-brand-600 py-16 text-white">
      <div className="container mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center">
        <h2 className="text-3xl font-semibold">Ready to hear your compliant AI receptionist?</h2>
        <p className="max-w-2xl text-lg text-brand-100">
          Spin up a pilot line in under an hour. Connect Twilio, Supabase, and your CRM—our team will guide you end to
          end.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/demo"
            className="rounded-full bg-white px-6 py-3 font-medium text-brand-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Experience the live demo
          </Link>
          <Link href="/pricing" className="rounded-full border border-white/70 px-6 py-3 text-white hover:bg-white/10">
            Compare plans
          </Link>
        </div>
      </div>
    </section>
  );
}
