import { useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
  FileText,
  MessageSquareText,
  Rocket,
  Search,
} from "lucide-react";

export default function ServicesDeroulementProjet() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [animationVisible, setAnimationVisible] = useState(false);

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
      className="section-light section-spacing"
    >
      <div className="site-container">
        <div className="section-intro max-w-3xl">
          <p className="section-label">Un accompagnement clair</p>

          <h2>Comment se déroule un projet ?</h2>

          <p>
            Chaque prestation possède ses particularités, mais l’organisation
            générale reste simple. Vous savez où en est votre projet et ce qui
            est prévu à chaque étape.
          </p>
        </div>

<div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5 xl:gap-14">
  {etapes.map(({ numero, titre, description, icon: Icon }, index) => (
    <div key={numero} className="relative">
      <article className="card-light relative z-10 flex h-full flex-col">
        <div className="flex items-center justify-between gap-4">
          <span className="text-3xl font-black text-blue-500">
            {numero}
          </span>

          <Icon
            className="h-7 w-7 text-blue-500"
            aria-hidden="true"
          />
        </div>

        <h3 className="mt-6">{titre}</h3>

        <p>{description}</p>
      </article>

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
      w-14
      -translate-y-1/2
      xl:flex
      xl:items-center
    "
    aria-hidden="true"
  >
    {/* Point de départ */}
    <span
      className={`
        absolute
        left-0
        top-1/2
        z-20
        h-3
        w-3
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-[#0D5BFF]
        shadow-[0_0_12px_rgba(13,91,255,0.8)]
        transition-all
        duration-300
        ${
          animationVisible
            ? "scale-100 opacity-100"
            : "scale-0 opacity-0"
        }
      `}
      style={{
        transitionDelay: `${index * 550 + 250}ms`,
      }}
    />

    {/* Corps de la flèche */}
    <div
      className={`
        relative
        h-[6px]
        w-[calc(100%-12px)]
        origin-left
        rounded-l-full
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
      {/* Pointe pleine */}
      <span
        className={`
          absolute
          left-full
          top-1/2
          h-6
          w-6
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

<p className="mt-8 max-w-4xl leading-7 text-slate-600">
  Selon la prestation choisie, certaines étapes peuvent être plus
  rapides ou adaptées. Une assistance ponctuelle ne suit naturellement
  pas le même rythme qu’une création complète de site internet.
</p>
      </div>
    </section>
  );
}