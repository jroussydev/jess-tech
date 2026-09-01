import { useState } from "react";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: "Pouvez-vous intervenir directement chez moi ?",
    answer:
      "Oui, lorsque la nature de l’intervention nécessite une présence sur place et que votre localisation se trouve dans la zone d’intervention de Jess Tech.",
  },
  {
    question: "Comment fonctionne une assistance à distance ?",
    answer:
      "Lorsque la demande peut être traitée sans manipuler directement le matériel, l’intervention peut être réalisée à distance. Les modalités sont déterminées selon le problème rencontré.",
  },
  {
    question:
      "Pouvez-vous m’aider même si je ne suis pas à l’aise avec l’informatique ?",
    answer:
      "Oui. L’assistance peut aussi servir à comprendre le fonctionnement d’un ordinateur, d’un logiciel ou d’un outil numérique, avec des explications adaptées à votre niveau.",
  },
  {
    question:
      "Pouvez-vous m’aider à écrire un e-mail ou à effectuer une démarche administrative ?",
    answer:
      "Non. L’assistance Jess Tech concerne l’utilisation du matériel, des logiciels et des outils numériques. Elle ne comprend pas la rédaction d’e-mails ou de courriers, ni l’accompagnement dans les démarches administratives en ligne.",
  },
  {
    question: "Pouvez-vous installer et préparer un nouvel ordinateur ?",
    answer:
      "Oui. La prestation peut comprendre la mise en service de l’ordinateur et les premiers réglages nécessaires. Les éventuels logiciels ou besoins supplémentaires sont définis selon votre demande.",
  },
  {
    question: "Pouvez-vous récupérer des fichiers perdus ?",
    answer:
      "Une intervention peut être réalisée pour rechercher les possibilités de récupération. Le résultat dépend cependant de l’état du support et de la situation, et ne peut donc pas être garanti.",
  },
  {
    question: "Dois-je sauvegarder mes fichiers avant une intervention ?",
    answer:
      "Lorsque le matériel le permet, il est recommandé de conserver une copie des fichiers importants avant une intervention susceptible de les affecter.",
  },
  {
    question: "Comment savoir combien coûtera mon intervention ?",
    answer:
      "Le tarif dépend de la prestation et de ce qui doit être réalisé. Certaines interventions disposent d’un tarif de départ, tandis que l’assistance et la formation peuvent être facturées au temps passé.",
  },
];

export default function FaqAssistance() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-dark section-spacing">
      <div className="site-container">
        <div className="section-intro">
          <p className="section-label">Questions fréquentes</p>
          <h2>FAQ Assistance technique</h2>

          <p>
            Les principales informations à connaître avant de demander une
            intervention.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {questions.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;

            return (
              <article key={question} className="card-dark !p-0">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 p-5 text-left"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold">{question}</span>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5">
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