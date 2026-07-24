import { Link } from "react-router-dom";

export default function ProjectsPreview() {
  const projects = [
    {
      title: "Jess Tech",
      description: "Site fullstack React / Node.js / PostgreSQL.",
    },
    {
      title: "Jess-Tech Edu Studio",
      description:
        "Nouvelle expérimentation technique en cours de conception.",
    },
    {
      title: "Outils internes",
      description:
        "Développements techniques et solutions en cours de construction.",
    },
  ];

  return (
    <section className="section-dark section-spacing relative overflow-hidden">
      <div className="site-container relative z-10">
        <div className="grid gap-28 lg:grid-cols-[35%_65%]">
          {/* Bloc gauche */}
          <div className="section-intro self-start pt-6 lg:pr-24">
            <p className="section-label">
              Dans les coulisses
            </p>

            <h2>
              Les projets techniques en cours
            </h2>

            <p className="text-justified">
              Outils internes, expérimentations et développements qui illustrent
              mon travail quotidien de développeuse.
            </p>

            <Link
              to="/DansLesCoulisses"
              className="btn-primary mt-10"
            >
              Voir tous les projets →
            </Link>
          </div>

          {/* Vague lumineuse */}
          <img
            src="/decorations/vagueLumineuse2.webp"
            alt=""
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-[18%]
              top-26
              -z-10
              hidden
              h-[900px]
              w-auto
              -translate-y-1/2
              opacity-80
              lg:block
            "
          />

          {/* Bloc droit */}
          <div className="relative grid gap-8 lg:grid-cols-[65%_35%]">
            {/* Liste des projets */}
            <div className="relative z-10 space-y-4">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="
                    card-dark
                    group
                    flex
                    flex-col
                    gap-4
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  <div>
                    <h3>
                      {project.title}
                    </h3>

                    <p className="mt-2">
                      {project.description}
                    </p>
                  </div>

                  <div
                    className="text-2xl text-blue-400"
                    aria-hidden="true"
                  >
                    →
                  </div>
                </article>
              ))}
            </div>

            {/* Illustration */}
            <img
              src="/decorations/IconDevCircuit.webp"
              alt=""
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                right-[-80px]
                top-1/2
                hidden
                w-[260px]
                -translate-y-1/2
                opacity-90
                lg:block
                xl:w-[340px]
                2xl:w-[420px]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}