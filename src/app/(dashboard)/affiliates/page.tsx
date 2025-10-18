import { StatCard } from "@/components/StatCard";

const stats = [
  { label: "Clicks", value: "284" },
  { label: "Trials", value: "36" },
  { label: "Conversions", value: "12" },
  { label: "Estimated payout", value: "£2,160", helper: "Next payment 1st of month" }
];

export default function AffiliateDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-slate-900">Affiliate performance</h1>
        <p className="text-sm text-slate-600">Track your referrals and projected payouts.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map(stat => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">Your referral link</h2>
        <p className="mt-2 text-sm text-slate-600">Share this link to earn 20% of revenue for 12 months.</p>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <code className="rounded-2xl bg-slate-100 px-4 py-2 text-sm text-slate-700">https://broker.ai/demo?ref=demo123</code>
          <button className="rounded-full bg-brand-600 px-4 py-2 text-xs font-semibold text-white hover:bg-brand-500">
            Copy link
          </button>
        </div>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">Recent referrals</h2>
        <ul className="mt-4 space-y-3 text-sm text-slate-600">
          <li>12 Jun — Mortgage Mastery (Signed)</li>
          <li>09 Jun — Insurance Pros (Trial)</li>
          <li>02 Jun — FinPlan Brokers (Demo booked)</li>
        </ul>
      </div>
    </div>
  );
}
