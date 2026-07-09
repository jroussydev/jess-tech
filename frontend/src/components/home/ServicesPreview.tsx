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
    <section className="bg-slate-50 py-16 md:py-20 lg:py-24 rounded-2xl">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-500">
              Services
            </p>

            <h2 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
              Comment je peux vous aider
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
              Des services clairs pour vous accompagner à chaque étape de votre projet.
              Chaque service est pensé pour rester compréhensible, utile et maintenable
              dans le temps.
            </p>

            <Link
              to="/services"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#0D5BFF] px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Voir tous les services →
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group min-h-[230px] rounded-2xl border border-blue-500/15 bg-gradient-to-br from-[#081120] to-[#0b1d35] p-6 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400/50"
                >
                  <Icon className="h-7 w-7 text-blue-600 " />

                  <h3 className="mt-6 text-xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {service.description}
                  </p>

                  <div className="mt-6 h-px bg-gradient-to-r from-blue-500/50 to-transparent" />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}