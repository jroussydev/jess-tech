import {
  Target,
  Users,
  ListChecks,
  Boxes,
} from "lucide-react";

const etapes = [
  {
    title: "Ce que vous voulez obtenir",
    description:
      "Expliquez-moi simplement ce que vous aimeriez pouvoir faire avec votre site, votre outil ou votre fonctionnalité. Pas besoin de connaître la solution technique.",
    icon: Target,
  },
  {
    title: "Qui va l’utiliser",
    description:
      "Clients, visiteurs, membres ou équipe interne : savoir qui utilisera le projet aide à mieux prévoir les parcours et les accès nécessaires.",
    icon: Users,
  },
  {
    title: "Les règles importantes",
    description:
      "S’il y a des conditions particulières, des étapes précises, des calculs ou des actions qui dépendent les unes des autres, on les définit ensemble.",
    icon: ListChecks,
  },
  {
    title: "Ce qui existe déjà",
    description:
      "Si le projet doit fonctionner avec un site, des données ou un service déjà existant, on regarde simplement ce qu’il faudra récupérer ou connecter.",
    icon: Boxes,
  },
];

export default function PreparationDeveloppement() {
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
              Avant de développer
            </p>

            <h2>
              Pas besoin d’avoir{" "}
              <span className="text-gradient-blue">
                tout prévu
              </span>
            </h2>

            <p className="max-w-xl text-slate-300">
              Une idée, un besoin ou même un problème à résoudre suffit déjà
              pour commencer à en discuter. Le reste se précise ensuite
              pendant le cadrage du projet.
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
            Votre idée n’est pas encore complètement définie ?
          </h3>

          <p className="mx-auto max-w-2xl text-slate-300">
            Ce n’est pas gênant. Le but du premier échange est justement de
            comprendre ce que vous voulez obtenir avant de réfléchir à la
            manière de le construire.
          </p>
        </div>

      </div>
    </section>
  );
}