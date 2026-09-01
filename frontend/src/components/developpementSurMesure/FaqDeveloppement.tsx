import { useState } from "react";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: "Qu’est-ce qu’un développement sur mesure ?",
    answer:
      "Il s’agit d’un site, d’une fonctionnalité ou d’un outil web développé pour répondre à un fonctionnement particulier. Le périmètre et les choix techniques sont définis en fonction du projet.",
  },
  {
    question: "Pouvez-vous développer un site complet sur mesure ?",
    answer:
      "Oui. Le développement sur mesure peut concerner l’ensemble d’un site et pas uniquement l’ajout d’une fonctionnalité. Selon le projet, il peut notamment être développé avec React.",
  },
  {
    question: "Est-ce que tous les projets sur mesure sont développés avec React ?",
    answer:
      "Non. React est l’une des technologies qui peuvent être utilisées, mais elle n’est pas imposée. Les choix techniques dépendent du fonctionnement attendu et des contraintes du projet.",
  },
  {
    question:
      "Peut-on ajouter une fonctionnalité sur mesure à un projet existant ?",
    answer:
      "Oui, lorsque la structure et les technologies du projet existant permettent de l’intégrer dans de bonnes conditions. Un examen de l’existant peut être nécessaire avant de confirmer la faisabilité.",
  },
  {
    question:
      "Dois-je savoir précisément comment ma fonctionnalité doit fonctionner avant de vous contacter ?",
    answer:
      "Non. Vous pouvez commencer par expliquer ce que vous souhaitez obtenir et la manière dont vous imaginez son utilisation. Le cadrage permet ensuite de préciser les fonctionnalités, les règles de fonctionnement et les contraintes à prendre en compte.",
  },
  {
    question:
      "Combien de temps faut-il pour réaliser un développement sur mesure ?",
    answer:
      "Cela dépend de son périmètre et de sa complexité. Le délai peut être estimé une fois les fonctionnalités et le fonctionnement suffisamment définis.",
  },
  {
    question:
      "Est-il possible de faire évoluer le projet après sa livraison ?",
    answer:
      "Oui. De nouvelles fonctionnalités ou des modifications peuvent être développées par la suite. Lorsqu’elles ne faisaient pas partie du périmètre initial, elles constituent une nouvelle demande et sont étudiées séparément.",
  },
  {
    question: "Combien coûte un développement sur mesure ?",
    answer:
      "Le développement sur mesure est réalisé sur devis. Le tarif dépend notamment des fonctionnalités à développer, des interfaces nécessaires, des données ou services à connecter et de la complexité du fonctionnement.",
  },
];

export default function FaqDeveloppement() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-light section-spacing">
      <div className="site-container">
        <div className="section-intro">
          <p className="section-label">
            Questions fréquentes
          </p>

          <h2>
            Développement sur mesure : vos questions
          </h2>
        </div>

        <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
          {questions.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;

            return (
              <article key={question}>
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold">
                    {question}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div className="pb-6 pr-10">
                    <p>{answer}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}