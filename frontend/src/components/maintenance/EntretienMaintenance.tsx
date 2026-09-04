import {
  Activity,
  Eye,
  RefreshCw,
  Save,
} from "lucide-react";

const elements = [
  {
    title: "Les mises à jour",
    description:
      "Les composants techniques d’un site évoluent avec le temps. Les maintenir à jour permet de conserver un environnement correctement entretenu.",
    icon: RefreshCw,
  },
  {
    title: "Les sauvegardes",
    description:
      "Elles permettent de disposer d’une copie du site pouvant servir de point de retour lorsqu’une restauration devient nécessaire.",
    icon: Save,
  },
  {
    title: "Le fonctionnement",
    description:
      "Les principales parties du site peuvent être vérifiées afin de repérer un problème apparu depuis la dernière intervention.",
    icon: Activity,
  },
  {
    title: "La surveillance",
    description:
      "Selon la formule choisie, le site bénéficie du niveau de suivi prévu dans la prestation.",
    icon: Eye,
  },
];

export default function EntretienMaintenance() {
  return (
    <section className="section-light section-fade-light-soft section-spacing">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

          {/* Introduction */}
          <div className="section-intro">
            <p className="section-label">
              Dans le temps
            </p>

            <h2>
              Ce qui continue de vivre{" "}
              <span className="text-gradient-blue">
                après la mise en ligne
              </span>
            </h2>

            <p>
              Même une fois terminé, un site continue d’évoluer techniquement.
              Certains éléments doivent être entretenus, vérifiés ou
              sauvegardés afin de conserver un environnement correctement
              suivi.
            </p>

            <p className="mt-5 !text-sm text-slate-500">
              Le niveau de suivi dépend de la formule de maintenance choisie.
            </p>
          </div>

          {/* Éléments suivis */}
          <div className="divide-y divide-slate-200">
            {elements.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="
                  group
                  flex
                  items-start
                  gap-4
                  py-6
                  first:pt-0
                  last:pb-0
                "
              >
                <Icon
                  className="
                    mt-1
                    h-6
                    w-6
                    shrink-0
                    text-blue-500
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:text-blue-600
                  "
                  aria-hidden="true"
                />

                <div className="min-w-0">
                  <h3>
                    {title}
                  </h3>

                  <p className="!mt-2">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}