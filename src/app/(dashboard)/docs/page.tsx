import { DataTable } from "@/components/DataTable";
import { StatCard } from "@/components/StatCard";

const docRows = [
  {
    id: "doc-1",
    contact: "Sam Borrower",
    checklist: "Proof of ID",
    status: "Received",
    lastReminded: "Today"
  },
  {
    id: "doc-2",
    contact: "Jamie Remortgage",
    checklist: "Bank statements",
    status: "Outstanding",
    lastReminded: "2 days ago"
  }
];

export default function DocsPage() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="Checklists open" value="24" />
        <StatCard label="Docs received" value="112" helper="Past 30 days" />
        <StatCard label="Reminders sent" value="86" />
      </div>
      <DataTable
        headers={["Contact", "Item", "Status", "Last reminded", "Actions"]}
        rows={docRows.map(row => [
          <span key={`${row.id}-contact`} className="font-medium text-slate-900">
            {row.contact}
          </span>,
          <span key={`${row.id}-item`} className="text-slate-600">
            {row.checklist}
          </span>,
          <span key={`${row.id}-status`} className={`text-xs font-medium ${row.status === "Received" ? "text-emerald-600" : "text-amber-600"}`}>
            {row.status}
          </span>,
          <span key={`${row.id}-reminded`} className="text-xs text-slate-500">
            {row.lastReminded}
          </span>,
          <button key={`${row.id}-action`} className="text-sm text-brand-600">
            Reissue link
          </button>
        ])}
      />
    </div>
  );
}
