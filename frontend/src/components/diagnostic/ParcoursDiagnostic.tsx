import { useEffect, useRef, useState } from "react";
import {
  Search,
  ScanSearch,
  Crosshair,
  MonitorSmartphone,
  ServerCog,
  Code2,
} from "lucide-react";

const etapes = [
  {
    title: "Constater",
    description:
      "Je commence par reproduire ou observer le problème pour voir dans quelles conditions il apparaît.",
    icon: Search,
  },
  {
    title: "Examiner",
    description:
      "Je regarde ensuite les éléments qui peuvent être liés au problème afin de comprendre ce qui se passe réellement.",
    icon: ScanSearch,
  },
  {
    title: "Identifier",
    description:
      "L’objectif est de trouver l’origine du problème, ou au minimum les éléments qui permettent de savoir quoi faire ensuite.",
    icon: Crosshair,
  },
];

const elementsExamines = [
  {
    title: "Le site et son affichage",
    description:
      "Pages, fonctionnalités, responsive ou comportement selon le navigateur et l’appareil utilisé.",
    icon: MonitorSmartphone,
  },
  {
    title: "Son environnement",
    description:
      "Configuration, hébergement, réglages et autres éléments techniques qui peuvent avoir un impact.",
    icon: ServerCog,
  },
  {
    title: "Le code et les dépendances",
    description:
      "Lorsque c’est nécessaire et accessible, le code, les extensions ou les dépendances concernées peuvent aussi être examinés.",
    icon: Code2,
  },
];

export default function ParcoursDiagnostic() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [animationVisible, setAnimationVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        section-light
        section-fade-light-soft
        section-spacing
      "
    >
      <div className="site-container">

        {/* Introduction */}

        <div className="section-intro max-w-3xl">
          <p className="section-label">
            L’analyse
          </p>

          <h2>
            Du problème visible à{" "}
            <span className="text-gradient-blue">
              ce qui le provoque
            </span>
          </h2>

          <p>
            Le diagnostic part de ce que vous voyez sur votre site, puis
            cherche progressivement ce qui peut expliquer ce comportement.
          </p>
        </div>

        {/* Parcours */}

        <div
          className="
            mt-10
            grid
            gap-4
            lg:grid-cols-3
            lg:gap-x-10
          "
        >
          {etapes.map(({ title, description, icon: Icon }, index) => (
            <div
              key={title}
              className="relative"
            >
              {/* Carte */}

              <article
                className="
                  card-dark
                  card-glow
                  group
                  relative
                  z-10
                  flex
                  h-full
                  flex-col
                  !p-5
                "
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className="
                      h-7
                      w-7
                      shrink-0
                      text-blue-400
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                    aria-hidden="true"
                  />

                  <h3 className="!m-0 text-white">
                    {title}
                  </h3>
                </div>

                <p className="!mt-3 text-slate-300">
                  {description}
                </p>

                <div
                  className="mt-auto pt-4"
                  aria-hidden="true"
                >
                  <div className="h-px rounded-full bg-gradient-to-r from-sky-500/50 to-transparent" />
                </div>
              </article>

              {/* Flèche animée */}

              {index < etapes.length - 1 && (
                <div
                  className="
                    pointer-events-none
                    absolute
                    left-full
                    top-1/2
                    z-20
                    hidden
                    h-8
                    w-10
                    -translate-y-1/2
                    lg:flex
                    lg:items-center
                  "
                  aria-hidden="true"
                >
                  <div
                    className={`
                      relative
                      h-[7px]
                      w-[calc(100%_-_10px)]
                      origin-left
                      rounded-full
                      bg-gradient-to-r
                      from-[#0D5BFF]
                      via-blue-500
                      to-blue-300
                      shadow-[0_0_10px_rgba(13,91,255,0.55)]
                      transition-transform
                      duration-700
                      ease-out
                      ${
                        animationVisible
                          ? "scale-x-100"
                          : "scale-x-0"
                      }
                    `}
                    style={{
                      transitionDelay: `${index * 550 + 300}ms`,
                    }}
                  >
                    {/* Pointe */}

                    <span
                      className={`
                        absolute
                        left-full
                        top-1/2
                        h-5
                        w-5
                        -translate-x-1
                        -translate-y-1/2
                        bg-blue-300
                        drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]
                        transition-all
                        duration-300
                        ${
                          animationVisible
                            ? "scale-100 opacity-100"
                            : "scale-0 opacity-0"
                        }
                      `}
                      style={{
                        clipPath:
                          "polygon(0 0, 100% 50%, 0 100%)",
                        transitionDelay: `${index * 550 + 850}ms`,
                      }}
                    />

                    {/* Impulsion */}

                    {animationVisible && (
                      <span
                        className="
                          services-project-pulse
                          absolute
                          left-0
                          top-1/2
                          h-3
                          w-3
                          -translate-y-1/2
                          rounded-full
                          bg-white
                          shadow-[0_0_12px_#ffffff,0_0_20px_#60a5fa]
                        "
                        style={{
                          animationDelay: `${index * 350 + 450}ms`,
                        }}
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Ce qui peut être examiné */}

        <div className="mt-14 border-t border-slate-200 pt-10">
          <div className="mb-8 max-w-3xl">
            <p className="section-label !mt-0">
              Selon le problème
            </p>

            <h3 className="text-slate-950">
              Plusieurs éléments peuvent être vérifiés
            </h3>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {elementsExamines.map(
              ({ title, description, icon: Icon }) => (
                <article
                  key={title}
                  className="group"
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className="
                        h-7
                        w-7
                        shrink-0
                        text-blue-500
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                      aria-hidden="true"
                    />

                    <h3 className="!m-0 text-slate-950">
                      {title}
                    </h3>
                  </div>

                  <p className="mt-3">
                    {description}
                  </p>
                </article>
              ),
            )}
          </div>
        </div>

      </div>
    </section>
  );
}