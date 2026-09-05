import {
  ArchiveRestore,
  PencilRuler,
  Replace,
  DatabaseBackup,
} from "lucide-react";

const devenirExistant = [
  {
    number: "01",
    label: "Conserver",
    title: "Ce qui fonctionne encore",
    description:
      "Textes, photos, identité visuelle, certaines pages ou fonctionnalités peuvent être repris dans la nouvelle version lorsqu’ils correspondent toujours à vos besoins et restent exploitables.",
    icon: ArchiveRestore,
  },
  {
    number: "02",
    label: "Retravailler",
    title: "Ce qui peut encore servir",
    description:
      "Un élément n’a pas forcément besoin d’être supprimé pour être amélioré. Sa présentation, son emplacement ou son organisation peuvent être revus pendant la refonte.",
    icon: PencilRuler,
  },
  {
    number: "03",
    label: "Remplacer",
    title: "Ce qui ne convient plus",
    description:
      "Certains éléments peuvent être devenus trop anciens, incompatibles avec la nouvelle structure ou simplement ne plus correspondre à votre activité. Dans ce cas, leur remplacement peut être prévu dans la refonte.",
    icon: Replace,
  },
];

export default function ExistantRefonte() {
  return (
    <section className="section-light section-spacing">
      <div className="site-container">
        {/* Introduction */}
        <div className="section-intro">
          <p className="section-label">
            Votre site actuel
          </p>

          <h2>
            On ne repart pas forcément de zéro.
          </h2>

          <p>
            Une refonte commence par regarder ce qui existe déjà. Certains
            éléments peuvent encore parfaitement convenir, tandis que d’autres
            devront être modifiés ou remplacés pour construire la nouvelle
            version.
          </p>
        </div>

        {/* Conserver / Retravailler / Remplacer */}
        <div className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-12">
          {devenirExistant.map(
            ({ number, label, title, description, icon: Icon }) => (
              <article
                key={number}
                className="group relative"
              >
                {/* Grand numéro décoratif */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    -top-6
                    right-0
                    select-none
                    !text-7xl
                    font-bold
                    text-blue-500/5
                    md:!text-8xl
                  "
                  aria-hidden="true"
                >
                  {number}
                </span>

                {/* Icône */}
                <div
                  className="
                    relative
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-blue-500/20
                    bg-blue-500/5
                    text-blue-500
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <Icon
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </div>

                {/* Contenu */}
                <p
                  className="
                    relative
                    mt-6
                    font-semibold
                    uppercase
                    tracking-widest
                    text-blue-500
                  "
                >
                  {label}
                </p>

                <h3 className="relative mt-2">
                  {title}
                </h3>

                <p className="relative">
                  {description}
                </p>
              </article>
            ),
          )}
        </div>

        {/* Sauvegarde */}
        <div
          className="
            mt-14
            flex
            max-w-4xl
            items-start
            gap-4
            border-l-2
            border-blue-500
            pl-5
          "
        >
          <DatabaseBackup
            className="mt-1 h-6 w-6 shrink-0 text-blue-500"
            aria-hidden="true"
          />

          <div>
            <h3 className="!mt-0">
              Et avant de modifier l’existant ?
            </h3>

            <p>
              Avant une intervention importante, une sauvegarde du site peut
              être nécessaire afin de disposer d’un point de retour en cas de
              problème. Elle est définie selon la situation et peut faire
              l’objet d’une prestation complémentaire.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}