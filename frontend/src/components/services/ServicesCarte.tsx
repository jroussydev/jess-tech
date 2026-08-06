import { ArrowRight, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

type ServicesCarteProps = {
  title: string;
  description: string;
  prestations: string[];
  prix: string;
  link: string;
  icon: LucideIcon;
};

export default function ServicesCarte({
  title,
  description,
  prestations,
  prix,
  link,
  icon: Icon,
}: ServicesCarteProps) {
  return (
    <article className="card-dark card-dark-opaque flex h-full flex-col relative z-10">
      {/* En-tête : icône et titre */}
<div className="flex items-center gap-4">
  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
    <Icon
      className="h-7 w-7 text-blue-400"
      aria-hidden="true"
    />
  </div>

  <h3 className="min-w-0">
    {title}
  </h3>
</div>

{/* Description sous toute la ligne */}
<p className="mt-4">
  {description}
</p>

      {/* Prestations incluses */}
      <ul className="mt-5 space-y-2.5">
        {prestations.map((prestation) => (
          <li
            key={prestation}
            className="flex items-start gap-3 text-base leading-7 text-slate-300"
          >
            <Check
              className="mt-1.5 h-4 w-4 shrink-0 text-blue-400"
              aria-hidden="true"
            />

            <span>{prestation}</span>
          </li>
        ))}
      </ul>

      {/* Prix et lien */}
      <div className="mt-auto flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <span className="badge badge-primary self-start">
          {prix}
        </span>

        <Link
          to={link}
          className="group inline-flex items-center gap-2 font-semibold text-blue-400 transition-colors duration-300 hover:text-blue-300"
        >
          Découvrir ce service

          <ArrowRight
            className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}