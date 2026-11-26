export default function RegistrationFilters({
  search,
  onSearchChange,
  type,
  onTypeChange,
  status,
  onStatusChange,
  onClear,
}) {
  const hasActiveFilters = Boolean(search || type || status);

  return (
    <div className="flex flex-col gap-3 border-b border-slate-200 px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
      <h2 className="text-base font-semibold text-slate-900">Registrations</h2>

      <div className="flex flex-wrap items-center gap-2.5">
        <div className="relative min-w-[220px] flex-1 sm:flex-initial">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
            />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search participant name..."
            className="w-full rounded-lg border border-slate-300 bg-white py-1.5 pr-3 pl-9 text-sm text-slate-800 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none"
          />
        </div>

        <select
          aria-label="Filter by type"
          value={type}
          onChange={(e) => onTypeChange(e.target.value)}
          className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 focus:border-slate-500 focus:outline-none"
        >
          <option value="">Type</option>
          <option value="Classic">Classic</option>
          <option value="Modified">Modified</option>
          <option value="Import">Import</option>
          <option value="Muscle">Muscle</option>
          <option value="Supercar">Supercar</option>
        </select>

        <select
          aria-label="Filter by status"
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
          className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 focus:border-slate-500 focus:outline-none"
        >
          <option value="">Status</option>
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="CheckedIn">Checked In</option>
          <option value="Cancelled">Cancelled</option>
        </select>

        <button
          type="button"
          onClick={onClear}
          disabled={!hasActiveFilters}
          className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Clear
        </button>
      </div>
    </div>
  );
}