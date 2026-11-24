const PAGE_SIZE_OPTIONS = [5, 10, 20, 50];

export default function Pagination({
  page,
  pageSize,
  totalCount,
  totalPages,
  onPageChange,
  onPageSizeChange,
}) {
  if (totalCount === 0) return null;

  const startItem = (page - 1) * pageSize + 1;
  const endItem = Math.min(page * pageSize, totalCount);
  const canGoPrev = page > 1;
  const canGoNext = page < totalPages;

  return (
    <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm sm:flex-row">
      {/* Showing X–Y of Z */}
      <div className="text-xs text-slate-500">
        Showing{" "}
        <span className="font-semibold text-slate-800">{startItem}</span>–
        <span className="font-semibold text-slate-800">{endItem}</span> of{" "}
        <span className="font-semibold text-slate-800">{totalCount}</span>{" "}
        registrations
      </div>

      {/* Controls: Page size + Prev / Page X of Y / Next */}
      <div className="flex flex-wrap items-center gap-4">
        <label className="flex items-center gap-2 text-xs text-slate-600">
          <span>Rows per page:</span>
          <select
            value={pageSize}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
            className="rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-xs font-medium text-slate-800 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            {PAGE_SIZE_OPTIONS.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </label>

        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled={!canGoPrev}
            onClick={() => onPageChange(page - 1)}
            className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>

          <span className="px-2 text-xs font-medium text-slate-700">
            Page <span className="font-semibold text-slate-900">{page}</span>{" "}
            of{" "}
            <span className="font-semibold text-slate-900">
              {Math.max(1, totalPages)}
            </span>
          </span>

          <button
            type="button"
            disabled={!canGoNext}
            onClick={() => onPageChange(page + 1)}
            className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}