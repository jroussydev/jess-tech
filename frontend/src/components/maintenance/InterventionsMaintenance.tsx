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

const banques = [
  { duration: "2 heures", price: "49 €" },
  { duration: "5 heures", price: "129 €" },
  { duration: "10 heures", price: "249 €" },
];

export default function InterventionsMaintenance() {
  return (
    <section className="section-light section-spacing">
      <div className="site-container">
        <div className="section-intro">
          <p className="section-label">Sans abonnement</p>
          <h2>Pas besoin d’un abonnement pour une intervention ponctuelle</h2>

          <p>
            Certaines opérations peuvent être réalisées uniquement lorsqu’elles
            deviennent nécessaires.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {interventions.map(
            ({ title, description, price, icon: Icon }) => (
              <article key={title} className="card-light">
                <Icon
                  className="h-7 w-7 text-blue-500"
                  aria-hidden="true"
                />

                <h3 className="mt-4">{title}</h3>
                <p className="mt-3">{description}</p>

                <p className="mt-5 font-bold">{price}</p>
              </article>
            ),
          )}
        </div>

        <div className="mt-14">
          <div className="max-w-3xl">
            <p className="section-label">Banques d’heures</p>
            <h2>Plusieurs petites interventions à prévoir ?</h2>

            <p className="mt-4">
              Une banque d’heures permet de disposer d’un volume de temps pour
              plusieurs interventions sans souscrire un abonnement mensuel.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {banques.map(({ duration, price }) => (
              <article
                key={duration}
                className="card-light text-center"
              >
                <p className="font-semibold">{duration}</p>
                <p className="mt-2 text-2xl font-bold">{price}</p>
                <p className="mt-2 text-sm">Valable 12 mois</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}