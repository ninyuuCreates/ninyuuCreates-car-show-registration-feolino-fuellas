export default function KpiCard({ title, value, subtitle, accentColor = "border-slate-200" }) {
  return (
    <div
      className={`rounded-xl border border-l-4 ${accentColor} bg-white p-5 shadow-sm transition-shadow hover:shadow-md`}
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        {title}
      </p>
      <p className="mt-2 text-2xl font-bold text-slate-900">{value}</p>
      {subtitle && (
        <p className="mt-1 text-xs text-slate-500">{subtitle}</p>
      )}
    </div>
  );
}