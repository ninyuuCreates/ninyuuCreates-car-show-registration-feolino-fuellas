export default function KpiCard({ title, value, subtitle, icon }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs transition hover:border-slate-300">
      <div className="flex items-start justify-between gap-2">
        <span className="text-xs font-medium text-slate-500">{title}</span>
        {icon && (
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-slate-600">
            {icon}
          </span>
        )}
      </div>
      <div className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
        {value}
      </div>
      {subtitle && (
        <p className="mt-1.5 text-xs text-slate-400">{subtitle}</p>
      )}
    </div>
  );
}