import {
  KeyRound,
  ArchiveRestore,
  PencilRuler,
  PlusCircle,
  MessageCircle,
} from "lucide-react";

const preparationRefonte = [
  {
    number: "01",
    title: "Les accès au site",
    description:
      "Les accès nécessaires permettent d’examiner le site, son administration et les éléments qui devront être repris pendant la refonte.",
    icon: KeyRound,
  },
  {
    number: "02",
    title: "Ce que vous souhaitez conserver",
    description:
      "Certaines pages, textes, photos, couleurs ou fonctionnalités vous conviennent encore ? Les identifier permet de ne pas refaire inutilement ce qui peut continuer à servir.",
    icon: ArchiveRestore,
  },
  {
    number: "03",
    title: "Ce que vous souhaitez changer",
    description:
      "Design, organisation, contenus, affichage mobile, navigation… Vous pouvez simplement m’indiquer ce qui vous gêne aujourd’hui, même si vous ne savez pas encore comment le corriger.",
    icon: PencilRuler,
  },
  {
    number: "04",
    title: "Les nouveautés à intégrer",
    description:
      "Si votre activité a évolué depuis la création du site, la refonte peut aussi intégrer de nouveaux textes, visuels, services, pages ou fonctionnalités prévus dans le projet.",
    icon: PlusCircle,
  },
];

export default function PreparationRefonte() {
  return (
    <section className="section-dark section-spacing">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          {/* Introduction */}
          <div className="section-intro">
            <p className="section-label">
              Avant la refonte
            </p>

            <h2>
              Pour commencer, il faut regarder l’existant.
            </h2>

            <p>
              Avant de modifier le site, j’ai besoin de comprendre ce que vous
              souhaitez garder, ce qui ne vous convient plus et ce que la
              nouvelle version doit apporter.
            </p>
          </div>

          {/* Étapes */}
          <div className="space-y-8">
            {preparationRefonte.map(
              ({ number, title, description, icon: Icon }) => (
                <article
                  key={number}
                  className="
                    group
                    grid
                    grid-cols-[auto_1fr]
                    gap-5
                    border-b
                    border-slate-700/70
                    pb-8
                    last:border-b-0
                  "
                >
                  {/* Numéro / icône */}
                  <div className="flex flex-col items-center gap-2">
                    <span className="font-semibold text-blue-400/70">
                      {number}
                    </span>

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-blue-500/30
                        text-blue-400
                        transition
                        duration-300
                        group-hover:border-blue-400/60
                        group-hover:scale-110
                      "
                    >
                      <Icon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Contenu */}
                  <div>
                    <h3 className="!mt-0">
                      {title}
                    </h3>

                    <p className="text-slate-300">
                      {description}
                    </p>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>

        {/* Message de fin */}
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
          <MessageCircle
            className="mt-1 h-6 w-6 shrink-0 text-blue-400"
            aria-hidden="true"
          />

          <p className="!mt-0 text-slate-300">
            <strong className="text-white">
              Vous n’avez pas besoin de savoir précisément ce qu’il faut
              refaire avant de me contacter.
            </strong>{" "}
            Votre retour sur le site actuel permet déjà de commencer à
            identifier les changements à prévoir.
          </p>
        </div>
      </div>
    </section>
  );
}