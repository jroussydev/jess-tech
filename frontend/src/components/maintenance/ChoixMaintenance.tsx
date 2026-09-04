import {
  CalendarSync,
  Wrench,
} from "lucide-react";

const choixMaintenance = [
  {
    title: "Suivi régulier",
    subtitle: "Maintenance mensuelle",
    description:
      "Pour les sites qui nécessitent un entretien régulier, les formules mensuelles permettent de prévoir les mises à jour, sauvegardes et vérifications sans attendre qu’un problème apparaisse.",
    details: "Essentielle · Sérénité · Prioritaire",
    icon: CalendarSync,
  },
  {
    title: "Besoin ponctuel",
    subtitle: "Intervention à la demande",
    description:
      "Il n’est pas nécessaire de souscrire un abonnement pour une demande occasionnelle. Une correction, une mise à jour importante ou une intervention peut également être réalisée ponctuellement.",
    details: "Intervention · Correction · Mise à jour · Restauration",
    icon: Wrench,
  },
];

export default function ChoixMaintenance() {
  return (
    <section className="section-light section-fade-light-soft section-spacing">
      <div className="site-container">

        {/* Introduction */}
        <div className="section-intro max-w-3xl">
          <p className="section-label">
            Deux possibilités
          </p>

          <h2>
            Comment souhaitez-vous faire suivre{" "}
            <span className="text-gradient-blue">
              votre site ?
            </span>
          </h2>

          <p>
            Un site peut avoir besoin d’un entretien régulier ou simplement
            d’une intervention de temps en temps. L’abonnement n’est donc pas
            systématique.
          </p>
        </div>

        {/* Types de maintenance */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-6

            md:grid-cols-2
          "
        >
          {choixMaintenance.map(
            ({ title, subtitle, description, details, icon: Icon }) => (
              <article
                key={title}
                className="
                  group
                  min-w-0

                  border-b
                  border-sky-500/20
                  pb-6

                  md:border-b-0
                  md:border-r
                  md:pr-6

                  md:last:border-r-0
                  md:last:pr-0
                "
              >
                {/* Icône + type */}
                <div className="flex items-center gap-3">
                  <Icon
                    className="
                      h-7
                      w-7
                      shrink-0
                      text-sky-500
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                    aria-hidden="true"
                  />

                  <p className="section-label !m-0">
                    {subtitle}
                  </p>
                </div>

                {/* Contenu */}
                <h3 className="mt-3 text-slate-950">
                  {title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {description}
                </p>

                <p className="mt-4 font-semibold text-slate-800">
                  {details}
                </p>
              </article>
            ),
          )}
        </div>

        {/* Aide au choix */}
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="!m-0">
            <strong>
              Vous ne savez pas quelle solution choisir ?
            </strong>
            <br />
            Nous pouvons déterminer le type de suivi adapté à votre site et à
            vos besoins.
          </p>
        </div>

      </div>
    </section>
  );
}