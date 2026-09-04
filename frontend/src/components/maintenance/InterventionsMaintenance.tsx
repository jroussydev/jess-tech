import {
  Bug,
  Clock,
  FileSearch,
  RefreshCcw,
  Wrench,
} from "lucide-react";

const interventions = [
  {
    title: "Intervention ponctuelle",
    description:
      "Une intervention pour effectuer une opération précise sur votre site.",
    price: "25 € / heure",
    icon: Wrench,
  },
  {
    title: "Correction de bug",
    description:
      "Diagnostic, correction et vérification d’un dysfonctionnement.",
    price: "Base : 25 € / heure",
    icon: Bug,
  },
  {
    title: "Mise à jour majeure",
    description:
      "Sauvegarde, mise à jour, tests et validation pour un site hors contrat.",
    price: "À partir de 99 €",
    icon: RefreshCcw,
  },
  {
    title: "Restauration après incident",
    description:
      "Analyse, restauration et vérification lorsqu’une sauvegarde exploitable est disponible.",
    price: "À partir de 149 €",
    icon: Clock,
  },
  {
    title: "Audit de maintenance",
    description:
      "Vérification générale du site avec rapport et recommandations.",
    price: "À partir de 79 €",
    icon: FileSearch,
  },
];

export default function InterventionsMaintenance() {
  return (
    <section className="section-light section-fade-light-soft section-spacing">
      <div className="site-container">

        {/* Introduction */}
        <div className="section-intro max-w-3xl">
          <p className="section-label">
            À la demande
          </p>

          <h2>
            Besoin d’une{" "}
            <span className="text-gradient-blue">
              intervention précise ?
            </span>
          </h2>

          <p>
            Certaines opérations peuvent être réalisées individuellement,
            sans abonnement ni banque d’heures.
          </p>
        </div>

        {/* Prestations */}
        <div
          className="
            mt-10
            grid
            gap-4

            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {interventions.map(
            ({ title, description, price, icon: Icon }) => (
              <article
                key={title}
                className="
                  card-dark
                  card-glow
                  group
                  flex
                  h-full
                  flex-col
                  !p-5
                "
              >
                {/* Icône + titre */}
                <div className="flex items-center gap-3">
                  <Icon
                    className="
                      h-6
                      w-6
                      shrink-0
                      text-blue-400
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                    aria-hidden="true"
                  />

                  <h3 className="!m-0 !text-lg text-white sm:!text-xl">
                    {title}
                  </h3>
                </div>

                {/* Description */}
                <p className="!mt-3 text-slate-300">
                  {description}
                </p>

                {/* Prix */}
                <div
                  className="
                    mt-auto
                    border-t
                    border-blue-500/15
                    pt-4
                  "
                >
                  <p
                    className="
                      !m-0
                      text-lg
                      font-semibold
                      text-blue-400

                      sm:text-xl
                    "
                  >
                    {price}
                  </p>
                </div>
              </article>
            ),
          )}
        </div>

      </div>
    </section>
  );
}