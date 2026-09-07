import {
  Code2,
  Globe2,
  MonitorSmartphone,
  Puzzle,
  Server,
  Settings,
} from "lucide-react";

const elements = [
  {
    title: "Le fonctionnement du site",
    description:
      "Le comportement des pages, composants ou fonctionnalités concernés par le problème.",
    icon: Globe2,
  },
  {
    title: "La configuration",
    description:
      "Les réglages pouvant avoir une incidence sur le fonctionnement observé.",
    icon: Settings,
  },
  {
    title: "L’environnement technique",
    description:
      "L’hébergement et les éléments techniques accessibles qui peuvent intervenir dans la situation.",
    icon: Server,
  },
  {
    title: "Le code",
    description:
      "Les éléments du code concernés lorsqu’une analyse à ce niveau est nécessaire et possible.",
    icon: Code2,
  },
  {
    title: "Les extensions ou dépendances",
    description:
      "Les outils ajoutés au projet et leurs interactions lorsque la technologie utilisée en comporte.",
    icon: Puzzle,
  },
  {
    title: "L’affichage selon les appareils",
    description:
      "Le comportement du site sur différents écrans ou navigateurs lorsque le problème dépend de son environnement d’affichage.",
    icon: MonitorSmartphone,
  },
];

export default function ElementsDiagnostic() {
  return (
    <section className="section-light section-spacing">
      <div className="site-container">
        <div className="section-intro">
          <p className="section-label">Investigation</p>
          <h2>Ce qui peut être examiné</h2>

          <p>
            Les vérifications dépendent du problème rencontré et de
            l’environnement technique du site.
          </p>
        </div>

        <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {elements.map(({ title, description, icon: Icon }) => (
            <article key={title} className="flex gap-4">
              <Icon
                className="mt-1 h-7 w-7 shrink-0 text-blue-500"
                aria-hidden="true"
              />

              <div>
                <h3>{title}</h3>
                <p className="mt-2">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}