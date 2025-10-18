import { DataTable } from "@/components/DataTable";
import { StatCard } from "@/components/StatCard";
import Link from "next/link";

const leads = [
  {
    id: "lead-1",
    contact: "Sam Borrower",
    source: "Website",
    utm: "google/cpc",
    status: "New",
    consent: "SMS, Voice"
  },
  {
    id: "lead-2",
    contact: "Dylan Investor",
    source: "Facebook",
    utm: "fb/leadgen",
    status: "Working",
    consent: "Voice"
  }
];

export default function LeadsPage() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="New leads (24h)" value="18" />
        <StatCard label="Speed-to-lead" value="52s" helper="P95 last 24h" />
        <StatCard label="Opt-in coverage" value="94%" />
      </div>
      <DataTable
        headers={["Contact", "Source", "UTM", "Status", "Consent", "Action"]}
        rows={leads.map(lead => [
          <span key={`${lead.id}-contact`} className="font-medium text-slate-900">
            {lead.contact}
          </span>,
          <span key={`${lead.id}-source`} className="text-slate-600">
            {lead.source}
          </span>,
          <span key={`${lead.id}-utm`} className="text-xs text-slate-500">
            {lead.utm}
          </span>,
          <span key={`${lead.id}-status`} className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
            {lead.status}
          </span>,
          <span key={`${lead.id}-consent`} className="text-xs text-slate-500">
            {lead.consent}
          </span>,
          <Link key={`${lead.id}-call`} href="/api/voice/outbound" className="text-brand-600">
            Call now
          </Link>
        ])}
      />
    </div>
  );
}
