import {
  KeyRound,
  ServerCog,
  Images,
  ListChecks,
} from "lucide-react";

const etapes = [
  {
    title: "Les accès nécessaires",
    description:
      "Les accès à l’administration du site doivent pouvoir être fournis afin d’examiner l’existant et d’intervenir dans de bonnes conditions.",
    icon: KeyRound,
  },
  {
    title: "L’environnement technique",
    description:
      "Selon le site, l’accès à l’hébergement, au nom de domaine ou à certains services peut également être nécessaire pour préparer la refonte.",
    icon: ServerCog,
  },
  {
    title: "Les nouveaux contenus",
    description:
      "Les textes, photos, documents ou autres éléments prévus pour la nouvelle version peuvent être transmis lorsqu’ils sont déjà disponibles.",
    icon: Images,
  },
  {
    title: "Vos priorités",
    description:
      "Quelques indications sur ce que vous souhaitez améliorer en priorité permettent de mieux cadrer la refonte dès le départ.",
    icon: ListChecks,
  },
];

export default function PreparationRefonte() {
  return (
    <section
      className="
        section-dark
        section-fade-dark-soft
        section-spacing
      "
    >
      <div className="site-container">

        <div
          className="
            grid
            gap-10
            lg:grid-cols-[0.75fr_1.25fr]
            lg:gap-16
          "
        >
          {/* Introduction */}

          <div>
            <p className="section-label">
              Avant de commencer
            </p>

            <h2>
              Préparer{" "}
              <span className="text-gradient-blue">
                la refonte
              </span>
            </h2>

            <p className="max-w-xl text-slate-300">
              Quelques éléments suffisent pour comprendre votre situation,
              accéder au site et préparer correctement le début du projet.
            </p>
          </div>

          {/* Étapes */}

          <div>
            {etapes.map(({ title, description, icon: Icon }, index) => (
              <article
                key={title}
                className="
                  group
                  relative
                  grid
                  grid-cols-[auto_1fr]
                  gap-5
                  pb-10
                  last:pb-0
                "
              >
                {/* Icône + ligne */}

                <div className="relative">
                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-blue-500/25
                      bg-[#081120]
                      transition
                      duration-300
                      group-hover:border-blue-400/60
                      group-hover:shadow-[0_0_22px_rgba(13,91,255,0.22)]
                    "
                  >
                    <Icon
                      className="h-5 w-5 text-blue-400"
                      aria-hidden="true"
                    />
                  </div>

                  {index !== etapes.length - 1 && (
                    <div
                      className="
                        absolute
                        left-1/2
                        top-12
                        h-[calc(100%-3rem)]
                        w-px
                        -translate-x-1/2
                        bg-gradient-to-b
                        from-blue-500/50
                        to-blue-500/10
                      "
                    />
                  )}
                </div>

                {/* Contenu */}

                <div className="pt-1">
                  <h3 className="!mt-0 text-white">
                    {title}
                  </h3>

                  <p className="!mt-2 text-slate-300">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Information complémentaire */}

        <div className="mx-auto mt-14 max-w-3xl text-center">
          <h3 className="text-white">
            Vous n’avez pas encore tout préparé ?
          </h3>

          <p className="mx-auto max-w-2xl text-slate-300">
            Ce n’est pas un problème. Les éléments réellement nécessaires
            peuvent être définis ensemble selon votre site et le niveau de
            refonte envisagé.
          </p>
        </div>

      </div>
    </section>
  );
}