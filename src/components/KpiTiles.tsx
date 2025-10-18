import { StatCard } from "./StatCard";

const defaultKpis = [
  { label: "Speed-to-lead P95", value: "58s", helper: "Target < 60s" },
  { label: "Contact rate", value: "82%", helper: "Past 7 days" },
  { label: "Bookings (7d)", value: "34", helper: "Confirmed consults" },
  { label: "Docs received", value: "96", helper: "Awaiting 12" },
  { label: "Opt-outs", value: "3", helper: "STOP requests respected" }
];

export function KpiTiles({ kpis = defaultKpis }: { kpis?: { label: string; value: string; helper?: string }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {kpis.map(kpi => (
        <StatCard key={kpi.label} {...kpi} />
      ))}
    </div>
  );
}
