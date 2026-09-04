import { useEffect, useRef, useState } from "react";
import {
  RefreshCw,
  SearchCheck,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const cycle = [
  {
    title: "Vérifier",
    description:
      "Le site et son environnement sont contrôlés selon le niveau de suivi prévu.",
    icon: SearchCheck,
  },
  {
    title: "Entretenir",
    description:
      "Les mises à jour, sauvegardes et opérations prévues sont réalisées régulièrement.",
    icon: ShieldCheck,
  },
  {
    title: "Intervenir",
    description:
      "Lorsqu’un problème couvert apparaît, une intervention peut être réalisée selon la formule choisie.",
    icon: Wrench,
  },
];

export default function CycleMaintenance() {
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
          <p className="section-label">
            Dans la durée
          </p>

          <h2>
            Une fois la maintenance{" "}
            <span className="text-gradient-blue">
              en place
            </span>
          </h2>

          <p>
            Le suivi de votre site fonctionne comme un cycle : vérifier son
            état, réaliser les opérations nécessaires et intervenir lorsqu’un
            problème apparaît.
          </p>
        </div>

        {/* Cycle */}
<div
  className="
    mt-10
    grid
    gap-4

    lg:grid-cols-3
    lg:gap-x-10
  "
>
  {cycle.map(({ title, description, icon: Icon }, index) => (
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

      {/* Flèche */}
      {index < cycle.length - 1 && (
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
    </div>
  ))}
</div>



        {/* Boucle */}
        <div className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-3 text-center">
          <RefreshCw
            className="h-5 w-5 shrink-0 text-blue-500"
            aria-hidden="true"
          />

          <p className="!m-0 font-semibold text-slate-700">
            Puis le suivi continue selon la formule prévue.
          </p>
        </div>

      </div>
    </section>
  );
}