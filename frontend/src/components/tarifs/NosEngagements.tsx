import {
  BadgeCheck,
  Eye,
  Handshake,
} from "lucide-react";

const engagements = [
  {
    icon: BadgeCheck,
    title: "Un devis détaillé",
    description:
      "Chaque prestation est décrite avant le début du projet afin que vous sachiez précisément ce qui est prévu.",
  },
  {
    icon: Eye,
    title: "Des tarifs annoncés",
    description:
      "Les coûts sont expliqués clairement, sans ajout imprévu en cours de projet sans votre accord.",
  },
  {
    icon: Handshake,
    title: "Une solution adaptée",
    description:
      "Le devis est construit selon votre besoin réel, votre projet et les prestations nécessaires.",
  },
];

export default function NosEngagements() {
  return (
    <section
      className="
        section-light
        section-fade-hero
        section-spacing
      "
    >
      <div className="site-container">

        {/* Introduction */}
        <div className="section-intro max-w-3xl">
          <p className="section-label">
            Mes engagements
          </p>

          <h2>
            Des tarifs expliqués{" "}
            <span className="text-gradient-blue">
              clairement
            </span>
          </h2>

          <p className="max-w-2xl text-slate-600">
            Avant le début d’une prestation, vous savez ce qui est inclus,
            combien cela coûte et dans quelles conditions le projet sera réalisé.
          </p>
        </div>

        {/* Engagements */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-4

            sm:grid-cols-3
          "
        >
          {engagements.map((engagement) => {
            const Icon = engagement.icon;

            return (
              <article
                key={engagement.title}
                className="
                  group
                  min-w-0
                  border-b
                  border-sky-500/20
                  pb-5

                  sm:border-b-0
                  sm:border-r
                  sm:pr-5

                  sm:last:border-r-0
                  sm:last:pr-0
                "
              >
                {/* Icône + titre */}
                <div className="flex items-center gap-3">
                  <Icon
                    className="
                      h-7
                      w-7
                      shrink-0
                      text-sky-500
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                    aria-hidden="true"
                  />

                  <h3 className="text-slate-950">
                    {engagement.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mt-3 text-slate-600">
                  {engagement.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}