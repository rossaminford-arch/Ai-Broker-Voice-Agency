import { KpiTiles } from "@/components/KpiTiles";
import { StatCard } from "@/components/StatCard";

export default function DashboardHome() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-slate-900">Overview</h1>
        <p className="text-sm text-slate-600">Live operational metrics across inbound and outbound journeys.</p>
      </div>
      <KpiTiles />
      <div className="grid gap-4 md:grid-cols-2">
        <StatCard label="Compliance disclosures" value="100%" helper="Every call tracked" />
        <StatCard label="Avg. wrap time" value="42s" helper="Agent follow-up preparation" />
      </div>
    </div>
  );
}
