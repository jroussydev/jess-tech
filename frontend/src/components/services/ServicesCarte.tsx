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
    <article className="card-dark flex h-full flex-col">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
          <Icon className="h-7 w-7 text-blue-400" aria-hidden="true" />
        </div>

        <span className="badge badge-primary">{prix}</span>
      </div>

      <h3 className="mt-6">{title}</h3>

      <p>{description}</p>

      <ul className="mt-6 space-y-3">
        {prestations.map((prestation) => (
          <li
            key={prestation}
            className="flex items-start gap-3 text-sm leading-6 text-slate-300"
          >
            <Check
              className="mt-1 h-4 w-4 shrink-0 text-blue-400"
              aria-hidden="true"
            />

            <span>{prestation}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <Link
          to={link}
          className="group inline-flex items-center gap-2 font-semibold text-blue-400 transition hover:text-blue-300"
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