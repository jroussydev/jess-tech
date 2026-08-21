import {
  FileText,
  Layers3,
  Palette,
  Settings2,
} from "lucide-react";

const criteresTarifs = [
  {
    icon: FileText,
    title: "Le nombre de pages",
    description:
      "Un site One Page ne demande pas le même travail qu’un site composé de plusieurs pages.",
  },
  {
    icon: Settings2,
    title: "Les fonctionnalités",
    description:
      "Formulaires, espaces privés, outils spécifiques ou automatisations peuvent faire évoluer le tarif.",
  },
  {
    icon: Palette,
    title: "Le niveau de personnalisation",
    description:
      "Le temps nécessaire dépend également du design, des contenus et du niveau de personnalisation souhaité.",
  },
  {
    icon: Layers3,
    title: "Les prestations complémentaires",
    description:
      "Maintenance, intégration de contenu, options techniques ou accompagnement supplémentaire sont chiffrés selon les besoins.",
  },
];

export default function CalculTarifs() {
  return (
    <section className="section-dark section-fade-dark-soft section-spacing">
      <div className="site-container">
        <div
          className="
            grid
            items-start
            gap-10
            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-16
          "
        >
          {/* Introduction */}
          <div className="section-intro">
            <p className="section-label">
              Comment sont calculés les tarifs ?
            </p>

            <h2>
              Un tarif construit selon votre{" "}
              <span className="text-gradient-blue">
                projet
              </span>
            </h2>

            <p className="max-w-xl text-slate-300">
              Il n’existe pas un tarif unique adapté à tous les projets.
              Le prix dépend du travail réellement nécessaire pour répondre
              correctement à votre besoin.
            </p>

            <p className="max-w-xl text-slate-300">
              Après un premier échange, je définis les prestations nécessaires
              et vous recevez un devis détaillé avant le début du projet.
            </p>
          </div>

          {/* Critères */}
          <div className="flex flex-col">
            {criteresTarifs.map((critere, index) => {
              const Icon = critere.icon;

              return (
                <div
                  key={critere.title}
                  className={`
                    group
                    py-5
                    ${index !== criteresTarifs.length - 1
                      ? "border-b border-sky-500/20"
                      : ""
                    }
                  `}
                >
                  {/* Icône + titre */}
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

                    <h3 className="text-slate-100">
                      {critere.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-2 max-w-2xl text-slate-300">
                    {critere.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}