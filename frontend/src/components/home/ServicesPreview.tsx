import {
  LifeBuoy,
  Monitor,
  PenTool,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedCardBorder from "../decorations/AnimatedCardBorder";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

const services: Service[] = [
  {
    title: "Sites vitrines",
    description:
      "Des sites clairs, responsive et bien structurés pour présenter votre activité.",
    icon: Monitor,
    image: "/services/creation-de-site.png",
  },
  {
    title: "Refonte",
    description:
      "La modernisation d’un site existant pour améliorer son image et sa lisibilité.",
    icon: PenTool,
    image: "/services/refonte-de-site.png",
  },
  {
    title: "Maintenance",
    description:
      "Des corrections, mises à jour, petites évolutions et suivi technique.",
    icon: Wrench,
    image: "/services/maintenance-de-site.png",
  },
  {
    title: "Assistance technique",
    description:
      "Un accompagnement ponctuel pour débloquer, comprendre ou améliorer vos outils.",
    icon: LifeBuoy,
    image: "/services/assistance-technique.png",
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
            {services.map(({ title, description, icon: Icon, image }) => (
              <article
  key={title}
  className="
    card-glow
    group
    relative
    min-h-45
    overflow-hidden
    rounded-2xl
  "
>
  <AnimatedCardBorder />

  {/* Image */}
  <img
    src={image}
    alt=""
    aria-hidden="true"
    className="
      absolute
      inset-0
      h-full
      w-full
      object-cover
      transition-transform
      duration-500
      group-hover:scale-110
    "
  />

  {/* Fondu */}
  <div
    className="
      pointer-events-none
      absolute
      inset-0
      bg-gradient-to-b
      from-[#020817]/20
      via-[#020817]/65
      to-[#020817]
    "
    aria-hidden="true"
  />

  {/* Contenu */}
  <div className="relative z-10 flex h-full flex-col justify-end p-4 lg:p-5">
    <div className="flex items-center gap-3">
      <Icon
        className="h-6 w-6 shrink-0 text-sky-500 lg:h-7 lg:w-7"
        aria-hidden="true"
      />

      <h3 className="text-white">{title}</h3>
    </div>

    <p className="mt-2 text-slate-300">
      {description}
    </p>
  </div>
</article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}