type CategoryBadgeProps = {
  category: string;
};

const categoryStyle: Record<string, string> = {
  "Projet interne": "bg-blue-500/10 text-yellow-300 border-yellow-500/30",
  Exercice: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
  Démonstration: "bg-blue-500/10 text-emerald-300 border-emerald-500/30",
};

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  const style =
    categoryStyle[category] ??
    "bg-slate-500/10 text-slate-300 border-slate-500/30";

  return (
    <span
      className={`rounded-full border px-3 py-1 text-sm font-medium ${style}`}
    >
      {category}
    </span>
  );
}