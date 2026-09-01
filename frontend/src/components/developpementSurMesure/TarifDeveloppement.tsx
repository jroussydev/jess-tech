import {
  Blocks,
  PanelsTopLeft,
  Database,
  Binary,
} from "lucide-react";

const criteres = [
  {
    title: "Fonctionnalités",
    description:
      "Ce que le projet doit permettre de faire.",
    icon: Blocks,
  },
  {
    title: "Interfaces",
    description:
      "Le nombre d’écrans, de pages ou d’espaces à construire.",
    icon: PanelsTopLeft,
  },
  {
    title: "Données et connexions",
    description:
      "Les informations à gérer et les éventuels services avec lesquels le projet doit communiquer.",
    icon: Database,
  },
  {
    title: "Complexité technique",
    description:
      "Les règles de fonctionnement, interactions et contraintes propres au projet.",
    icon: Binary,
  },
];

export default function TarifDeveloppement() {
  return (
    <section className="section-dark section-spacing">
      <div className="site-container">
        <div className="section-intro">
          <p className="section-label">
            Tarification
          </p>

          <h2>
            Le tarif dépend de ce qu’il faut développer.
          </h2>

          <p>
            Un site complet et l’ajout d’une fonctionnalité spécifique ne
            représentent pas le même travail. Le projet est donc étudié
            avant d’en définir le périmètre et le tarif.
          </p>
        </div>

        {/* Remplacer par AnimatedCardBorder si souhaité */}
        <div className="card-dark card-glow mt-12">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:items-center">
            <div>
              <span className="badge badge-primary">
                Sur mesure
              </span>

              <p className="mt-5 text-3xl font-bold text-white sm:text-4xl">
                SUR DEVIS
              </p>

              <p className="mt-4">
                Le périmètre est défini après étude du projet.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {criteres.map(({ title, description, icon: Icon }) => (
                <div key={title}>
                  <Icon
                    className="h-7 w-7 text-blue-400"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4">
                    {title}
                  </h3>

                  <p className="mt-2">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}