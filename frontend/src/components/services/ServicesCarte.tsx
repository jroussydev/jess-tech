import { Check, type LucideIcon } from "lucide-react";
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
    <article
  className="
    card-dark
    card-dark-opaque
    card-glow
    group
    relative
    z-10
    flex
    h-full
    flex-col
    transition-transform
    duration-300
    hover:-translate-y-1
  "
>
      {/* En-tête */}
      <div className="flex items-center gap-4">
        <Icon
  className="
    h-8
    w-8
    shrink-0
    text-sky-500
    transition-transform
    duration-300
    group-hover:scale-110
  "
  aria-hidden="true"
/>

        <h3 className="min-w-0 text-slate-200">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="mt-4 text-slate-300">
        {description}
      </p>

      {/* Prestations incluses */}
      <ul className="mt-5 space-y-2.5">
        {prestations.map((prestation) => (
          <li
            key={prestation}
            className="flex items-start gap-3 text-slate-300"
          >
            <Check
              className="
                mt-1
                h-4
                w-4
                shrink-0
                text-sky-500
              "
              aria-hidden="true"
            />

            <span>{prestation}</span>
          </li>
        ))}
      </ul>

      {/* Prix + lien */}
      <div className="mt-auto flex items-center justify-between gap-3 pt-6">
        <span className="badge badge-primary shrink-0">
          {prix}
        </span>

        <Link
          to={link}
          className="
            group
            inline-flex
            min-w-0
            items-center
            justify-end
            gap-2
            text-right
            font-semibold
            text-sky-500
            transition-colors
            duration-300
            hover:text-sky-400
          "
        >
          <span className="whitespace-nowrap">
            Découvrir ce service
          </span>

          <img
  src="/decorations/fleche.png"
  alt=""
  aria-hidden="true"
  className="
    h-6
    w-auto
    shrink-0
    object-contain
    transition-transform
    duration-300
    group-hover:translate-x-1
  "
/>
        </Link>
      </div>
    </article>
  );
}