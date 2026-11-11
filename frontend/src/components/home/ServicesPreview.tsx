import { Check, LifeBuoy, Monitor, PenTool, Wrench, type LucideIcon } from "lucide-react";
import { Link } from "react-router";
import AnimatedCardBorder from "../decorations/AnimatedCardBorder";

type Service = {
  accroche: string;     // ← la question « problème client »
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  link: string;         // ← la page du service
  gridClass: string;
  featured?: boolean;
  points?: string[];    // ← optionnel : points clés (grande carte)
  price?: string;       // ← optionnel : prix (grande carte)
};

const services: Service[] = [
  {
    accroche: "Pas encore de site ?",
    title: "Sites vitrines",
    description:
      "Un site clair et responsive, pensé pour que vos clients vous trouvent et vous contactent.",
    icon: Monitor,
    image: "/services/deco-sites-vitrines.png",
    link: "/services/creation-site-internet",
    gridClass: "row-span-2",
    featured: true,
    points: ["Design sur mesure", "Adapté au mobile", "Référencement de base"],
    price: "À partir de 490 €",
  },
  {
    accroche: "Votre site a vieilli ?",
    title: "Refonte",
    description: "On modernise votre site pour améliorer son image et sa lisibilité.",
    icon: PenTool,
    image: "/services/deco-refonte.png",
    link: "/services/refonte-site",
    gridClass: "",
  },
  {
    accroche: "Un bug, une mise à jour ?",
    title: "Maintenance",
    description: "Corrections, mises à jour et suivi technique.",
    icon: Wrench,
    image: "/services/deco-maintenance.png",
    link: "/services/maintenance-site-web",
    gridClass: "",
  },
  {
    accroche: "Bloqué sur un outil ?",
    title: "Assistance technique",
    description:
      "Un accompagnement ponctuel pour débloquer, comprendre ou améliorer vos outils.",
    icon: LifeBuoy,
    image: "/services/deco-assistance.png",
    link: "/services/assistance-technique",
    gridClass: "col-span-2",
  },
];

export default function ServicesPreview() {
  return (
    <section className="section-light section-fade-hero section-spacing">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[400px_minmax(0,1fr)] lg:items-center xl:gap-12">
          {/* Introduction */}
          <div className="section-intro max-w-xl">
            <p className="section-label">Services</p>

            <h2>Comment je peux vous aider</h2>

            <p>
              Des services clairs pour vous accompagner à chaque étape de votre
              projet. Chaque service est pensé pour rester compréhensible,
              utile et maintenable dans le temps.
            </p>

            <Link to="/services" className="btn-primary mt-6">
              Voir tous les services →
            </Link>
          </div>

          {/* Cartes */}
<div
  className="
    grid
    grid-cols-2
    gap-3
    md:gap-4
    lg:translate-y-6
    lg:gap-5
    xl:translate-y-7
  "
>
            {services.map(({ accroche, title, description, icon: Icon, image, link, gridClass, featured, points, price }) => (
              <article
  key={title}
  className={`
    ${featured ? "card-glow-gold" : "card-glow"}
    service-card-bg
    group
    relative
    min-h-45
    overflow-hidden
    rounded-2xl
    ${gridClass}
  `}
>
  <AnimatedCardBorder />

  {/* Dessin Procreate (PNG transparent, aligné à droite) */}
  <img
    src={image}
    alt=""
    aria-hidden="true"
    onError={(e) => (e.currentTarget.style.display = "none")}
    className="
      pointer-events-none
      absolute
      inset-0
      h-full
      w-full
      object-contain
      object-right
      transition-transform
      duration-500
      group-hover:scale-105
    "
  />

  {/* Texte à gauche */}
  <div
    className={`
      service-card__content
      card-content-mobile
      relative
      z-10
      flex
      h-full
      flex-col
      p-4
      lg:p-5
      ${featured ? "max-w-[50%] justify-between" : "max-w-[60%] justify-center"}
    `}
  >
    <div>
      <p className="text-sm text-[#E9C46A]">{accroche}</p>

      <div className="service-card__heading mt-1 flex items-center gap-3">
        <Icon className="service-card__icon h-6 w-6 shrink-0 text-sky-500 lg:h-7 lg:w-7" aria-hidden="true" />
        <h3 className="service-card__title text-white">{title}</h3>
      </div>

      <p className="service-card__description mt-2 text-slate-300">{description}</p>

      {points && (
        <ul className="mt-4 space-y-2 text-slate-300">
          {points.map((point) => (
            <li key={point} className="flex items-center gap-2">
              <Check className="h-4 w-4 shrink-0 text-[#E9C46A]" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      )}
    </div>

    {price && (
      <div className="mt-6">
        <p className="text-lg text-white">{price}</p>
        <Link to={link} className="color-link mt-1 inline-block">
          Voir l'offre →
        </Link>
      </div>
    )}
  </div>
</article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}