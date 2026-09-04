import {
  KeyRound,
  MonitorCog,
  SearchCheck,
  SlidersHorizontal,
} from "lucide-react";

const etapes = [
  {
    title: "Les accès nécessaires",
    description:
      "Les accès nécessaires à l’administration du site, à l’hébergement ou aux outils concernés doivent pouvoir être fournis selon les interventions à réaliser.",
    icon: KeyRound,
  },
  {
    title: "L’environnement du site",
    description:
      "CMS, extensions, thème, hébergement ou développement spécifique : connaître l’environnement permet de déterminer dans quelles conditions le site peut être suivi.",
    icon: MonitorCog,
  },
  {
    title: "L’état actuel du site",
    description:
      "Lorsqu’un site existe déjà, son état peut nécessiter une première vérification avant la mise en place d’une maintenance régulière.",
    icon: SearchCheck,
  },
  {
    title: "Le besoin de suivi",
    description:
      "Un entretien régulier, quelques interventions dans l’année ou un besoin ponctuel ne demandent pas le même type de suivi.",
    icon: SlidersHorizontal,
  },
];

export default function PreparationMaintenance() {
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
          <div className="">
            <p className="section-label">
              Avant de commencer
            </p>

            <h2>
              Avant de prendre en charge{" "}
              <span className="text-gradient-blue">
                votre site
              </span>
            </h2>

            <p className="max-w-xl text-slate-300">
              Un site existant doit d’abord être regardé dans son environnement
              actuel afin de déterminer comment sa maintenance peut être mise
              en place.
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
            Votre site n’a pas été créé par Jess Tech ?
          </h3>

          <p className="mx-auto max-w-2xl text-slate-300">
            Ce n’est pas forcément un problème. Sa prise en charge dépend de
            son environnement technique et de son état au moment de
            l’intervention.
          </p>
        </div>

      </div>
    </section>
  );
}