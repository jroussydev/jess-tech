import {
  GitBranch,
  Database,
  Cable,
  PanelsTopLeft,
} from "lucide-react";

const situations = [
  {
    title: "Un fonctionnement particulier",
    description:
      "Votre projet doit réaliser une action ou suivre une logique qui lui est propre.",
    icon: GitBranch,
  },
  {
    title: "Des données à gérer",
    description:
      "Des informations doivent être enregistrées, affichées, modifiées ou utilisées selon certaines règles.",
    icon: Database,
  },
  {
    title: "Plusieurs éléments doivent communiquer",
    description:
      "Le projet doit échanger des informations avec une API, un service externe ou différentes parties de l’application.",
    icon: Cable,
  },
  {
    title: "Un projet web construit spécifiquement",
    description:
      "Vous souhaitez développer un site ou une application web dont la structure et le fonctionnement nécessitent une conception dédiée.",
    icon: PanelsTopLeft,
  },
];

export default function QuandSurMesure() {
  return (
    <section className="section-light section-spacing">
      <div className="site-container">
        <div className="section-intro">
          <p className="section-label">
            Selon le projet
          </p>

          <h2>
            Quand le développement sur mesure entre-t-il en jeu ?
          </h2>

          <p>
            Tous les projets n’ont pas besoin de développement spécifique.
            Il devient intéressant lorsqu’un fonctionnement particulier doit
            être créé ou lorsqu’un projet nécessite davantage de liberté
            dans sa construction.
          </p>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {situations.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="border-t border-slate-200 pt-6"
            >
              <Icon
                className="h-7 w-7 text-blue-500"
                aria-hidden="true"
              />

              <h3 className="mt-4">
                {title}
              </h3>

              <p className="mt-2">
                {description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-blue-500/20 p-6 sm:p-8">
          <p>
            <strong>
              Le sur-mesure n’est pas systématiquement la meilleure
              solution.
            </strong>{" "}
            Si un outil existant répond correctement au besoin, il n’y a pas
            d’intérêt à redévelopper la même chose.
          </p>
        </div>
      </div>
    </section>
  );
}