import { DataTable } from "@/components/DataTable";
import { StatCard } from "@/components/StatCard";

const bookings = [
  {
    id: "booking-1",
    contact: "Sam Borrower",
    advisor: "Alex Broker",
    starts_at: new Date(Date.now() + 3600_000).toLocaleString(),
    status: "Confirmed"
  },
  {
    id: "booking-2",
    contact: "Jamie Remortgage",
    advisor: "Alex Broker",
    starts_at: new Date(Date.now() + 7200_000).toLocaleString(),
    status: "Awaiting docs"
  }
];

export default function BookingsPage() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="Bookings this week" value="42" />
        <StatCard label="Reschedules" value="5" helper="Sent via SMS" />
        <StatCard label="Docs outstanding" value="12" />
      </div>
      <DataTable
        headers={["Contact", "Advisor", "Starts", "Status", "Actions"]}
        rows={bookings.map(booking => [
          <span key={`${booking.id}-contact`} className="font-medium text-slate-900">
            {booking.contact}
          </span>,
          <span key={`${booking.id}-advisor`} className="text-slate-600">
            {booking.advisor}
          </span>,
          <span key={`${booking.id}-starts`} className="text-slate-600">
            {booking.starts_at}
          </span>,
          <span key={`${booking.id}-status`} className="text-xs uppercase text-emerald-600">
            {booking.status}
          </span>,
          <button key={`${booking.id}-resend`} className="text-sm text-brand-600">
            Send reschedule SMS
          </button>
        ])}
      />
    </div>
  );
}
