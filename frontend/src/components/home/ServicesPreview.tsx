import {
  LifeBuoy,
  Monitor,
  PenTool,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "Sites vitrines",
    description:
      "Des sites clairs, responsive et bien structurés pour présenter votre activité.",
    icon: Monitor,
  },
  {
    title: "Refonte",
    description:
      "La modernisation d’un site existant pour améliorer son image et sa lisibilité.",
    icon: PenTool,
  },
  {
    title: "Maintenance",
    description:
      "Des corrections, mises à jour, petites évolutions et suivi technique.",
    icon: Wrench,
  },
  {
    title: "Assistance technique",
    description:
      "Un accompagnement ponctuel pour débloquer, comprendre ou améliorer vos outils.",
    icon: LifeBuoy,
  },
];

export default function ServicesPreview() {
  return (
    <section className="section-light section-spacing">
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

            <Link
              to="/services"
              className="btn-primary mt-6 w-full sm:w-auto"
            >
              Voir tous les services →
            </Link>
          </div>

          {/* Cartes des services */}
          <div className="grid gap-5  sm:grid-cols-2 2xl:grid-cols-2">
            {services.map(({ title, description, icon: Icon }) => (
              <article
  key={title}
  className="card-dark flex min-h-[190px] flex-col"
>
  <div className="flex items-center gap-4">
    <Icon
      className="h-8 w-8 shrink-0 text-blue-500"
      aria-hidden="true"
    />

    <h3>{title}</h3>
  </div>

  <p>{description}</p>

  <div className="mt-auto pt-5">
    <div className="h-px rounded-full bg-gradient-to-r from-blue-500/50 to-transparent" />
  </div>
</article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}