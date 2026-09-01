import { useState } from "react";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    question:
      "Je ne sais pas d’où vient le problème, puis-je quand même vous contacter ?",
    answer:
      "Oui. C’est justement l’objectif du diagnostic. Décrire ce que vous constatez permet de commencer l’analyse sans avoir à connaître vous-même l’origine du problème.",
  },
  {
    question: "Quels types de sites pouvez-vous diagnostiquer ?",
    answer:
      "La possibilité d’intervenir dépend de la technologie utilisée, de l’environnement du site et des accès disponibles. Ces éléments sont vérifiés avant de confirmer le périmètre de l’analyse.",
  },
  {
    question:
      "Mon site n’a pas été créé par Jess Tech, pouvez-vous quand même l’examiner ?",
    answer:
      "Oui, lorsque son environnement technique et les accès disponibles permettent de réaliser les vérifications nécessaires.",
  },
  {
    question: "Le diagnostic comprend-il la correction du problème ?",
    answer:
      "Non, pas automatiquement. Le diagnostic sert d’abord à examiner la situation et à déterminer ce qui doit être réalisé. Une correction peut ensuite faire l’objet d’une intervention distincte.",
  },
  {
    question:
      "Que se passe-t-il si le problème ne peut pas être identifié immédiatement ?",
    answer:
      "Certaines situations peuvent nécessiter des investigations supplémentaires. Le périmètre de l’analyse dépend du problème rencontré et des éléments accessibles.",
  },
  {
    question: "Avez-vous besoin des accès à mon site ?",
    answer:
      "Cela dépend du problème. Certaines premières observations peuvent être réalisées sans accès particulier, tandis qu’une analyse plus approfondie peut nécessiter l’administration du site, l’hébergement ou d’autres accès techniques.",
  },
  {
    question: "Combien coûte un diagnostic technique ?",
    answer:
      "L’audit technique est proposé à partir de 99 €. Le périmètre et le tarif sont définis selon la situation à examiner.",
  },
  {
    question: "Que se passe-t-il une fois le problème identifié ?",
    answer:
      "Les suites possibles vous sont indiquées selon les éléments relevés. Lorsque Jess Tech peut réaliser la correction, une intervention distincte peut ensuite être proposée.",
  },
];

export default function FaqDiagnostic() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-dark section-spacing">
      <div className="site-container">
        <div className="section-intro">
          <p className="section-label">Questions fréquentes</p>
          <h2>FAQ Diagnostic technique</h2>

          <p>
            Quelques réponses pour savoir quand demander une analyse de votre
            site.
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