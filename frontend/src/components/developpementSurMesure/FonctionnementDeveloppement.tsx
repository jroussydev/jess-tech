import { useEffect, useRef, useState } from "react";
import {
  Lightbulb,
  Network,
  Code2,
  PackageCheck,
  ShieldCheck,
  Plus,
} from "lucide-react";

const etapes = [
  {
    title: "Comprendre le besoin",
    description:
      "On commence par ce que vous voulez obtenir et par la façon dont le projet devra être utilisé. La technique vient seulement après.",
    icon: Lightbulb,
  },
  {
    title: "Organiser le fonctionnement",
    description:
      "Les différentes actions, règles et interactions sont précisées pour savoir clairement ce que le projet doit faire.",
    icon: Network,
  },
  {
    title: "Développer",
    description:
      "Une fois le fonctionnement défini, le projet est construit avec les technologies adaptées à ce qu’il doit réellement faire.",
    icon: Code2,
  },
  {
    title: "Tester et livrer",
    description:
      "Le fonctionnement et les principaux parcours sont vérifiés avant de vous remettre le projet et les accès nécessaires.",
    icon: PackageCheck,
  },
];

export default function FonctionnementDeveloppement() {
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
            Du besoin au projet
          </p>

          <h2>
            De votre idée à quelque chose qui{" "}
            <span className="text-gradient-blue">
              fonctionne vraiment
            </span>
          </h2>

          <p>
            Une fois le besoin compris, chaque étape sert à préciser,
            construire puis vérifier le projet avant sa livraison.
          </p>
        </div>

        {/* Déroulement */}

        <div
          className="
            mt-10
            grid
            gap-4
            lg:grid-cols-4
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

        {/* Après la livraison */}

        <div className="mt-14 border-t border-slate-200 pt-10">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">

            {/* Garantie */}

            <div>
              <div className="flex items-center gap-3">
                <ShieldCheck
                  className="h-7 w-7 shrink-0 text-blue-500"
                  aria-hidden="true"
                />

                <h3 className="!m-0 text-slate-950">
                  Garantie corrective de 30 jours
                </h3>
              </div>

              <p className="mt-3">
                Si une anomalie directement liée au développement réalisé
                apparaît après la livraison, elle peut être corrigée sans
                frais pendant les 30 jours prévus.
              </p>
            </div>

            {/* Évolutions */}

            <div>
              <div className="flex items-center gap-3">
                <Plus
                  className="h-7 w-7 shrink-0 text-blue-500"
                  aria-hidden="true"
                />

                <h3 className="!m-0 text-slate-950">
                  Le projet peut continuer à évoluer
                </h3>
              </div>

              <p className="mt-3">
                Une nouvelle idée peut arriver plus tard. D’autres
                fonctionnalités ou modifications pourront être ajoutées dans
                le cadre d’une nouvelle demande.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}