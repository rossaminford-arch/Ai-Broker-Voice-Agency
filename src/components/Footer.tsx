import Link from "next/link";

export function Footer() {
  const statusUrl = process.env.INSTATUS_STATUS_URL || "https://status.example.com";
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container mx-auto flex flex-col gap-6 px-6 py-10 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-slate-900">Broker Voice Agency</p>
          <p className="mt-1 text-xs text-slate-500">Designed for UK/EU mortgage, insurance, and finance brokers.</p>
        </div>
        <nav className="flex flex-wrap gap-4">
          <Link href="/pricing">Pricing</Link>
          <Link href="/demo">Live demo</Link>
          <Link href="/affiliate">Affiliate programme</Link>
          <Link href="/payments">Payment portal</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>
        <a
          href={statusUrl}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500 hover:border-brand-200 hover:text-brand-600"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500" /> Status
        </a>
      </div>
    </footer>
  );
}
