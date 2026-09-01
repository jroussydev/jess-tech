import {
  FileSearch,
  ListChecks,
  Route,
} from "lucide-react";

const resultats = [
  {
    title: "La situation constatée",
    description:
      "Un retour sur le problème observé et les éléments examinés pendant l’analyse.",
    icon: FileSearch,
  },
  {
    title: "Les points identifiés",
    description:
      "Les éléments relevés au cours du diagnostic qui permettent de mieux comprendre la situation.",
    icon: ListChecks,
  },
  {
    title: "Les suites envisageables",
    description:
      "Les interventions qui peuvent être envisagées selon ce qui a été identifié.",
    icon: Route,
  },
];

export default function ResultatDiagnostic() {
  return (
    <section className="section-light section-spacing">
      <div className="site-container">
        <div className="section-intro">
          <p className="section-label">Après l’analyse</p>
          <h2>Ce que le diagnostic permet d’obtenir</h2>

          <p>
            L’objectif est de disposer de suffisamment d’informations pour
            comprendre la situation et décider de la suite à donner.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {resultats.map(({ title, description, icon: Icon }) => (
            <article key={title} className="card-light">
              <Icon
                className="h-8 w-8 text-blue-500"
                aria-hidden="true"
              />

              <h3 className="mt-5">{title}</h3>
              <p className="mt-3">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}