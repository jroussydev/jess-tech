import {
  FileSearch,
  ListChecks,
  Route,
} from "lucide-react";

const resultats = [
  {
    label: "Constat",
    title: "Ce qui a été relevé",
    description:
      "Vous avez un retour sur le problème observé et sur les éléments qui ont été vérifiés pendant l’analyse.",
    icon: FileSearch,
  },
  {
    label: "Compréhension",
    title: "Ce qui peut expliquer le problème",
    description:
      "Les éléments identifiés permettent de mieux comprendre l’origine du dysfonctionnement ou les pistes les plus probables.",
    icon: ListChecks,
  },
  {
    label: "Suite",
    title: "Ce qu’il est possible de faire",
    description:
      "Vous savez quelles interventions peuvent être envisagées et si une correction peut être réalisée ensuite.",
    icon: Route,
  },
];

export default function ResultatDiagnostic() {
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
            Après l’analyse
          </p>

          <h2>
            À la fin, vous savez{" "}
            <span className="text-gradient-blue">
              où vous en êtes
            </span>
          </h2>

          <p>
            Le but du diagnostic est surtout de vous donner une vision plus
            claire du problème et de ce qu’il est possible de faire ensuite.
          </p>
        </div>

        {/* Résultats */}

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">
          {resultats.map(
            ({ label, title, description, icon: Icon }, index) => (
              <article
                key={title}
                className={`
                  group
                  min-w-0
                  border-b
                  border-blue-500/20
                  pb-6

                  md:border-b-0
                  md:px-8

                  ${index === 0 ? "md:pl-0" : ""}
                  ${
                    index < resultats.length - 1
                      ? "md:border-r"
                      : "md:pr-0"
                  }
                `}
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

                <h3 className="mt-4 text-white">
                  {title}
                </h3>

                <p className="!mt-3 text-slate-300">
                  {description}
                </p>
              </article>
            ),
          )}
        </div>

        {/* Précision */}

        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="!m-0 text-slate-300">
            <strong className="text-white">
              Le diagnostic ne vous oblige pas à faire réaliser la correction.
            </strong>
            <br />
            Il vous permet d’abord de comprendre la situation avant de décider
            de la suite.
          </p>
        </div>

      </div>
    </section>
  );
}