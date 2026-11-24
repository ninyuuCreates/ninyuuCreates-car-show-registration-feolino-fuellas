export default function RegistrationFilters({
  searchTerm,
  onSearchChange,
  typeFilter,
  onTypeChange,
  statusFilter,
  onStatusChange,
  onClearFilters,
}) {
  const hasActiveFilters = Boolean(searchTerm || typeFilter || statusFilter);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {/* Search by Participant Name */}
        <div className="md:col-span-2">
          <label
            htmlFor="participant-search"
            className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500"
          >
            Search Participant
          </label>
          <input
            id="participant-search"
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by participant name..."
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        {/* Filter by Registration Type */}
        <div>
          <label
            htmlFor="type-filter"
            className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500"
          >
            Registration Type
          </label>
          <select
            id="type-filter"
            value={typeFilter}
            onChange={(e) => onTypeChange(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            <option value="">All Types</option>
            <option value="Exhibitor">Exhibitor (₱1,500)</option>
            <option value="Competitor">Competitor (₱2,500)</option>
            <option value="VIP">VIP (₱5,000)</option>
          </select>
        </div>

        {/* Filter by Registration Status */}
        <div>
          <label
            htmlFor="status-filter"
            className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500"
          >
            Status
          </label>
          <select
            id="status-filter"
            value={statusFilter}
            onChange={(e) => onStatusChange(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            <option value="">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
            <option value="CheckedIn">Checked In</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Clear Filters Button */}
      {hasActiveFilters && (
        <div className="mt-3 flex justify-end border-t border-slate-100 pt-3">
          <button
            type="button"
            onClick={onClearFilters}
            className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}