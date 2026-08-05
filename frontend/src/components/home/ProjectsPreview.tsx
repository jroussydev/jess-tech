import { Link } from "react-router-dom";
import { internalProjects } from "../../data/internalProjects";

export default function ProjectsPreview() {
  const previewProjects = internalProjects.slice(0, 3);
  /* Pour montrer des projets précis : 
  const previewProjects = internalProjects.filter((project) =>
  ["jess-tech", "dupont-plomberie"].includes(project.id),); */

  return (
    <section className="home-projects section-dark section-spacing">
      <div className="site-container relative z-10">
        <div className="home-projects__layout">
          {/* Bloc gauche */}
          <div className="section-intro home-projects__intro">
            <p className="section-label">Dans les coulisses</p>

            <h2>Les projets techniques en cours</h2>

            <p className="">
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
              {previewProjects.map((project) => (
                <Link
  key={project.id}
  to={`/DansLesCoulisses?project=${project.id}`}
  className="card-dark group block"
>
  {/* Partie haute : texte + miniature */}
  <div className="flex gap-6">
    <div className="min-w-0 flex-1">
      <div className="flex flex-wrap items-center gap-3">
        <span className="badge badge-primary">
          {project.status}
        </span>

        <h3>{project.title}</h3>
      </div>

      <p>{project.summary}</p>
    </div>

    {/* Aperçu du projet */}
    <div className="hidden w-40 shrink-0 self-start overflow-hidden rounded-lg border border-blue-500/20 md:block">
      <img
        src={project.featuredImage}
        alt={`Aperçu du projet ${project.title}`}
        className="block h-24 w-full object-cover object-top transition-transform duration-300 hover:scale-105"
      />
    </div>
  </div>

  {/* Tags sur toute la largeur de la carte */}
  <div className="mt-4 flex flex-wrap gap-2">
    {project.tags.map((tag) => (
      <span
        key={tag}
        className="rounded-full border border-blue-500/20 px-3 py-1 text-sm text-blue-300"
      >
        {tag}
      </span>
    ))}
  </div>
</Link>
              ))}
            </div>

            {/* Illustration décorative */}
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