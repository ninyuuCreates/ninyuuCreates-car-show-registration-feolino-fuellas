const PAYMENT_STYLES = {
  Unpaid: "bg-red-100 text-red-800 border-red-200",
  Partial: "bg-amber-100 text-amber-800 border-amber-200",
  Paid: "bg-green-100 text-green-800 border-green-200",
};

export default function PaymentBadge({ paymentStatus }) {
  const style =
    PAYMENT_STYLES[paymentStatus] || "bg-slate-100 text-slate-700 border-slate-200";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${style}`}
    >
      {paymentStatus}
    </span>
  );
}