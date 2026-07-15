import { PenTool, Monitor, Wrench, LifeBuoy } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicesPreview() {
  const services = [
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

  return (
    <section className="section-light section-spacing rounded-2xl">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:items-center">
          {/* Introduction */}
          <div className="section-intro">
            <p className="section-label">
              Services
            </p>

            <h2>
              Comment je peux vous aider
            </h2>

            <p className="max-w-md">
              Des services clairs pour vous accompagner à chaque étape de votre
              projet. Chaque service est pensé pour rester compréhensible,
              utile et maintenable dans le temps.
            </p>

            <Link
              to="/services"
              className="btn-primary mt-6"
            >
              Voir tous les services →
            </Link>
          </div>

          {/* Cartes */}
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 text-center ">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="card-dark group min-h-[230px]"
                >
                  <Icon
                    className="mx-auto h-10 w-10 text-blue-500"
                    aria-hidden="true"
                  />

                  <h3 className="mt-6">
                    {service.title}
                  </h3>

                  <p className="text-sm">
                    {service.description}
                  </p>

                  <div
                    className="mt-6 h-px rounded-full bg-gradient-to-r from-blue-500/50 to-transparent"
                    aria-hidden="true"
                  />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}