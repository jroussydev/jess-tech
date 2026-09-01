import {
  Lightbulb,
  Network,
  Braces,
  Code2,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

const etapes = [
  {
    numero: "01",
    titre: "Le besoin",
    description:
      "On part de ce que vous souhaitez obtenir : ce que le site ou la fonctionnalité doit permettre de faire, pour qui et dans quelle situation.",
    icon: Lightbulb,
  },
  {
    numero: "02",
    titre: "Le fonctionnement",
    description:
      "Le besoin est découpé en fonctionnalités et en interactions afin de déterminer comment les différentes parties du projet doivent fonctionner ensemble.",
    icon: Network,
  },
  {
    numero: "03",
    titre: "Les choix techniques",
    description:
      "Les technologies et l’organisation technique sont choisies en fonction du projet, de ses contraintes et des évolutions envisagées.",
    icon: Braces,
  },
  {
    numero: "04",
    titre: "Le développement",
    description:
      "Le projet est ensuite construit, testé et ajusté jusqu’à obtenir le fonctionnement prévu.",
    icon: Code2,
  },
];

export default function FonctionnementDeveloppement() {
  return (
    <section className="section-dark section-spacing">
      <div className="site-container">
        <div className="section-intro">
          <p className="section-label">
            Du besoin au code
          </p>

          <h2>
            De votre besoin au fonctionnement
          </h2>

          <p>
            On commence par ce que vous voulez pouvoir faire. Les choix
            techniques viennent ensuite.
          </p>
        </div>

        <div className="mt-14">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-center">
            {etapes.map((etape, index) => {
              const Icon = etape.icon;

              return (
                <div
                  key={etape.numero}
                  className="contents"
                >
                  <article className="min-w-0">
                    <div className="flex items-center justify-between gap-4">
                      <Icon
                        className="h-8 w-8 text-blue-400"
                        aria-hidden="true"
                      />

                      <span className="text-sm font-bold text-blue-400">
                        {etape.numero}
                      </span>
                    </div>

                    <h3 className="mt-5">
                      {etape.titre}
                    </h3>

                    <p className="mt-3">
                      {etape.description}
                    </p>
                  </article>

                  {index < etapes.length - 1 && (
                    <>
                      <ArrowDown
                        className="mx-auto h-7 w-7 text-blue-400 lg:hidden"
                        aria-hidden="true"
                      />

                      <ArrowRight
                        className="hidden h-7 w-7 text-blue-400 lg:block"
                        aria-hidden="true"
                      />
                    </>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 border-t border-white/10 pt-8">
            <p className="max-w-4xl">
              React, API, base de données ou autre technologie ne sont pas
              un point de départ imposé : ce sont des outils choisis
              lorsqu’ils correspondent au projet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}