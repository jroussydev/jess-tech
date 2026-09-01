import { useState } from "react";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    question:
      "Mon site n’a pas été créé par Jess Tech, pouvez-vous quand même assurer sa maintenance ?",
    answer:
      "Oui, selon son environnement technique et son état. Une vérification préalable peut être nécessaire avant de confirmer sa prise en charge.",
  },
  {
    question: "Dois-je forcément souscrire une maintenance mensuelle ?",
    answer:
      "Non. Les formules mensuelles sont destinées aux sites qui nécessitent un suivi régulier. Pour un besoin occasionnel, une intervention ponctuelle ou une banque d’heures peut être plus adaptée.",
  },
  {
    question: "Quelle formule de maintenance choisir ?",
    answer:
      "Cela dépend du niveau de suivi dont votre site a besoin. Les formules Essentielle, Sérénité et Prioritaire proposent une prise en charge progressive, de l’entretien courant jusqu’à un accompagnement renforcé.",
  },
  {
    question: "Les sauvegardes sont-elles comprises dans la maintenance ?",
    answer:
      "Oui, les sauvegardes font partie des opérations prévues dans les formules mensuelles. Leur fonctionnement dépend de l’environnement du site et des conditions définies pour sa maintenance.",
  },
  {
    question:
      "Puis-je demander l’ajout d’une page ou d’une nouvelle fonctionnalité pendant la maintenance ?",
    answer:
      "Oui, mais une évolution du site n’est pas automatiquement comprise dans la maintenance. La demande est étudiée séparément lorsqu’elle sort du périmètre de la formule souscrite.",
  },
  {
    question: "Que se passe-t-il si mon site rencontre un problème ?",
    answer:
      "Le problème est examiné afin de déterminer son origine et l’intervention nécessaire. Sa prise en charge dépend de la formule souscrite ou, en dehors d’un contrat de maintenance, peut faire l’objet d’une intervention ponctuelle.",
  },
  {
    question: "À quoi servent les banques d’heures ?",
    answer:
      "Elles permettent de prévoir plusieurs petites interventions sans souscrire un abonnement mensuel. Le volume d’heures acheté est valable pendant 12 mois.",
  },
  {
    question:
      "La maintenance est-elle comprise lorsque Jess Tech crée mon site ?",
    answer:
      "Non. La livraison d’un site et sa maintenance régulière sont deux prestations distinctes. Une formule de maintenance peut être mise en place séparément après la livraison.",
  },
];

export default function FaqMaintenance() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-light section-spacing">
      <div className="site-container">
        <div className="section-intro">
          <p className="section-label">Questions fréquentes</p>
          <h2>FAQ Maintenance</h2>

          <p>
            Quelques réponses avant de confier le suivi de votre site à
            Jess Tech.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {questions.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;

            return (
              <article key={question} className="card-light !p-0">
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