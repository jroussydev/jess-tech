import {
  Target,
  Users,
  ListChecks,
  Boxes,
} from "lucide-react";

const elements = [
  {
    numero: "01",
    title: "Ce que vous voulez obtenir",
    description:
      "Expliquez simplement ce que le site, l’outil ou la fonctionnalité doit permettre de faire. Vous n’avez pas besoin de connaître la solution technique.",
    icon: Target,
  },
  {
    numero: "02",
    title: "Qui va l’utiliser",
    description:
      "Visiteurs, clients, membres, équipe interne… Les utilisateurs concernés permettent de mieux comprendre les parcours et les accès à prévoir.",
    icon: Users,
  },
  {
    numero: "03",
    title: "Les règles importantes",
    description:
      "Si certaines actions dépendent de conditions particulières, de calculs, de statuts ou d’étapes précises, elles devront être prises en compte dans le fonctionnement.",
    icon: ListChecks,
  },
  {
    numero: "04",
    title: "Ce qui existe déjà",
    description:
      "Si le développement doit s’intégrer à un site, un service ou des données existantes, les informations et accès nécessaires seront identifiés avant l’intervention.",
    icon: Boxes,
  },
];

export default function PreparationDeveloppement() {
  return (
    <section className="section-light section-spacing">
      <div className="site-container">
        <div className="section-intro">
          <p className="section-label">
            Avant de développer
          </p>

          <h2>
            Quelques informations suffisent pour commencer.
          </h2>

          <p>
            Un projet sur mesure n’a pas besoin d’être entièrement défini
            avant le premier échange. Quelques éléments permettent déjà de
            comprendre ce qu’il faudra construire.
          </p>
        </div>

        <div className="mt-12 border-y border-slate-200">
          {elements.map(({ numero, title, description, icon: Icon }) => (
            <article
              key={numero}
              className="grid gap-4 border-b border-slate-200 py-7 last:border-b-0 sm:grid-cols-[60px_1fr] lg:grid-cols-[60px_260px_1fr] lg:items-start"
            >
              <span className="text-sm font-bold text-blue-500">
                {numero}
              </span>

              <div className="flex items-start gap-3">
                <Icon
                  className="mt-1 h-6 w-6 shrink-0 text-blue-500"
                  aria-hidden="true"
                />

                <h3>
                  {title}
                </h3>
              </div>

              <p className="sm:col-start-2 lg:col-start-3">
                {description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-4xl">
          Une idée encore imparfaite suffit pour commencer à en discuter.
          Le cadrage sert justement à transformer le besoin en
          fonctionnalités suffisamment précises pour pouvoir les développer.
        </p>
      </div>
    </section>
  );
}