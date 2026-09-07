import {
  CodeXml,
  Puzzle,
  Database,
  Cable,
  GitBranch,
  PanelsTopLeft,
} from "lucide-react";

const possibilites = [
  {
    label: "Projet complet",
    title: "Créer un projet vraiment adapté",
    description:
      "Parfois, un thème ou une solution déjà toute faite ne suffit pas. Dans ce cas, le projet peut être construit sur mesure pour correspondre réellement à ce dont vous avez besoin.",
    icon: CodeXml,
    exemples: [
      {
        title: "Une structure pensée pour votre projet",
        icon: PanelsTopLeft,
      },
      {
        title: "Des données à gérer",
        icon: Database,
      },
      {
        title: "Des services à connecter",
        icon: Cable,
      },
    ],
  },
  {
    label: "Fonctionnalité",
    title: "Ajouter un fonctionnement particulier",
    description:
      "Vous pouvez aussi avoir besoin d’une seule fonctionnalité qui n’existe pas déjà ou qui ne fonctionne pas comme vous le souhaitez. Elle peut alors être développée spécialement pour votre projet.",
    icon: Puzzle,
    exemples: [
      {
        title: "Une logique propre à votre besoin",
        icon: GitBranch,
      },
      {
        title: "Des informations à enregistrer ou modifier",
        icon: Database,
      },
      {
        title: "Une API ou un service externe",
        icon: Cable,
      },
    ],
  },
];

export default function PossibilitesDeveloppement() {
  return (
    <section
      id="possibilites"
      className="section-light section-fade-light-soft section-spacing"
    >
      <div className="site-container">

        {/* Introduction */}

        <div className="section-intro max-w-3xl">
          <p className="section-label">
            Les possibilités
          </p>

          <h2>
            Quand le{" "}
            <span className="text-gradient-blue">
              sur-mesure
            </span>{" "}
            devient utile
          </h2>

          <p>
            Le sur-mesure devient intéressant lorsqu’un projet a besoin de
            quelque chose de plus spécifique qu’une solution déjà existante.
            Cela peut concerner tout un site comme une seule fonctionnalité.
          </p>
        </div>

        {/* Possibilités */}

        <div
          className="
            mt-10
            grid
            gap-8
            lg:grid-cols-2
            lg:gap-0
          "
        >
          {possibilites.map(
            ({ label, title, description, icon: Icon, exemples }, index) => (
              <article
                key={title}
                className={`
                  group
                  min-w-0
                  ${
                    index === 0
                      ? "lg:border-r lg:border-sky-500/20 lg:pr-10"
                      : "lg:pl-10"
                  }
                `}
              >
                {/* Icône + label */}

                <div className="flex items-center gap-3">
                  <Icon
                    className="
                      h-8
                      w-8
                      shrink-0
                      text-sky-500
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

                <h3 className="mt-4 text-slate-950">
                  {title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {description}
                </p>

                {/* Exemples */}

                <div className="mt-6 grid gap-3">
                  {exemples.map(({ title: exempleTitle, icon: ExempleIcon }) => (
                    <div
                      key={exempleTitle}
                      className="flex items-center gap-3"
                    >
                      <ExempleIcon
                        className="h-5 w-5 shrink-0 text-blue-500"
                        aria-hidden="true"
                      />

                      <span className="font-semibold text-slate-700">
                        {exempleTitle}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            ),
          )}
        </div>

        {/* Précision */}

        <div className="mx-auto mt-12 max-w-3xl border-l-2 border-blue-500 pl-5">
          <p className="!m-0">
            <strong>
              Le sur-mesure n’est pas toujours nécessaire.
            </strong>{" "}
            Si une solution existante fait déjà correctement le travail,
            autant l’utiliser plutôt que de tout redévelopper pour rien.
          </p>
        </div>

      </div>
    </section>
  );
}