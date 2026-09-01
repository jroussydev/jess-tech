import { CalendarSync, Wrench } from "lucide-react";

export default function ChoixMaintenance() {
  return (
    <section className="section-light section-spacing">
      <div className="site-container">
        <div className="section-intro">
          <p className="section-label">Deux possibilités</p>

          <h2>Comment souhaitez-vous faire suivre votre site ?</h2>

          <p>
            Un site peut avoir besoin d’un entretien régulier ou simplement
            d’une intervention de temps en temps. L’abonnement n’est donc pas
            systématique.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="card-light">
            <CalendarSync
              className="h-8 w-8 text-blue-500"
              aria-hidden="true"
            />

            <p className="section-label mt-5">Suivi régulier</p>

            <h3 className="mt-2">
              Votre site est suivi dans le temps
            </h3>

            <p className="mt-4">
              Pour les sites qui nécessitent un entretien régulier, les
              formules mensuelles permettent de prévoir les mises à jour,
              sauvegardes et vérifications sans attendre qu’un problème
              apparaisse.
            </p>

            <p className="mt-5 font-semibold">
              Essentielle · Sérénité · Prioritaire
            </p>
          </article>

          <article className="card-light">
            <Wrench
              className="h-8 w-8 text-blue-500"
              aria-hidden="true"
            />

            <p className="section-label mt-5">Besoin ponctuel</p>

            <h3 className="mt-2">
              Vous avez besoin d’une intervention précise
            </h3>

            <p className="mt-4">
              Il n’est pas nécessaire de souscrire un abonnement pour une
              demande occasionnelle. Une correction, une mise à jour importante
              ou une intervention peut également être réalisée ponctuellement.
            </p>

            <p className="mt-5 font-semibold">
              Intervention · Correction · Mise à jour · Restauration
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}