import { Link } from "react-router-dom";

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

export default function ProjectsPreview() {
  return (
    <section className="home-projects section-dark section-spacing">
      <div className="site-container relative z-10">
        <div className="home-projects__layout">
          {/* Bloc gauche */}
          <div className="section-intro home-projects__intro">
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
              className="btn-primary home-projects__link"
            >
              Voir tous les projets →
            </Link>
          </div>

          {/* Vague lumineuse */}
          <img
            src="/decorations/vagueLumineuse2.webp"
            alt=""
            aria-hidden="true"
            className="home-projects__wave"
          />

          {/* Bloc droit */}
          <div className="home-projects__content">
            <div className="home-projects__list">
              {projects.map(({ title, description }) => (
                <article
                  key={title}
                  className="card-dark home-projects__card"
                >
                  <div>
                    <h3>{title}</h3>

                    <p className="home-projects__card-description">
                      {description}
                    </p>
                  </div>

                  <div
                    className="home-projects__arrow"
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
              className="home-projects__illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}