import {
  Check,
  Clock3,
  HeartHandshake,
  ShieldCheck,
  Zap,
} from "lucide-react";

const formules = [
  {
    name: "Essentielle",
    price: "49 €",
    icon: ShieldCheck,
    description:
      "Pour assurer l’entretien courant du site et disposer d’un suivi régulier.",
    includes: [
      "Mises à jour",
      "Surveillance",
      "Sauvegardes",
      "Vérification du fonctionnement",
    ],
    note: "Les ajouts de fonctionnalités ne sont pas inclus.",
  },
  {
    name: "Sérénité",
    price: "89 €",
    icon: HeartHandshake,
    description:
      "Pour aller au-delà de l’entretien courant et bénéficier d’une prise en charge plus complète.",
    includes: [
      "Tout ce qui est compris dans Essentielle",
      "Petites corrections",
      "Assistance prioritaire",
    ],
    note: "Les évolutions importantes sont facturées séparément.",
  },
  {
    name: "Prioritaire",
    price: "149 €",
    icon: Zap,
    description:
      "Pour les activités qui dépendent davantage de leur site et souhaitent un niveau de priorité supérieur.",
    includes: [
      "Tout ce qui est compris dans Sérénité",
      "Priorité maximale",
      "Accompagnement renforcé",
    ],
    note: "Une formule destinée aux activités dépendantes de leur site.",
  },
];

const banques = [
  {
    duration: "2 heures",
    price: "49 €",
  },
  {
    duration: "5 heures",
    price: "119 €",
  },
  {
    duration: "10 heures",
    price: "229 €",
  },
];

export default function FormulesMaintenance() {
  return (
    <section
      id="formules-maintenance"
      className="
        section-dark
        section-fade-dark-soft
        section-spacing
      "
    >
      <div className="site-container relative z-10">

        {/* =====================================================
            INTRODUCTION
        ====================================================== */}

        <div className="section-intro max-w-3xl">
          <p className="section-label">
            Les formules
          </p>

          <h2>
            Choisissez la façon de faire suivre{" "}
            <span className="text-gradient-blue">
              votre site
            </span>
          </h2>

          <p>
            Abonnement mensuel ou banque d’heures : choisissez le niveau de
            suivi qui correspond le mieux à votre site et à la fréquence de
            vos besoins.
          </p>
        </div>

        {/* =====================================================
            ABONNEMENTS + DÉCORATIONS
        ====================================================== */}

        <div className="relative mt-10">

          {/* Vague haut droite */}
          <img
            src="/decorations/vagues/15.png"
            alt=""
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-20
              -top-28
              z-0
              hidden
              h-auto
              w-72

              lg:block

              xl:-right-28
              xl:w-80

              2xl:-right-36
              2xl:w-96
            "
          />

          {/* Vague bas gauche */}
          <img
            src="/decorations/vagues/16.png"
            alt=""
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-28
              -left-20
              z-0
              hidden
              h-auto
              w-72

              lg:block

              xl:-left-28
              xl:w-80

              2xl:-left-36
              2xl:w-96
            "
          />

          {/* Abonnements */}
          <div
            className="
              relative
              z-10
              grid
              gap-4

              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {formules.map(
              ({ name, price, icon: Icon, description, includes, note }) => (
                <article
                  key={name}
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
                  {/* Icône + formule + prix */}
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
    {name}
  </h3>

  {/* Prix */}
  <div className="ml-auto flex shrink-0 items-baseline gap-1">
    <span
      className="
        text-lg
        font-semibold
        text-blue-400
        sm:text-xl
      "
    >
      {price}
    </span>

    <span className="text-sm text-slate-400">
      / mois
    </span>
  </div>
</div>

                  {/* Présentation */}
                  <p className="!mt-3 text-slate-200">
                    {description}
                  </p>

                  {/* Inclus */}
                  <ul className="mt-5 space-y-2 pb-5">
                    {includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-slate-300"
                      >
                        <Check
                          className="
                            mt-1
                            h-4
                            w-4
                            shrink-0
                            text-blue-400
                          "
                          aria-hidden="true"
                        />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Note */}
                  <div
                    className="
                      mt-auto
                      border-t
                      border-blue-500/15
                      pt-4
                    "
                  >
                    <p className="!m-0 !text-sm text-slate-400">
                      {note}
                    </p>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>

        {/* =====================================================
            BANQUES D'HEURES
        ====================================================== */}

        <div
          className="
            relative
            z-10
            mt-5
            
            pt-10
          "
        >
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <Clock3
                className="h-6 w-6 shrink-0 text-blue-400"
                aria-hidden="true"
              />

              <p className="section-label !m-0">
                Flexible
              </p>
            </div>

            <h3 className="mt-4">
              La banque d’heures
            </h3>

            <p className="mx-auto max-w-2xl text-slate-300">
              Pour un site qui nécessite seulement quelques interventions dans
              l’année, vous pouvez réserver un volume d’heures et l’utiliser
              progressivement selon vos besoins.
            </p>
          </div>

          <div
            className="
              mx-auto
              mt-8
              grid
              max-w-4xl
              gap-4

              sm:grid-cols-3
            "
          >
            {banques.map(({ duration, price }) => (
              <article
                key={duration}
                className="
                  card-dark
                  card-glow
                  flex
                  flex-col
                  items-center
                  text-center
                  !p-5
                "
              >
                <h3 className="!m-0 !text-lg text-white">
                  {duration}
                </h3>

                <p className="!mt-3 !text-2xl font-semibold text-blue-400">
                  {price}
                </p>

                <p className="!mt-2 !text-sm text-slate-400">
                  Valable 12 mois
                </p>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-slate-400">
            Une solution particulièrement adaptée aux sites qui ont besoin de
            petites interventions occasionnelles sans nécessiter un suivi
            mensuel.
          </p>
        </div>

      </div>
    </section>
  );
}