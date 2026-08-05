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
    <section className="section-light section-spacing rounded-2xl">
      <div className="site-container">
        <div className="home-services__layout">
          {/* Introduction */}
          <div className="section-intro home-services__intro">
            <p className="section-label">Services</p>

            <h2>Comment je peux vous aider</h2>

            <p>
              Des services clairs pour vous accompagner à chaque étape de votre
              projet. Chaque service est pensé pour rester compréhensible,
              utile et maintenable dans le temps.
            </p>

            <Link
              to="/services"
              className="btn-primary home-services__link"
            >
              Voir tous les services →
            </Link>
          </div>

          {/* Cartes des services */}
          <div className="home-services__grid">
            {services.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="card-dark home-services__card"
              >
                <Icon
                  className="home-services__icon"
                  aria-hidden="true"
                />

                <h3 className="home-services__title">{title}</h3>

                <p className="home-services__description">
                  {description}
                </p>

                <div
                  className="home-services__separator"
                  aria-hidden="true"
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}