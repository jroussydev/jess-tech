import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

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
    <section className="section-light">
      <div className="site-container section-spacing">
        {/* Introduction */}
        <div className="section-intro">
          <p className="section-label">Questions fréquentes</p>

          <h2>Vos questions sur mes zones d’intervention</h2>

          <p>
            Retrouvez les principales informations concernant les déplacements,
            les rendez-vous sur place et l’accompagnement à distance.
          </p>
        </div>

        {/* Questions */}
        <div className="mt-12 grid items-start gap-4 lg:grid-cols-2">
          {questions.map(({ question, reponse }) => (
            <details
              key={question}
              className="group rounded-2xl border border-slate-200 bg-white px-6 shadow-sm transition duration-300 open:border-blue-200 open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 [&::-webkit-details-marker]:hidden">
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <HelpCircle
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </span>

                  <span className="font-semibold leading-6 text-slate-900">
                    {question}
                  </span>
                </span>

                <ChevronDown
                  className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 group-open:rotate-180 group-open:text-blue-600"
                  aria-hidden="true"
                />
              </summary>

              <div className="border-t border-slate-100 pb-6 pt-4">
                <p className="m-0 leading-7 text-slate-600">{reponse}</p>
              </div>
            </details>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-blue-100 bg-blue-50/70 px-6 py-6 text-center sm:flex-row sm:text-left">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <MessageCircle className="h-6 w-6" aria-hidden="true" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Vous avez une autre question ?
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                Présentez-moi votre besoin et votre commune afin que nous
                étudions ensemble les possibilités d’intervention.
              </p>
            </div>
          </div>

          <Link to="/contact" className="btn-primary shrink-0">
            Me contacter
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FaqLocalisation;