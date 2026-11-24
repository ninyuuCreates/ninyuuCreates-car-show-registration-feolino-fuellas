import { useCallback, useEffect, useState } from "react";
import { getRegistrations, getSummary } from "../api/sample-data";
import { useDebounce } from "../hooks/useDebounce";
import KpiCards from "../components/KpiCards";
import RegistrationFilters from "../components/RegistrationFilters";
import RegistrationTable from "../components/RegistrationTable";
import Pagination from "../components/Pagination";

export default function RegistrationsPage() {
  const [registrations, setRegistrations] = useState([]);
  const [summary, setSummary] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const debouncedSearch = useDebounce(searchTerm, 300);

  const loadSummary = useCallback(async () => {
    try {
      const data = await getSummary();
      setSummary(data);
    } catch {
      // Summary error won't block table rendering if needed
    }
  }, []);

  const loadRegistrations = useCallback(async () => {
    setIsLoading(true);
    setError("");

    try {
      const data = await getRegistrations({
        participantName: debouncedSearch,
        type: typeFilter,
        status: statusFilter,
        page,
        pageSize,
      });

      setRegistrations(data.items ?? []);
      setTotalCount(data.totalCount ?? 0);
      setTotalPages(data.totalPages ?? 0);
    } catch (err) {
      setError(err?.message || "Failed to load registrations.");
      setRegistrations([]);
      setTotalCount(0);
      setTotalPages(0);
    } finally {
      setIsLoading(false);
    }
  }, [debouncedSearch, typeFilter, statusFilter, page, pageSize]);

  useEffect(() => {
    loadSummary();
  }, [loadSummary]);

  useEffect(() => {
    loadRegistrations();
  }, [loadRegistrations]);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setPage(1);
  };

  const handleTypeChange = (value) => {
    setTypeFilter(value);
    setPage(1);
  };

  const handleStatusChange = (value) => {
    setStatusFilter(value);
    setPage(1);
  };

  const handlePageSizeChange = (newSize) => {
    setPageSize(newSize);
    setPage(1);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setTypeFilter("");
    setStatusFilter("");
    setPage(1);
  };

  const hasActiveFilters = Boolean(searchTerm || typeFilter || statusFilter);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl space-y-6 px-4 py-8 sm:px-6 lg:px-8">
        {/* Page Header */}
        <header className="flex flex-col justify-between gap-2 border-b border-slate-200 pb-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Event Operations Dashboard
            </p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Car Show 2027 — Registrations & Payments
            </h1>
          </div>
          <p className="text-xs text-slate-500">
            Showing sample data (ready for API integration)
          </p>
        </header>

        {/* KPI Summary Cards */}
        <KpiCards summary={summary} isLoading={!summary && isLoading} />

        {/* Search & Filter Controls */}
        <RegistrationFilters
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          typeFilter={typeFilter}
          onTypeChange={handleTypeChange}
          statusFilter={statusFilter}
          onStatusChange={handleStatusChange}
          onClearFilters={handleClearFilters}
        />

        {/* Loading, Error, Empty, or Table State */}
        {error ? (
          <div className="rounded-xl border border-rose-200 bg-rose-50 p-6 text-center">
            <p className="text-sm font-semibold text-rose-800">{error}</p>
            <button
              type="button"
              onClick={loadRegistrations}
              className="mt-3 rounded-lg bg-rose-600 px-4 py-2 text-xs font-medium text-white transition hover:bg-rose-700"
            >
              Retry
            </button>
          </div>
        ) : isLoading ? (
          <div className="rounded-xl border border-slate-200 bg-white p-12 text-center shadow-sm">
            <p className="text-sm font-medium text-slate-600">
              Loading registrations...
            </p>
          </div>
        ) : registrations.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-white p-12 text-center shadow-sm">
            <p className="text-sm font-semibold text-slate-800">
              No registrations found
            </p>
            <p className="mt-1 text-xs text-slate-500">
              {hasActiveFilters
                ? "Try adjusting your search keyword or clearing active filters."
                : "There are currently no registrations to display."}
            </p>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={handleClearFilters}
                className="mt-4 rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-100"
              >
                Clear Filters
              </button>
            )}
          </div>
        ) : (
          <>
            <RegistrationTable registrations={registrations} />
            <Pagination
              page={page}
              pageSize={pageSize}
              totalCount={totalCount}
              totalPages={totalPages}
              onPageChange={setPage}
              onPageSizeChange={handlePageSizeChange}
            />
          </>
        )}
      </div>
    </div>
  );
}