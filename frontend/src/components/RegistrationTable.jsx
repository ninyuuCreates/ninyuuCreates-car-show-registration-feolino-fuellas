import StatusBadge from "./StatusBadge";
import PaymentBadge from "./PaymentBadge";

const formatPhp = (amount) =>
  new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
  }).format(amount ?? 0);

const formatDate = (isoString) => {
  if (!isoString) return "—";
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return "—";
  return new Intl.DateTimeFormat("en-PH", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
};

export default function RegistrationTable({ registrations }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-500">
            <tr>
              <th scope="col" className="px-4 py-3">Reg #</th>
              <th scope="col" className="px-4 py-3">Participant</th>
              <th scope="col" className="px-4 py-3">Vehicle & Plate</th>
              <th scope="col" className="px-4 py-3">Type</th>
              <th scope="col" className="px-4 py-3">Registered Date</th>
              <th scope="col" className="px-4 py-3 text-right">Fee</th>
              <th scope="col" className="px-4 py-3 text-right">Paid</th>
              <th scope="col" className="px-4 py-3">Status</th>
              <th scope="col" className="px-4 py-3">Payment</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {registrations.map((reg) => (
              <tr
                key={reg.id}
                className="transition-colors hover:bg-slate-50/80"
              >
                <td className="whitespace-nowrap px-4 py-3 font-mono text-xs font-semibold text-slate-900">
                  {reg.registrationNumber}
                </td>
                <td className="px-4 py-3">
                  <div className="font-medium text-slate-900">
                    {reg.participantName}
                  </div>
                  <div className="text-xs text-slate-500">
                    {reg.contactNumber}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="font-medium text-slate-800">
                    {reg.carMakeModel}
                  </div>
                  <div className="font-mono text-xs text-slate-500">
                    {reg.plateNumber}
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-slate-800">
                  {reg.registrationType}
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-xs text-slate-600">
                  {formatDate(reg.registrationDate)}
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-right font-medium text-slate-800">
                  {formatPhp(reg.registrationFee)}
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-right font-medium text-slate-800">
                  {formatPhp(reg.amountPaid)}
                </td>
                <td className="whitespace-nowrap px-4 py-3">
                  <StatusBadge status={reg.status} />
                </td>
                <td className="whitespace-nowrap px-4 py-3">
                  <PaymentBadge paymentStatus={reg.paymentStatus} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}