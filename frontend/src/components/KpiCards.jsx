import KpiCard from "./KpiCard";

const formatPhp = (amount) =>
  new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
  }).format(amount ?? 0);

export default function KpiCards({ summary, isLoading }) {
  const cards = [
    {
      title: "Total Registrations",
      value: isLoading ? "—" : (summary?.totalRegistrations ?? 0),
      subtitle: `${summary?.pending ?? 0} Pending · ${summary?.cancelled ?? 0} Cancelled`,
      accentColor: "border-l-blue-600",
    },
    {
      title: "Total Payments",
      value: isLoading ? "—" : formatPhp(summary?.totalPayments),
      subtitle: "Collected from active entries",
      accentColor: "border-l-emerald-600",
    },
    {
      title: "Uncollected Payments",
      value: isLoading ? "—" : formatPhp(summary?.uncollectedPayments),
      subtitle: `Out of ${formatPhp(summary?.totalFees)} total fees`,
      accentColor: "border-l-rose-600",
    },
    {
      title: "Confirmed",
      value: isLoading ? "—" : (summary?.confirmed ?? 0),
      subtitle: "Approved & scheduled",
      accentColor: "border-l-indigo-600",
    },
    {
      title: "Checked In",
      value: isLoading ? "—" : (summary?.checkedIn ?? 0),
      subtitle: "Arrived at event venue",
      accentColor: "border-l-amber-500",
    },
  ];

  return (
    <section
      aria-label="Registration Summary Metrics"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
    >
      {cards.map((card) => (
        <KpiCard
          key={card.title}
          title={card.title}
          value={card.value}
          subtitle={card.subtitle}
          accentColor={card.accentColor}
        />
      ))}
    </section>
  );
}