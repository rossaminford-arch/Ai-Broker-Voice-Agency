import { DataTable } from "@/components/DataTable";
import { StatCard } from "@/components/StatCard";
import Link from "next/link";

const calls = [
  {
    id: "call-1",
    contact: "Sam Borrower",
    outcome: "Qualified",
    duration: "08:12",
    disclosure: "uk-2024-q3",
    recording: "https://example.com/recording"
  },
  {
    id: "call-2",
    contact: "Lara Advisor",
    outcome: "Voicemail",
    duration: "01:03",
    disclosure: "uk-2024-q3",
    recording: "https://example.com/recording"
  }
];

export default function CallsPage() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="Calls today" value="34" helper="Inbound and outbound" />
        <StatCard label="Avg. handle time" value="05:42" helper="Rolling 7d" />
        <StatCard label="Compliance hits" value="100%" helper="Disclosure tracked" />
      </div>
      <DataTable
        headers={["Contact", "Outcome", "Duration", "Disclosure", "Recording"]}
        rows={calls.map(call => [
          <span key={`${call.id}-contact`} className="font-medium text-slate-900">
            {call.contact}
          </span>,
          <span key={`${call.id}-outcome`} className="text-slate-600">
            {call.outcome}
          </span>,
          <span key={`${call.id}-duration`} className="text-slate-600">
            {call.duration}
          </span>,
          <span key={`${call.id}-disclosure`} className="text-xs uppercase text-slate-500">
            {call.disclosure}
          </span>,
          <Link key={`${call.id}-recording`} href={call.recording} className="text-brand-600">
            Listen
          </Link>
        ])}
      />
    </div>
  );
}
