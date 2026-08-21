import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiWordpress,
  SiJavascript,
} from "react-icons/si";
import AnimatedCardBorder from "../decorations/AnimatedCardBorder";

const technologies = [
  {
    icon: SiReact,
    name: "React",
    description:
      "Pour créer des interfaces modernes, fluides et faciles à faire évoluer.",
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
    description:
      "Pour écrire un code plus fiable, plus clair et plus simple à maintenir.",
  },
  {
    icon: SiJavascript,
    name: "JavaScript",
    description:
      "Pour donner vie aux interfaces, créer des interactions et développer des fonctionnalités web modernes.",
  },
  {
    icon: SiNodedotjs,
    name: "Node.js",
    description:
      "Pour développer des fonctionnalités sur mesure et connecter les différentes parties d’un projet.",
  },
  {
    icon: SiPostgresql,
    name: "PostgreSQL",
    description:
      "Pour organiser et gérer les données de manière robuste et structurée.",
  },
  {
    icon: SiWordpress,
    name: "WordPress",
    description:
      "Pour concevoir des sites vitrines administrables et adaptés aux besoins courants.",
  },
];

const AboutTechnologies = () => {
  return (
    <section
      className="
        section-dark
        section-fade-dark-soft
        section-spacing
      "
    >
      <div className="site-container">
        {/* Introduction */}
        <div className="section-intro">
          <p className="section-label">
            Technologies
          </p>

          <h2>
            Des outils choisis selon les{" "}
            <span className="text-gradient-blue">
              besoins
            </span>{" "}
            du projet
          </h2>

          <p className="max-w-4xl text-slate-300">
            Je ne choisis pas une technologie parce qu’elle est à la mode.
            <br />
            Je privilégie les outils les plus cohérents avec vos besoins, votre
            budget et les évolutions prévues.
          </p>
        </div>

        {/* Technologies */}
<div className="mt-12 grid gap-5 grid-cols-2 lg:mt-16 lg:grid-cols-4">
  {technologies.map((technology) => {
    const Icon = technology.icon;

    return (
      <article
        key={technology.name}
        className="
          card-dark
          card-glow
          group
          relative
          flex
          h-full
          flex-col
          overflow-hidden
        "
      >
        <AnimatedCardBorder/>
        {/* Icône + titre */}
        <div className="flex items-center gap-3">
          <Icon
            className="
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

          <h3 className="text-white">
            {technology.name}
          </h3>
        </div>

        {/* Description */}
        <p className="mt-3 text-slate-300">
          {technology.description}
        </p>
      </article>
    );
  })}
</div>
      </div>
    </section>
  );
};

export default AboutTechnologies;