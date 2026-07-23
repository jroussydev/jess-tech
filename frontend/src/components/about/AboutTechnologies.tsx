import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiWordpress,
  SiJavascript,
} from "react-icons/si";

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
    <section className="section-dark section-spacing">
      <div className="site-container">
        {/* Introduction */}
        <div className="section-intro">
          <p className="section-label">Technologies</p>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Des outils choisis selon les besoins du projet
          </h2>

          <p className="mt-6 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
            Je ne choisis pas une technologie parce qu’elle est à la mode.<br/>Je
            privilégie les outils les plus cohérents avec vos besoins, votre
            budget et les évolutions prévues.
          </p>
        </div>

        {/* Technologies */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {technologies.map((technology) => {
            const Icon = technology.icon;

            return (
              <article
                key={technology.name}
                className="card-dark group relative flex h-full flex-col"
              >
                <div className="flex items-center gap-4">
  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400 transition duration-300 group-hover:bg-blue-500 group-hover:text-white">
    <Icon className="h-6 w-6" aria-hidden="true" />
  </div>

  <h3 className="text-xl font-semibold text-white">
    {technology.name}
  </h3>
</div>

                <p className="mt-3 leading-7 text-slate-400">
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