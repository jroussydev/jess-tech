import {
  Code2,
  MessageCircle,
  Rocket,
  SearchCheck,
} from "lucide-react";

const workflowItems = [
  {
    number: "01",
    icon: MessageCircle,
    title: "✓ Échanger",
    text: "Nous faisons le point sur votre activité, vos besoins, vos objectifs et les personnes auxquelles votre projet s’adresse.",
  },
  {
    number: "02",
    icon: SearchCheck,
    title: "✓ Définir",
    text: "Je vous aide à organiser les informations et à identifier la solution la plus adaptée, sans ajouter de complexité inutile.",
  },
  {
    number: "03",
    icon: Code2,
    title: "✓ Construire",
    text: "Je développe votre projet étape par étape en vous tenant informé de son évolution et des choix réalisés.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "✓ Accompagner",
    text: "Après la mise en ligne, je reste disponible pour répondre à vos questions, effectuer des ajustements ou faire évoluer le projet.",
  },
];

const AboutWorkflow = () => {
  return (
    <section className="section-light section-spacing">
  <div className="site-container">
    <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      {/* Introduction */}
      <div className="section-intro">
        <p className="section-label">Ma façon de travailler</p>

        <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
  Un accompagnement clair, étape par étape
</h2>

<p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg text-justify">
  Vous restez informé tout au long du projet. Chaque étape est expliquée
  simplement afin que vous sachiez où nous en sommes, ce qui est en cours
  et pourquoi certains choix sont réalisés.
</p>

<p className="mt-4 max-w-xl text-base leading-8 text-slate-600 sm:text-lg text-justify">
  Les échanges et les validations régulières permettent d’avancer dans la
  bonne direction, d’éviter les mauvaises surprises et d’ajuster le projet
  lorsque cela est nécessaire. Vous gardez ainsi une vision claire de son
  évolution, de la première discussion jusqu’à sa mise en ligne.
</p>
      </div>

      {/* Étapes */}
      <div className="flex flex-col gap-4">
        {workflowItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="mt-3 group flex items-start gap-8 text-justify rounded-2xl  transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-slate-950">
                    {item.title}
                  </h3>

                  <span className="text-sm font-bold text-blue-200">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-2 leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </div>
</section>
  );
};

export default AboutWorkflow;