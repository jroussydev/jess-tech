import {
  ArrowDown,
  ArrowRight,
  RefreshCw,
  SearchCheck,
  Wrench,
} from "lucide-react";

const cycle = [
  {
    title: "Vérifier",
    description:
      "Contrôler les éléments prévus dans la formule de maintenance.",
    icon: SearchCheck,
  },
  {
    title: "Entretenir",
    description:
      "Réaliser les mises à jour, sauvegardes et opérations prévues.",
    icon: RefreshCw,
  },
  {
    title: "Intervenir",
    description:
      "Prendre en charge les corrections ou besoins couverts lorsqu’une intervention devient nécessaire.",
    icon: Wrench,
  },
];

export default function CycleMaintenance() {
  return (
    <section className="section-light section-spacing">
      <div className="site-container">
        <div className="section-intro">
          <p className="section-label">Dans la durée</p>
          <h2>Une fois la maintenance en place</h2>

          <p>
            Le suivi ne correspond pas à une intervention unique. Il accompagne
            le site au fil de son utilisation et des opérations prévues.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid items-center gap-5 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {cycle.map(({ title, description, icon: Icon }, index) => (
              <div key={title} className="contents">
                <article className="card-light h-full">
                  <Icon
                    className="h-8 w-8 text-blue-500"
                    aria-hidden="true"
                  />

                  <h3 className="mt-5">{title}</h3>
                  <p className="mt-3">{description}</p>
                </article>

                {index < cycle.length - 1 && (
                  <>
                    <ArrowRight
                      className="hidden h-7 w-7 text-blue-500 lg:block"
                      aria-hidden="true"
                    />

                    <ArrowDown
                      className="mx-auto h-7 w-7 text-blue-500 lg:hidden"
                      aria-hidden="true"
                    />
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <RefreshCw
              className="h-5 w-5 text-blue-500"
              aria-hidden="true"
            />

            <p className="font-semibold">
              Puis le suivi continue selon la formule prévue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}