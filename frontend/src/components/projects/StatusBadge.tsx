type StatusBadgeProps = {
  status: string;
};

const statusStyles: Record<string, string> = {
  "En cours": "bg-yellow-500/10 text-yellow-300 border-yellow-500/30",
  Terminé: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const style =
    statusStyles[status] ??
    "bg-slate-500/10 text-slate-300 border-slate-500/30";

  return (
    <span
      className={`rounded-full border px-3 py-1 text-sm font-medium ${style}`}
    >
      {status}
    </span>
  );
}