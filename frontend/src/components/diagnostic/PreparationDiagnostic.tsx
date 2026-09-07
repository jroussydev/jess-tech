import {
  Clock3,
  KeyRound,
  MessageSquareText,
  TriangleAlert,
} from "lucide-react";

const etapes = [
  {
    title: "Ce que vous constatez",
    description:
      "Expliquez simplement ce qui ne fonctionne plus, ce qui vous paraît étrange ou ce qui a changé sur votre site.",
    icon: MessageSquareText,
  },
  {
    title: "Les messages ou captures utiles",
    description:
      "S’il y a un message d’erreur ou quelque chose de visible à l’écran, une capture peut déjà donner de bonnes indications.",
    icon: TriangleAlert,
  },
  {
    title: "Quand le problème apparaît",
    description:
      "Précisez si possible s’il est permanent, s’il arrive seulement dans certaines situations ou depuis un changement récent.",
    icon: Clock3,
  },
  {
    title: "Les accès nécessaires",
    description:
      "Selon le problème, certains accès au site, à son administration ou à son hébergement peuvent être nécessaires pour aller plus loin dans l’analyse.",
    icon: KeyRound,
  },
];

export default function PreparationDiagnostic() {
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
              Pour commencer
            </p>

            <h2>
              Quelques informations peuvent déjà{" "}
              <span className="text-gradient-blue">
                beaucoup aider
              </span>
            </h2>

            <p className="max-w-xl text-slate-300">
              Vous n’avez pas besoin de connaître la cause du problème.
              Quelques détails sur ce que vous observez suffisent souvent
              pour commencer l’analyse.
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
            Vous n’avez pas toutes ces informations ?
          </h3>

          <p className="mx-auto max-w-2xl text-slate-300">
            Ce n’est pas bloquant. Commencez simplement par me montrer ou
            m’expliquer ce qui se passe, et on verra ensuite ce qui est
            nécessaire pour poursuivre l’analyse.
          </p>
        </div>

      </div>
    </section>
  );
}