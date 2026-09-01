import {
  ArrowDown,
  ArrowRight,
  Search,
  ScanSearch,
  Crosshair,
} from "lucide-react";

const etapes = [
  {
    title: "Constater",
    description:
      "Reproduire ou observer le problème afin de comprendre dans quelles conditions il apparaît.",
    icon: Search,
  },
  {
    title: "Examiner",
    description:
      "Vérifier les éléments concernés et rechercher ce qui peut expliquer le comportement constaté.",
    icon: ScanSearch,
  },
  {
    title: "Identifier",
    description:
      "Déterminer l’origine trouvée ou les pistes techniques permettant de définir la suite de l’intervention.",
    icon: Crosshair,
  },
];

export default function ParcoursDiagnostic() {
  return (
    <section className="section-dark section-spacing">
      <div className="site-container">
        <div className="section-intro">
          <p className="section-label">L’analyse</p>
          <h2>Du symptôme à son origine</h2>

          <p>
            Le diagnostic commence par ce que vous constatez, puis remonte
            progressivement vers les éléments susceptibles d’en être la
            cause.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-5 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {etapes.map(({ title, description, icon: Icon }, index) => (
            <div key={title} className="contents">
              <article className="card-dark h-full">
                <Icon
                  className="h-8 w-8 text-blue-400"
                  aria-hidden="true"
                />

                <p className="section-label mt-5">
                  {title.toUpperCase()}
                </p>

                <h3 className="mt-2">{title}</h3>
                <p className="mt-3">{description}</p>
              </article>

              {index < etapes.length - 1 && (
                <>
                  <ArrowRight
                    className="hidden h-7 w-7 text-blue-400 lg:block"
                    aria-hidden="true"
                  />

                  <ArrowDown
                    className="mx-auto h-7 w-7 text-blue-400 lg:hidden"
                    aria-hidden="true"
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}