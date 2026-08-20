import { useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
  FileText,
  MessageSquareText,
  Rocket,
  Search,
} from "lucide-react";

const etapes = [
  {
    numero: "01",
    titre: "Premier échange",
    description:
      "Vous m’expliquez votre besoin, votre situation et les objectifs de votre projet.",
    icon: MessageSquareText,
  },
  {
    numero: "02",
    titre: "Analyse du besoin",
    description:
      "J’étudie les informations reçues afin d’identifier la solution la plus adaptée.",
    icon: Search,
  },
  {
    numero: "03",
    titre: "Proposition et devis",
    description:
      "Vous recevez une proposition claire avec les prestations prévues, le tarif et les délais.",
    icon: FileText,
  },
  {
    numero: "04",
    titre: "Réalisation",
    description:
      "Le projet est réalisé selon les éléments définis, avec des échanges aux étapes importantes.",
    icon: Rocket,
  },
  {
    numero: "05",
    titre: "Validation et suivi",
    description:
      "Le résultat est vérifié avec vous avant la livraison, puis je reste disponible si nécessaire.",
    icon: CheckCircle2,
  },
];

const positionsEtapes = [
  "xl:col-start-1 xl:row-start-1",
  "xl:col-start-2 xl:row-start-1",
  "xl:col-start-3 xl:row-start-1",
  "xl:col-start-3 xl:row-start-2",
  "xl:col-start-2 xl:row-start-2",
];

export default function ServicesDeroulementProjet() {
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
      className="section-light section-fade-light-soft section-spacing"
    >
      <div className="site-container">
        {/* Introduction */}
        <div className="section-intro max-w-3xl">
          <p className="section-label">Un accompagnement clair</p>

          <h2>
            Comment se déroule un{" "}
            <span className="text-gradient-blue">projet</span> ?
          </h2>

          <p>
            Chaque prestation possède ses particularités, mais l’organisation
            générale reste simple. Vous savez où en est votre projet et ce qui
            est prévu à chaque étape.
          </p>
        </div>

        {/* Parcours du projet */}
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-10 xl:gap-y-10">
          {etapes.map(
            ({ numero, titre, description, icon: Icon }, index) => (
              <div
                key={numero}
                className={`relative ${positionsEtapes[index]}`}
              >
                {/* Carte */}
                <article
                  className="
                    card-dark
                    card-glow
                    relative
                    z-10
                    flex
                    h-full
                    flex-col
                    text-left
                  "
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                      <Icon
                        className="h-10 w-10 text-sky-500"
                        aria-hidden="true"
                      />
                    </div>

                    <h3>{titre}</h3>
                  </div>

                  <p className="mt-3 text-slate-300">
                    {description}
                  </p>

                  <div
                    className="mt-auto pt-4"
                    aria-hidden="true"
                  >
                    <div className="h-px rounded-full bg-gradient-to-r from-sky-500/50 to-transparent" />
                  </div>
                </article>

                {/* Flèches horizontales : 01 → 02 et 02 → 03 */}
                {index < 2 && (
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
                      xl:flex
                      xl:items-center
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
                          clipPath: "polygon(0 0, 100% 50%, 0 100%)",
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

                {/* Flèche descendante : 03 → 04 */}
                {index === 2 && (
                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-1/2
                      top-full
                      z-20
                      hidden
                      h-10
                      w-8
                      -translate-x-1/2
                      xl:flex
                      xl:justify-center
                    "
                    aria-hidden="true"
                  >
                    <div
                      className={`
                        relative
                        h-[calc(100%_-_10px)]
                        w-[7px]
                        origin-top
                        rounded-full
                        bg-gradient-to-b
                        from-[#0D5BFF]
                        via-blue-500
                        to-blue-300
                        shadow-[0_0_10px_rgba(13,91,255,0.55)]
                        transition-transform
                        duration-700
                        ease-out
                        ${
                          animationVisible
                            ? "scale-y-100"
                            : "scale-y-0"
                        }
                      `}
                      style={{
                        transitionDelay: "1450ms",
                      }}
                    >
                      {/* Pointe */}
                      <span
                        className={`
                          absolute
                          left-1/2
                          top-full
                          h-5
                          w-5
                          -translate-x-1/2
                          -translate-y-1
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
                          clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                          transitionDelay: "2050ms",
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* Flèche inversée : 04 → 05 */}
                {index === 3 && (
                  <div
                    className="
                      pointer-events-none
                      absolute
                      right-full
                      top-1/2
                      z-20
                      hidden
                      h-8
                      w-10
                      -translate-y-1/2
                      rotate-180
                      xl:flex
                      xl:items-center
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
                        transitionDelay: "2300ms",
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
                          clipPath: "polygon(0 0, 100% 50%, 0 100%)",
                          transitionDelay: "2900ms",
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            ),
          )}

          {/* Note de fin */}
          <div
            className="
              hidden
              xl:col-start-1
              xl:row-start-2
              xl:flex
              xl:items-center
            "
          >
            <div className="max-w-sm p-5">
              <p className="text-sm leading-7 text-slate-500">
                Selon la prestation choisie, certaines étapes peuvent être plus
                rapides ou adaptées. Une assistance ponctuelle ne suit
                naturellement pas le même rythme qu’une création complète de
                site internet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}