import {
  Check,
  FileText,
  Layers3,
  PanelsTopLeft,
  Plus,
  Sparkles,
} from "lucide-react";

const formules = [
  {
    name: "Lite",
    price: "299 €",
    title: "L’essentiel de votre activité sur une seule page.",
    icon: FileText,
    features: [
      "1 page — jusqu’à 6 sections",
      "Jusqu’à 10 visuels",
      "Responsive mobile, tablette et ordinateur",
      "SEO technique de base",
      "2 cycles de modifications",
      "30 min de prise en main",
      "Mise en ligne du site",
    ],
    delay: "10 à 15 jours",
  },
  {
    name: "Essentiel",
    price: "599 €",
    title: "Plusieurs pages pour entrer dans les détails.",
    icon: Layers3,
    features: [
      "3 pages principales + pages juridiques",
      "Jusqu’à 18 visuels",
      "Jusqu’à 2 formulaires simples",
      "Responsive mobile, tablette et ordinateur",
      "SEO technique de base",
      "2 cycles de modifications",
      "45 min de prise en main",
      "Mise en ligne du site",
    ],
    delay: "15 à 20 jours",
  },
  {
    name: "Pro",
    price: "999 €",
    title: "Pour un site qui a davantage à montrer.",
    icon: PanelsTopLeft,
    features: [
      "5 pages principales + pages juridiques",
      "Jusqu’à 30 visuels",
      "Jusqu’à 3 formulaires simples",
      "Personnalisation avancée",
      "Responsive mobile, tablette et ordinateur",
      "SEO technique de base",
      "3 cycles de modifications",
      "1 h de prise en main",
      "Mise en ligne du site",
    ],
    delay: "20 à 25 jours",
  },
];

const options = [
  "Page supplémentaire",
  "Contenu",
  "Multilingue",
  "Fonctionnalités supplémentaires",
  "SEO avancé",
];

const customItems = [
  "Nombre de pages défini selon le projet",
  "Fonctionnalités étudiées selon la demande",
  "Contenus et visuels dimensionnés au devis",
  "Cycles de modifications définis au devis",
  "Délai établi selon le projet",
  "Prise en main dimensionnée selon le besoin",
];

export default function FormulesCreationSite() {
  return (
    <section
      id="formules"
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
            Choisissez jusqu’où vous voulez aller avec{" "}
            <span className="text-gradient-blue">
              votre site
            </span>
          </h2>

          <p>
            Du One Page au site vitrine plus complet, chaque formule définit
            ce qui est prévu dès le départ : nombre de pages, contenus,
            fonctionnalités et accompagnement.
          </p>
        </div>

        {/* =====================================================
            ZONE FORMULES + DÉCORATIONS
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

          {/* =================================================
              FORMULES PRINCIPALES
          ================================================== */}

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
            {formules.map((formule) => {
              const Icon = formule.icon;

              return (
                <article
                  key={formule.name}
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
                  {/* En-tête : icône + formule + prix */}
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

  <h3
    className="
      !m-0
      !text-lg
      text-white
      sm:!text-xl
    "
  >
    {formule.name}
  </h3>

  <span
    className="
      ml-auto
      shrink-0
      text-lg
      font-semibold
      text-blue-400
      sm:text-xl
    "
  >
    {formule.price}
  </span>
</div>

{/* Présentation */}
<p className="!mt-3 text-slate-200">
  {formule.title}
</p>

                  {/* Prestations */}
                  <ul className="mt-5 space-y-2">
                    {formule.features.map((feature) => (
                      <li
                        key={feature}
                        className="
                          flex
                          items-start
                          gap-3
                          text-slate-300
                        "
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

                        <span>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Délai */}
<div
  className="
    mt-auto
    border-t
    border-blue-500/15
    pt-4
  "
>
  <p className="!m-0 !text-xs text-slate-400">
    Délai indicatif
  </p>

  <p className="!mt-1 font-semibold text-slate-200">
    {formule.delay}
  </p>
</div>
                </article>
              );
            })}
          </div>

          {/* =================================================
              CUSTOM
          ================================================== */}

          <div
            className="
              card-dark
              card-glow
              relative
              z-10
              mt-6
              grid
              gap-6
              !p-5

              lg:grid-cols-[0.8fr_1.2fr]
              lg:items-center
            "
          >
            <div>
              <div className="flex items-center gap-3">
                <Sparkles
                  className="
                    h-6
                    w-6
                    shrink-0
                    text-blue-700
                  "
                  aria-hidden="true"
                />

                <h3 className="section-label !m-0 text-gradient-blue">
                  Custom — Sur devis
                </h3>
              </div>

              <p className="mt-3 text-slate-200">
                Votre projet ne rentre pas dans une formule ?
              </p>
            </div>

            <div>
              <p className=" text-slate-200">
                Plus de pages, une structure particulière ou des besoins qui
                dépassent les formules proposées ? Le projet peut être construit
                à partir de votre demande et chiffré poste par poste.
              </p>

              <div
                className="
                  mt-4
                  grid
                  gap-x-6
                  gap-y-2

                  sm:grid-cols-2
                "
              >
                {customItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
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

                    <span className="text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            OPTIONS
        ====================================================== */}

        <div className="mx-auto mt-10 max-w-4xl text-center">

  <div className="flex items-center justify-center gap-3">
    <Plus
      className="
        h-6
        w-6
        shrink-0
        text-blue-400
      "
      aria-hidden="true"
    />

    <h3>
      Des options peuvent compléter votre formule.
    </h3>
  </div>

  <p className="mx-auto max-w-3xl">
    Vous avez besoin d’un élément qui n’est pas inclus dans votre
    formule ? Des options peuvent être ajoutées au projet et chiffrées
    en complément selon votre demande.
  </p>

  <div className="mt-4 flex flex-wrap justify-center gap-2">
    {options.map((option) => (
      <span
        key={option}
        className="badge badge-primary !text-blue-400"
      >
        {option}
      </span>
    ))}
  </div>

</div>

      </div>
    </section>
  );
}