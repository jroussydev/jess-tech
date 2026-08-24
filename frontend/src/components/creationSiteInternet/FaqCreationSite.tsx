import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "Je ne sais pas quelle formule choisir, comment faire ?",
    answer:
      "Pas besoin de choisir seul. À partir de ce que vous souhaitez présenter, du nombre de pages et des fonctionnalités nécessaires, nous pouvons déterminer ensemble la formule qui correspond à votre projet.",
  },
  {
    question: "Dois-je fournir tous les textes et les photos ?",
    answer:
      "Les contenus sont principalement fournis par vos soins. Les petites corrections de présentation, d’orthographe ou de fluidité peuvent être réalisées lors de leur intégration. Si un travail plus important est nécessaire, nous en discutons avant de l’ajouter à la prestation.",
  },
  {
    question:
      "Je n’ai pas encore de nom de domaine ni d’hébergement, est-ce un problème ?",
    answer:
      "Non. Je peux vous accompagner dans le choix et la mise en place des services nécessaires. Les abonnements et services souscrits restent ensuite à votre charge.",
  },
  {
    question: "Est-ce que je pourrai modifier mon site moi-même ?",
    answer:
      "Pour un site WordPress, les éléments accessibles depuis l’administration peuvent être gérés après la livraison. Une prise en main est prévue dans les formules pour vous présenter son fonctionnement.",
  },
  {
    question: "Et si je veux ajouter des pages plus tard ?",
    answer:
      "Oui. Votre site peut continuer à évoluer après sa création. De nouvelles pages ou fonctionnalités peuvent être ajoutées dans le cadre d’une nouvelle intervention.",
  },
  {
    question:
      "Que se passe-t-il si j’ai un problème après la mise en ligne ?",
    answer:
      "Une garantie corrective de 30 jours couvre les problèmes directement liés à la réalisation du site. Pour les mises à jour, modifications et évolutions dans le temps, un service de maintenance est également disponible.",
  },
];

export default function FaqCreationSite() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-light section-spacing">
      <div className="site-container">
        <div className="section-intro">
          <p className="section-label">
            Questions fréquentes
          </p>

          <h2>
            Avant de lancer votre site
          </h2>

          <p>
            Quelques réponses aux questions que vous pouvez vous poser avant
            de démarrer votre projet.
          </p>
        </div>

        <div className="mt-12 max-w-4xl">
          {faqItems.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={question}
                className="
                  border-b
                  border-slate-700/70
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
                  <span className="font-semibold">
                    {question}
                  </span>

                  <ChevronDown
                    className={`
                      h-5
                      w-5
                      shrink-0
                      text-blue-400
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