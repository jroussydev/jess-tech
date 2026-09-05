import { useEffect, useRef, useState } from "react";
import {
  PencilRuler,
  RefreshCw,
  PanelsTopLeft,
  SearchCheck,
} from "lucide-react";

const niveauxRefonte = [
  {
    label: "Reprendre",
    title: "Une reprise ciblée",
    description:
      "Une ou plusieurs parties du site peuvent être retravaillées sans toucher inutilement au reste : une page, l’affichage mobile, certains contenus ou quelques éléments visuels.",
    icon: PencilRuler,
  },
  {
    label: "Remanier",
    title: "Une refonte plus importante",
    description:
      "Lorsque plusieurs parties ne conviennent plus, l’apparence, l’organisation ou différentes pages peuvent être revues tout en conservant une base encore exploitable.",
    icon: RefreshCw,
  },
  {
    label: "Reconstruire",
    title: "Repartir sur une nouvelle base",
    description:
      "Si la structure existante est devenue trop limitée ou trop ancienne, reconstruire le site peut être plus pertinent que d’accumuler les corrections.",
    icon: PanelsTopLeft,
  },
];

export default function NiveauRefonte() {
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
      className="section-dark section-fade-dark-soft section-spacing"
    >
      <div className="site-container">

        {/* Introduction */}

        <div className="section-intro max-w-3xl">
          <p className="section-label">
            L’ampleur de la refonte
          </p>

          <h2>
            Jusqu’où faut-il{" "}
            <span className="text-gradient-blue">
              refaire votre site
            </span>{" "}
            ?
          </h2>

          <p>
            Une refonte n’implique pas forcément de reconstruire tout le site.
            L’état de l’existant permet de déterminer le niveau
            d’intervention réellement nécessaire.
          </p>
        </div>

        {/* Niveaux */}

        <div
          className="
            mt-10
            grid
            gap-4
            lg:grid-cols-3
            lg:gap-x-10
          "
        >
          {niveauxRefonte.map(
            ({ label, title, description, icon: Icon }, index) => (
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
                  {/* Icône + label */}

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

                    <p className="section-label !m-0">
                      {label}
                    </p>
                  </div>

                  {/* Contenu */}

                  <h3 className="mt-4 text-white">
                    {title}
                  </h3>

                  <p className="!mt-3 text-slate-300">
                    {description}
                  </p>

                  {/* Trait décoratif */}

                  <div
                    className="mt-auto pt-4"
                    aria-hidden="true"
                  >
                    <div className="h-px rounded-full bg-gradient-to-r from-sky-500/50 to-transparent" />
                  </div>
                </article>

                {/* Flèche animée */}

                {index < niveauxRefonte.length - 1 && (
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

                      {/* Impulsion lumineuse */}

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
            ),
          )}
        </div>

        {/* Conclusion */}

        <div className="mx-auto mt-10 flex max-w-3xl items-start gap-4">
          <SearchCheck
            className="mt-1 h-6 w-6 shrink-0 text-blue-400"
            aria-hidden="true"
          />

          <p className="!m-0 text-slate-300">
            <strong className="text-white">
              Le niveau de refonte est déterminé après examen du site.
            </strong>{" "}
            Le but est de reprendre ce qui en a réellement besoin, sans
            reconstruire inutilement ce qui fonctionne déjà.
          </p>
        </div>

      </div>
    </section>
  );
}