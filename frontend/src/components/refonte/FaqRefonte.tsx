import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "Est-ce qu’il faut forcément refaire tout mon site ?",
    answer:
      "Non. Une refonte peut concerner certaines parties seulement. L’objectif est d’identifier ce qui peut être conservé, ce qui doit être retravaillé et ce qu’il vaut mieux remplacer.",
  },
  {
    question: "Peut-on refaire seulement certaines pages ?",
    answer:
      "Oui, lorsque le reste du site peut être conservé sans créer d’incohérence avec les parties retravaillées. Le périmètre est défini après examen de l’existant.",
  },
  {
    question:
      "Peut-on conserver mes textes, mes photos et certains éléments du design ?",
    answer:
      "Oui. Les éléments qui correspondent toujours à votre activité et qui restent exploitables peuvent être réutilisés. Une refonte ne signifie pas que tout doit être remplacé.",
  },
  {
    question:
      "Puis-je profiter de la refonte pour ajouter de nouvelles pages ou fonctionnalités ?",
    answer:
      "Oui. Si votre activité ou vos besoins ont évolué, de nouveaux contenus, pages ou fonctionnalités peuvent être intégrés au projet. Ils sont pris en compte dans le périmètre et le devis de la refonte.",
  },
  {
    question:
      "Peut-on refaire un site même s’il a été créé par quelqu’un d’autre ?",
    answer:
      "Oui. Le fait que votre site ait été réalisé par un autre prestataire n’empêche pas d’envisager une refonte. Il faut d’abord examiner sa structure, les technologies utilisées et les accès disponibles pour déterminer ce qui peut être repris.",
  },
  {
    question: "Mon site restera-t-il accessible pendant les travaux ?",
    answer:
      "Cela dépend du site existant et de la manière dont la refonte doit être réalisée. Les conditions d’intervention sont définies avant le démarrage afin de prévoir la méthode la plus adaptée à la situation.",
  },
  {
    question:
      "Une sauvegarde de mon ancien site est-elle réalisée avant la refonte ?",
    answer:
      "Une sauvegarde peut être nécessaire avant une intervention importante. Elle est définie selon la situation et peut faire l’objet d’une prestation complémentaire.",
  },
  {
    question: "Combien coûte une refonte de site ?",
    answer:
      "Une refonte est réalisée sur devis. Le tarif dépend de l’état du site existant, des éléments qui peuvent être conservés et de l’ampleur des changements à réaliser.",
  },
];

export default function FaqRefonte() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-light section-spacing">
      <div className="site-container">
        {/* Introduction */}
        <div className="section-intro">
          <p className="section-label">
            Questions fréquentes
          </p>

          <h2>
            Avant de refaire votre site
          </h2>

          <p>
            Quelques réponses aux questions qui peuvent se poser avant
            d’intervenir sur un site existant.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-12 max-w-4xl">
          {faqItems.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={question}
                className="
                  border-b
                  border-slate-200
                  first:border-t
                "
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-6
                    py-6
                    text-left
                  "
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900">
                    {question}
                  </span>

                  <ChevronDown
                    className={`
                      h-5
                      w-5
                      shrink-0
                      text-blue-500
                      transition-transform
                      duration-300
                      ${isOpen ? "rotate-180" : ""}
                    `}
                    aria-hidden="true"
                  />
                </button>

                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? "grid-rows-[1fr] pb-6"
                        : "grid-rows-[0fr]"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p className="!mt-0 max-w-3xl">
                      {answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}