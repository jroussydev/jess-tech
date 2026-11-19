import { ChevronDown } from "lucide-react";
import { offreActive, offreFondateur, prixAudit, prixSites } from "../../data/tarifs";

const questionFondateur = {
  question: "Qu’est-ce que l’offre fondateur ?",
  reponse: `Pour mes ${offreFondateur.placesTotal} premiers clients, les formules sont à prix réduit : ${prixSites.Lite.fondateur} au lieu de ${prixSites.Lite.normal} pour le Lite, ${prixSites.Essentiel.fondateur} pour l’Essentiel et ${prixSites.Pro.fondateur} pour le Pro, avec ${offreFondateur.bonus}. En échange, je vous demande un témoignage, un avis Google et l’accord pour présenter votre site dans mes réalisations.`,
};

const faqTarifs = [
  // La question fondateur n'apparaît que tant qu'il reste des places
  ...(offreActive ? [questionFondateur] : []),
  {
    question: "Les prix affichés sont-ils définitifs ?",
    reponse:
      "Oui. Le prix d’une formule correspond à ce qui est décrit dans la formule. Seules les options ou les demandes qui dépassent ce cadre sont chiffrées à part, et toujours validées avec vous avant d’être réalisées.",
  },
  {
    question: "Le devis est-il gratuit ?",
    reponse:
      "Oui. Le premier échange et l’établissement du devis sont gratuits et ne vous engagent pas.",
  },
  {
    question: "Puis-je arrêter ma maintenance ?",
    reponse:
      "Oui, à tout moment. Les formules de maintenance sont sans engagement : vous restez parce que le suivi vous est utile, pas parce qu’un contrat vous y oblige.",
  },
  {
    question: "L’audit est-il vraiment déduit ?",
    reponse: `Oui. L’audit à ${prixAudit} est déduit une fois du prix d’une création de site ou d’une maintenance, si vous la commandez dans les 2 mois qui suivent.`,
  },
  {
    question: "Les prix incluent-ils la TVA ?",
    reponse:
      "Il n’y a pas de TVA à ajouter : en tant que micro-entreprise, je ne facture pas la TVA (article 293 B du Code général des impôts). Le prix affiché est le prix que vous payez.",
  },
  {
    question: "L’hébergement et le nom de domaine sont-ils compris ?",
    reponse:
      "Non, ils ne sont pas inclus dans les formules. Je vous accompagne dans leur choix et leur mise en place, et ils restent à votre nom, pour que votre site vous appartienne vraiment.",
  },
  {
    question: "Comment se déroule le paiement ?",
    reponse:
      "Les modalités de paiement sont précisées dans le devis. Selon le projet, un acompte peut être demandé avant le début de la prestation.",
  },
];

export default function FaqTarifs() {
  return (
    <section className="section-light section-spacing">
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