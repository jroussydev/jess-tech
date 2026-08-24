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
    price: "490 €",
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
    price: "890 €",
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
    price: "1 290 €",
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

export default function FormulesCreationSite() {
  return (
    <section
      id="formules"
      className="section-dark section-spacing"
    >
      <div className="site-container">
        {/* Introduction */}
        <div className="section-intro">
          <p className="section-label">
            Les formules
          </p>

          <h2>
            Choisissez jusqu’où vous voulez aller avec votre site.
          </h2>

          <p>
            Du One Page au site vitrine plus complet, chaque formule définit
            ce qui est prévu dès le départ : nombre de pages, contenus,
            fonctionnalités et accompagnement.
          </p>
        </div>

        {/* Formules principales */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
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
                "
              >
                {/* En-tête */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="section-label">
                      {formule.name}
                    </p>

                    <h3 className="mt-2">
                      {formule.title}
                    </h3>
                  </div>

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-blue-500/25
                      text-blue-400
                    "
                  >
                    <Icon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Prix */}
                <p className="mt-7 !text-3xl font-semibold !text-white">
                  {formule.price}
                </p>

                {/* Contenu */}
                <ul className="mt-7 space-y-3">
                  {formule.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-slate-300"
                    >
                      <Check
                        className="mt-1 h-5 w-5 shrink-0 text-blue-400"
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
                    pt-6
                  "
                >
                  <p className="!mt-0 !text-sm text-slate-400">
                    Délai indicatif
                  </p>

                  <p className="!mt-1 font-semibold !text-white">
                    {formule.delay}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Options */}
        <div
          className="
            mt-10
            rounded-2xl
            border
            border-blue-500/20
            bg-blue-500/5
            p-6
            md:p-8
          "
        >
          <div className="flex items-start gap-4">
            <Plus
              className="mt-1 h-7 w-7 shrink-0 text-blue-400"
              aria-hidden="true"
            />

            <div>
              <h3>
                Des options peuvent compléter votre formule.
              </h3>

              <p>
                Vous avez besoin d’un élément qui n’est pas inclus dans votre
                formule ? Des options peuvent être ajoutées au projet et
                chiffrées en complément selon votre demande.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {options.map((option) => (
                  <span
                    key={option}
                    className="badge badge-primary"
                  >
                    {option}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Custom */}
        <div
          className="
            card-dark
            card-glow
            mt-8
            grid
            gap-8
            lg:grid-cols-[1fr_1.4fr]
            lg:items-center
          "
        >
          <div>
            <div className="flex items-center gap-4">
              <Sparkles
                className="h-8 w-8 text-blue-400"
                aria-hidden="true"
              />

              <p className="section-label !mb-0">
                Custom — Sur devis
              </p>
            </div>

            <h3 className="mt-5">
              Votre projet ne rentre pas dans une formule ?
            </h3>
          </div>

          <div>
            <p className="!mt-0">
              Plus de pages, une structure particulière ou des besoins qui
              dépassent les formules proposées ? Le projet peut être construit
              à partir de votre demande et chiffré poste par poste.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Nombre de pages défini selon le projet",
                "Fonctionnalités étudiées selon la demande",
                "Contenus et visuels dimensionnés au devis",
                "Cycles de modifications définis au devis",
                "Délai établi selon le projet",
                "Prise en main dimensionnée selon le besoin",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <Check
                    className="mt-1 h-5 w-5 shrink-0 text-blue-400"
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
    </section>
  );
}