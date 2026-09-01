import {
  Search,
  Layers3,
  RefreshCw,
  PlusCircle,
} from "lucide-react";

const criteresRefonte = [
  {
    title: "L’état du site",
    description:
      "Sa structure actuelle et ce qui peut encore être utilisé.",
    icon: Search,
  },
  {
    title: "Ce qui doit être repris",
    description:
      "Quelques éléments ciblés ou une refonte plus importante.",
    icon: RefreshCw,
  },
  {
    title: "Ce qui peut être conservé",
    description:
      "Pages, contenus, visuels ou éléments déjà exploitables.",
    icon: Layers3,
  },
  {
    title: "Les nouvelles demandes",
    description:
      "Pages, contenus ou fonctionnalités à ajouter pendant la refonte.",
    icon: PlusCircle,
  },
];

export default function TarifRefonte() {
  return (
    <section className="section-dark section-spacing">
      <div className="site-container">
        {/* Introduction */}
        <div className="section-intro">
          <p className="section-label">
            Le tarif
          </p>

          <h2>
            Chaque refonte commence par l’existant.
          </h2>

          <p>
            Deux sites peuvent avoir besoin d’une refonte sans demander la
            même quantité de travail. Le tarif est donc défini à partir de
            votre site actuel et des changements à réaliser.
          </p>
        </div>

        {/* Bloc principal */}
        <div
          className="
            card-dark
            card-glow
            mt-12
            overflow-hidden
          "
        >
          <div
            className="
              grid
              gap-10
              lg:grid-cols-[0.65fr_1.35fr]
              lg:items-center
            "
          >
            {/* Tarif */}
            <div>
              <p className="section-label">
                Refonte de site web
              </p>

              <p
                className="
                  mt-4
                  !text-4xl
                  font-semibold
                  !text-white
                  md:!text-5xl
                "
              >
                Sur devis
              </p>

              <p className="mt-5 text-slate-300">
                Le périmètre et le tarif sont définis après examen du site.
              </p>
            </div>

            {/* Critères */}
            <div className="grid gap-6 sm:grid-cols-2">
              {criteresRefonte.map(
                ({ title, description, icon: Icon }) => (
                  <div
                    key={title}
                    className="flex items-start gap-4"
                  >
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-blue-500/30
                        text-blue-400
                      "
                    >
                      <Icon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <h3 className="!mt-0">
                        {title}
                      </h3>

                      <p className="!mt-2 text-slate-400">
                        {description}
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}