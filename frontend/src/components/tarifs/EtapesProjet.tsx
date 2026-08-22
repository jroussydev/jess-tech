import { useEffect, useRef, useState } from "react";

import {
  CheckCircle2,
  FileText,
  MessageSquareText,
  Rocket,
} from "lucide-react";

const etapes = [
  {
    numero: "01",
    titre: "Premier échange",
    description:
      "Vous me présentez votre besoin, votre activité et les objectifs de votre projet.",
    icon: MessageSquareText,
  },
  {
    numero: "02",
    titre: "Devis détaillé",
    description:
      "Je vous transmets une proposition claire avec les prestations prévues, le tarif et les conditions.",
    icon: FileText,
  },
  {
    numero: "03",
    titre: "Réalisation",
    description:
      "Le projet est réalisé selon les éléments définis et les validations prévues.",
    icon: Rocket,
  },
  {
    numero: "04",
    titre: "Validation",
    description:
      "Nous vérifions ensemble le résultat avant la livraison et la mise en ligne.",
    icon: CheckCircle2,
  },
];

export default function EtapesProjet() {
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
        threshold: 0.3,
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
          <p className="section-label">
            Du devis à la réalisation
          </p>

          <h2>
            Un déroulement{" "}
            <span className="text-gradient-blue">
              simple
            </span>{" "}
            et prévisible
          </h2>

          <p className="max-w-2xl ">
            Avant le début du projet, les grandes étapes sont définies afin
            que vous sachiez comment la prestation va se dérouler.
          </p>
        </div>

        {/* Étapes */}
        <div
          className="
            mt-8
            grid
            grid-cols-2
            gap-3

            md:grid-cols-4
            md:gap-8
          "
        >
          {etapes.map((etape, index) => {
            const Icon = etape.icon;

            return (
              <div
                key={etape.numero}
                className="relative min-w-0"
              >
                {/* Carte */}
                <article
  className="
    card-dark
    card-glow
    card-content-mobile
    group
    relative
    z-10
    flex
    h-full
    min-w-0
    flex-col
    !p-4
  "
>
                  {/* Icône + numéro */}
                  <div className="step-card__heading flex items-center gap-3">
  <Icon
    className="
      step-card__icon
      h-7
      w-7
      shrink-0
      text-sky-500
      transition-transform
      duration-300
      group-hover:scale-110
    "
    aria-hidden="true"
  />

  <h3 className="step-card__title text-slate-100">
    {etape.titre}
  </h3>
</div>


                  {/* Description */}
                  <p className="mt-2 text-slate-300">
                    {etape.description}
                  </p>
                </article>

                {/* Flèche interactive */}
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
                      w-8
                      -translate-y-1/2

                      md:flex
                      md:items-center
                    "
                    aria-hidden="true"
                  >
                    <div
                      className={`
                        relative
                        h-[6px]
                        w-[calc(100%_-_8px)]
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
                        transitionDelay: `${index * 450 + 250}ms`,
                      }}
                    >
                      {/* Pointe */}
                      <span
                        className={`
                          absolute
                          left-full
                          top-1/2
                          h-4
                          w-4
                          -translate-x-1
                          -translate-y-1/2
                          bg-blue-300
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
                          transitionDelay: `${index * 450 + 800}ms`,
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}