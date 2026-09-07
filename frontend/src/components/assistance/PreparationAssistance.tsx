import {
  KeyRound,
  Laptop,
  MessageSquareText,
  TriangleAlert,
} from "lucide-react";

const etapes = [
  {
    title: "Ce dont vous avez besoin",
    description:
      "Expliquez simplement ce qui ne fonctionne pas, ce que vous souhaitez installer ou ce que vous aimeriez apprendre à utiliser.",
    icon: MessageSquareText,
  },
  {
    title: "Le matériel concerné",
    description:
      "Ordinateur, imprimante, box, équipement réseau ou autre appareil : quelques informations permettent déjà de mieux préparer l’intervention.",
    icon: Laptop,
  },
  {
    title: "Les messages ou détails utiles",
    description:
      "S’il y a un message d’erreur, un comportement particulier ou quelque chose qui apparaît à l’écran, une capture ou quelques précisions peuvent aider.",
    icon: TriangleAlert,
  },
  {
    title: "Les accès nécessaires",
    description:
      "Certains comptes, logiciels ou paramètres peuvent demander un accès pendant l’intervention. Ils ne sont demandés que lorsqu’ils sont réellement utiles.",
    icon: KeyRound,
  },
];

export default function PreparationAssistance() {
  return (
    <section
      className="
        section-light
        section-fade-light-soft
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
              Avant l’intervention
            </p>

            <h2>
              Quelques informations pour{" "}
              <span className="text-gradient-blue">
                commencer simplement
              </span>
            </h2>

            <p className="max-w-xl">
              Pas besoin de tout connaître ni de savoir d’où vient le problème.
              Quelques détails sur votre besoin et le matériel concerné
              suffisent déjà pour préparer la suite.
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
                      bg-white
                      transition
                      duration-300
                      group-hover:border-blue-400/60
                      group-hover:shadow-[0_0_22px_rgba(13,91,255,0.16)]
                    "
                  >
                    <Icon
                      className="h-5 w-5 text-blue-500"
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
                        from-blue-500/40
                        to-blue-500/10
                      "
                    />
                  )}
                </div>

                {/* Contenu */}

                <div className="pt-1">
                  <h3 className="!mt-0 text-slate-950">
                    {title}
                  </h3>

                  <p className="!mt-2 text-slate-600">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Information complémentaire */}

        <div className="mx-auto mt-14 max-w-3xl text-center">
          <h3 className="text-slate-950">
            Vous ne savez pas exactement ce qu’il faut prévoir ?
          </h3>

          <p className="mx-auto max-w-2xl">
            Ce n’est pas gênant. Commencez simplement par m’expliquer votre
            besoin, et on verra ensemble ce qui est nécessaire pour
            l’intervention.
          </p>
        </div>

      </div>
    </section>
  );
}