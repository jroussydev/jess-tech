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
    title: "Échanger",
    text: "Nous faisons le point sur votre activité, vos besoins, vos objectifs et les personnes auxquelles votre projet s’adresse.",
  },
  {
    number: "02",
    icon: SearchCheck,
    title: "Définir",
    text: "Je vous aide à organiser les informations et à identifier la solution la plus adaptée, sans ajouter de complexité inutile.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Construire",
    text: "Je développe votre projet étape par étape en vous tenant informé de son évolution et des choix réalisés.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Accompagner",
    text: "Après la mise en ligne, je reste disponible pour répondre à vos questions, effectuer des ajustements ou faire évoluer le projet.",
  },
];

const AboutWorkflow = () => {
  return (
    <section
      className="
        section-light
        section-fade-light-soft
        section-spacing
      "
    >
      <div className="site-container">
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* Introduction */}
          <div className="section-intro">
            <p className="section-label">
              Ma façon de travailler
            </p>

            <h2>
              Un accompagnement{" "}
              <span className="text-gradient-blue">
                clair
              </span>
              , étape par étape
            </h2>

            <p className="max-w-xl md:text-justify">
              Vous restez informé tout au long du projet. Chaque étape est
              expliquée simplement afin que vous sachiez où nous en sommes, ce
              qui est en cours et pourquoi certains choix sont réalisés.
            </p>

            <p className="max-w-xl md:text-justify">
              Les échanges et les validations régulières permettent d’avancer
              dans la bonne direction, d’éviter les mauvaises surprises et
              d’ajuster le projet lorsque cela est nécessaire. Vous gardez ainsi
              une vision claire de son évolution, de la première discussion
              jusqu’à sa mise en ligne.
            </p>
          </div>

          {/* Étapes */}
          <div className="flex flex-col gap-7">
            {workflowItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    border-b
                    border-sky-500/20
                    pb-6
                    last:border-b-0
                    last:pb-0
                  "
                >
                  {/* Icône + titre + numéro */}
                  <div className="flex items-center gap-3">
                    <Icon
                      className="
                        h-7
                        w-7
                        shrink-0
                        text-sky-500
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                      aria-hidden="true"
                    />

                    <h3 className="text-slate-950">
                      {item.title}
                    </h3>

                    
                  </div>

                  {/* Description */}
                  <p className="mt-2 max-w-2xl text-slate-600 md:text-justify">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutWorkflow;