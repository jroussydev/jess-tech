import {
  Blocks,
  PanelsTopLeft,
  Database,
  Binary,
} from "lucide-react";

const criteres = [
  {
    label: "Fonctionnalités",
    title: "Ce que le projet doit faire",
    description:
      "Plus il y a de fonctionnalités ou de règles particulières à prévoir, plus le temps de développement peut évoluer.",
    icon: Blocks,
  },
  {
    label: "Interfaces",
    title: "Ce qu’il faut construire",
    description:
      "Le nombre de pages, d’écrans ou d’espaces différents à créer entre directement dans le volume de travail.",
    icon: PanelsTopLeft,
  },
  {
    label: "Données",
    title: "Ce qu’il faut gérer ou connecter",
    description:
      "Enregistrer des informations, les modifier ou communiquer avec un service extérieur peut demander un travail supplémentaire.",
    icon: Database,
  },
  {
    label: "Complexité",
    title: "Les règles propres au projet",
    description:
      "Certaines interactions, conditions ou automatisations demandent davantage de développement et de tests.",
    icon: Binary,
  },
];

export default function TarifDeveloppement() {
  return (
    <section
      className="
        section-dark
        section-fade-dark-soft
        section-spacing
      "
    >
      <div className="site-container">

        {/* Introduction */}

        <div className="section-intro max-w-3xl">
          <p className="section-label">
            Le tarif
          </p>

          <h2>
            Le prix dépend de ce qu’il faut{" "}
            <span className="text-gradient-blue">
              réellement développer
            </span>
          </h2>

          <p>
            Deux projets sur mesure peuvent être très différents.
            Le tarif est donc défini une fois le besoin suffisamment clair
            pour estimer le travail à réaliser.
          </p>
        </div>

        {/* Contenu */}

        <div
          className="
            mt-10
            grid
            gap-10
            lg:grid-cols-[300px_1fr]
            lg:items-start
            lg:gap-14
          "
        >
          {/* Prix */}

          <div className="card-dark card-glow !p-6">
            <span className="badge badge-primary">
              Développement sur mesure
            </span>

            <p className="!mt-5 text-3xl font-bold !text-white sm:text-4xl">
              Sur devis
            </p>

            <p className="!mt-4 text-slate-300">
              Le périmètre et le tarif sont définis après avoir compris
              précisément ce que le projet doit permettre de faire.
            </p>
          </div>

          {/* Critères */}

          <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {criteres.map(({ label, title, description, icon: Icon }) => (
              <article
                key={title}
                className="
                  group
                  border-b
                  border-blue-500/20
                  pb-6
                "
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className="
                      h-7
                      w-7
                      shrink-0
                      text-blue-400
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                    aria-hidden="true"
                  />

                  <p className="section-label !m-0">
                    {label}
                  </p>
                </div>

                <h3 className="mt-3 text-white">
                  {title}
                </h3>

                <p className="!mt-3 text-slate-300">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}