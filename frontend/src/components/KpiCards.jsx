import KpiCard from "./KpiCard";

const formatPHP = (amount) =>
  new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0,
  }).format(amount ?? 0);

const normalizeStatus = (val) =>
  String(val || "")
    .toLowerCase()
    .replace(/[\s_-]+/g, "");

export default function KpiCards({ summary, registrations = [] }) {
  const s = summary || {};
  const byStatus = s.byStatus || s.statusCounts || {};

  const countFromList = (targetKey) =>
    registrations.filter((item) => normalizeStatus(item.status) === targetKey).length;

  const totalRegistrations =
    s.totalRegistrations ??
    s.totalCount ??
    (registrations.length || 0);

  const totalPayments =
    s.totalPayments ??
    s.totalCollected ??
    registrations.reduce((sum, item) => sum + Number(item.amountPaid ?? item.paid ?? 0), 0);

  const totalFees =
    s.totalFees ??
    registrations.reduce((sum, item) => sum + Number(item.registrationFee ?? item.fee ?? 0), 0);

  const uncollectedPayments =
    s.uncollectedPayments ??
    s.totalUncollected ??
    Math.max(0, totalFees - totalPayments);

  const confirmedCount =
    s.confirmedCount ??
    s.confirmed ??
    byStatus.confirmed ??
    byStatus.Confirmed ??
    countFromList("confirmed");

  const checkedInCount =
    s.checkedInCount ??
    s.checkedIn ??
    s.checked_in ??
    byStatus.checkedIn ??
    byStatus.CheckedIn ??
    byStatus["Checked In"] ??
    countFromList("checkedin");

  const pendingCount =
    s.pendingCount ??
    s.pending ??
    byStatus.pending ??
    byStatus.Pending ??
    countFromList("pending");

  const cancelledCount =
    s.cancelledCount ??
    s.cancelled ??
    s.canceled ??
    byStatus.cancelled ??
    byStatus.Cancelled ??
    countFromList("cancelled");

  const cards = [
    {
      title: "Total Registrations",
      value: totalRegistrations,
      subtitle: `${pendingCount} Pending · ${cancelledCount} Cancelled`,
      icon: "📋",
    },
    {
      title: "Total Payments",
      value: formatPHP(totalPayments),
      subtitle: "Collected from active entries",
      icon: "₱",
    },
    {
      title: "Uncollected Payments",
      value: formatPHP(uncollectedPayments),
      subtitle: `Out of ${formatPHP(totalFees)} total fees`,
      icon: "⏳",
    },
    {
      title: "Confirmed",
      value: confirmedCount,
      subtitle: "Approved & scheduled",
      icon: "✓",
    },
    {
      title: "Checked In",
      value: checkedInCount,
      subtitle: "Arrived at venue",
      icon: "🏁",
    },
  ];

  return (
    <section
      aria-label="Summary metrics"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
    >
      {cards.map((card) => (
        <KpiCard key={card.title} {...card} />
      ))}
    </section>
  );
}