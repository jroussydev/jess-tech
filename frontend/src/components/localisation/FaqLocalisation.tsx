import {
  ChevronDown,
  HelpCircle,

} from "lucide-react";



const questions = [
  {
    question: "Intervenez-vous uniquement autour de Beaurieux ?",
    reponse:
      "Non. Jess Tech peut intervenir localement autour de Beaurieux pour certaines prestations nécessitant une présence sur place. La création, la refonte et la maintenance de sites internet peuvent également être réalisées entièrement à distance partout en France.",
  },
  {
    question: "Dans quelles villes pouvez-vous vous déplacer ?",
    reponse:
      "Les déplacements peuvent notamment être étudiés autour de Beaurieux, Laon, Soissons, Reims, Château-Thierry, Fismes, Braine et Guignicourt. Chaque demande est examinée selon la distance, la nature de la prestation et les conditions d’intervention.",
  },
  {
    question: "Pouvez-vous créer un site internet entièrement à distance ?",
    reponse:
      "Oui. Un projet de création de site internet peut être organisé à distance grâce aux échanges par téléphone, e-mail, visioconférence et partage d’écran. Il n’est donc pas nécessaire d’habiter près de Beaurieux pour travailler avec Jess Tech.",
  },
  {
    question: "Les déplacements sont-ils facturés ?",
    reponse:
      "Les éventuels frais de déplacement dépendent de la distance, de la durée de l’intervention et du type de prestation demandé. Les conditions sont précisées avant le déplacement afin d’éviter toute mauvaise surprise.",
  },
  {
    question: "Pouvez-vous intervenir directement dans mon entreprise ?",
    reponse:
      "Oui, lorsque la prestation nécessite une présence sur place et que la distance le permet. Un premier échange permet de vérifier si une intervention dans vos locaux est nécessaire ou si le besoin peut être traité à distance.",
  },
  {
    question: "Proposez-vous une assistance technique à domicile ?",
    reponse:
      "Certaines demandes d’assistance technique ou de dépannage informatique peuvent être réalisées localement. La possibilité d’un déplacement dépend du problème rencontré, de la commune concernée et du matériel nécessaire à l’intervention.",
  },
  {
    question:
      "Puis-je vous contacter si ma commune n’apparaît pas dans la liste ?",
    reponse:
      "Bien sûr. Les communes affichées représentent les principaux secteurs autour de Beaurieux, mais cette liste n’est pas exhaustive. Chaque demande peut être étudiée individuellement, y compris dans une commune qui n’est pas mentionnée sur cette page.",
  },
  {
    question: "Avec quels types de structures travaillez-vous localement ?",
    reponse:
      "Jess Tech accompagne les particuliers, artisans, commerçants, associations, petites entreprises et structures locales pour leurs projets de création de site internet, de refonte, de maintenance et d’assistance technique.",
  },
];

const FaqLocalisation = () => {
  return (
    <section className="section-dark section-fade-dark-soft section-spacing">
      <div className="site-container">

        {/* Introduction */}
        <div className="section-intro max-w-3xl">
          <p className="section-label">
            Questions fréquentes
          </p>

          <h2>
            Vos questions sur mes zones{" "}
            <span className="text-gradient-blue">
              d’intervention
            </span>
          </h2>

          <p>
            Retrouvez les principales informations concernant les déplacements,
            les rendez-vous sur place et l’accompagnement à distance.
          </p>
        </div>

        {/* Questions */}
        <div className="mt-8 grid items-start gap-4 lg:grid-cols-2">
          {questions.map(({ question, reponse }) => (
            <details
              key={question}
              className="
                card-dark
                card-glow
                group
                overflow-hidden
                !p-0
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
                  [&::-webkit-details-marker]:hidden

                  sm:px-6
                  sm:py-5
                "
              >
                {/* Question */}
                <span className="flex min-w-0 items-center gap-3">
                  <HelpCircle
                    className="
                      h-6
                      w-6
                      shrink-0
                      text-sky-500
                      transition-transform
                      duration-300
                      group-open:scale-110
                    "
                    aria-hidden="true"
                  />

                  <span className="font-semibold leading-6 text-slate-200">
                    {question}
                  </span>
                </span>

                {/* Ouverture */}
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
                <p className="m-0 text-slate-300">
                  {reponse}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqLocalisation;