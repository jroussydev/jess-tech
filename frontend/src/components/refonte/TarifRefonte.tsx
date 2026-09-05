import {
  Search,
  RefreshCw,
  Layers3,
  PlusCircle,
} from "lucide-react";

const criteresRefonte = [
  {
    label: "État technique",
    title: "La base existante",
    description:
      "La structure du site, son ancienneté et les éventuelles contraintes techniques influencent le travail nécessaire.",
    icon: Search,
  },
  {
    label: "Intervention",
    title: "L’ampleur de la refonte",
    description:
      "Une reprise ciblée ne demande pas le même travail qu’une refonte importante ou qu’une reconstruction complète.",
    icon: RefreshCw,
  },
  {
    label: "Volume",
    title: "Le contenu à retravailler",
    description:
      "Le nombre de pages, de contenus et d’éléments concernés entre directement dans le chiffrage du projet.",
    icon: Layers3,
  },
  {
    label: "Évolutions",
    title: "Les fonctionnalités prévues",
    description:
      "Les fonctionnalités à adapter, remplacer ou ajouter sont intégrées au périmètre de la refonte.",
    icon: PlusCircle,
  },
];

export default function TarifRefonte() {
  return (
    <section className="section-light section-fade-light-soft section-spacing">
      <div className="site-container">

        {/* Introduction */}

        <div className="section-intro max-w-3xl">
          <p className="section-label">
            Le tarif
          </p>

          <h2>
            Le prix dépend du{" "}
            <span className="text-gradient-blue">
              travail à réaliser
            </span>
          </h2>

          <p>
            Une refonte ne possède pas de tarif unique : son coût dépend
            directement de l’état du site et du périmètre réel du projet.
          </p>
        </div>

        {/* Tarif */}

        <div
          className="
            mt-10
            grid
            gap-8
            lg:grid-cols-[320px_1fr]
            lg:items-start
          "
        >
          {/* Prix */}

          <div className="card-dark card-glow !p-6">
            <p className="section-label !m-0">
              Refonte de site
            </p>

            <h3 className="!mt-3 text-3xl font-bold">
              Sur devis
            </h3>

            <p className="!mt-4 text-slate-300">
              Le tarif est établi après analyse de votre site et définition
              précise des éléments à retravailler.
            </p>
          </div>

          {/* Critères */}

          <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2">
            {criteresRefonte.map(({ label, title, description, icon: Icon }) => (
              <article
                key={title}
                className="
                  group
                  min-w-0
                  border-b
                  border-sky-500/20
                  pb-5
                  sm:last:border-b-0
                "
              >
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
                    {label}
                  </p>
                </div>

                <h3 className="mt-3 text-slate-950">
                  {title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}