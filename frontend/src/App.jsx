import KpiCard from "./components/KpiCard";
import StatusBadge from "./components/StatusBadge";
import PaymentBadge from "./components/PaymentBadge";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 text-slate-900">
      <h1 className="mb-4 text-2xl font-bold">Car Show 2027 — Component Preview</h1>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <KpiCard title="Total Registrations" value="25" accentColor="border-l-blue-600" />
        <KpiCard title="Total Payments" value="₱42,000.00" accentColor="border-l-green-600" />
        <KpiCard title="Uncollected Payments" value="₱19,500.00" accentColor="border-l-red-600" />
      </div>

      <div className="flex flex-wrap gap-2">
        <StatusBadge status="Pending" />
        <StatusBadge status="Confirmed" />
        <StatusBadge status="CheckedIn" />
        <StatusBadge status="Cancelled" />
        <PaymentBadge paymentStatus="Unpaid" />
        <PaymentBadge paymentStatus="Partial" />
        <PaymentBadge paymentStatus="Paid" />
      </div>
    </div>
  );
}