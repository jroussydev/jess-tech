import { ChevronDown } from "lucide-react";

const faqTarifs = [
  {
    question: "Le devis est-il gratuit ?",
    reponse:
      "Oui. Le premier échange et l’établissement du devis sont gratuits et ne vous engagent pas.",
  },
  {
    question: "Pourquoi les tarifs peuvent-ils varier ?",
    reponse:
      "Le tarif dépend du nombre de pages, des fonctionnalités, du niveau de personnalisation, des contenus à intégrer et des éventuelles prestations complémentaires.",
  },
  {
    question: "Puis-je ajouter des options après le devis ?",
    reponse:
      "Oui. Toute demande supplémentaire peut être étudiée. Son coût et son impact sur le planning sont précisés avant sa réalisation.",
  },
  {
    question: "Comment se déroule le paiement ?",
    reponse:
      "Les modalités de paiement sont précisées dans le devis. Selon le projet, un acompte peut être demandé avant le début de la prestation.",
  },
];

export default function FaqTarifs() {
  return (
    <section className="section-light section-fade-light-soft section-spacing">
      <div className="site-container">

        {/* Introduction */}
        <div className="section-intro max-w-3xl">
          <p className="section-label">
            Questions fréquentes
          </p>

          <h2>
            Vos questions sur les{" "}
            <span className="text-gradient-blue">
              tarifs
            </span>
          </h2>

          <p className="max-w-2xl text-slate-600">
            Retrouvez les principales informations concernant les devis,
            les paiements et les éventuelles prestations supplémentaires.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-8 grid items-start gap-4 lg:grid-cols-2">
          {faqTarifs.map(({ question, reponse }) => (
            <details
              key={question}
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-sky-500/20
                bg-white/70
                shadow-sm
                transition
                duration-300
                open:border-sky-500/40
                open:shadow-md
              "
            >
              <summary
                className="
                  flex
                  cursor-pointer
                  list-none
                  items-center
                  justify-between
                  gap-4
                  px-5
                  py-4
                  sm:px-6
                  sm:py-5
                  [&::-webkit-details-marker]:hidden
                "
              >
                <span className="font-semibold leading-6 text-slate-950">
                  {question}
                </span>

                <ChevronDown
                  className="
                    h-5
                    w-5
                    shrink-0
                    text-sky-500
                    transition-transform
                    duration-300
                    group-open:rotate-180
                  "
                  aria-hidden="true"
                />
              </summary>

              {/* Réponse */}
              <div
                className="
                  border-t
                  border-sky-500/20
                  px-5
                  pb-5
                  pt-4
                  sm:px-6
                  sm:pb-6
                "
              >
                <p className="m-0 text-slate-600">
                  {reponse}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}