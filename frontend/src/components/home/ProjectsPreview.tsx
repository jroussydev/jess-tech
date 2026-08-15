import { Link } from "react-router-dom";
import { internalProjects } from "../../data/internalProjects";
import AnimatedCardBorder from "../decorations/AnimatedCardBorder";

export default function ProjectsPreview() {
  const previewProjects = internalProjects.slice(0, 3);

  return (
    <section className="section-dark section-fade-dark-soft section-spacing relative overflow-hidden">
      <div className="site-container relative z-10">
        <div className="grid gap-10 lg:grid-cols-[400px_minmax(0,1fr)] lg:items-start xl:gap-12">
          {/* Introduction */}
          <div className="section-intro max-w-xl">
            <p className="section-label">Dans les coulisses</p>

            <h2>
              Les projets{" "}
              <span className="text-gradient-blue">
                techniques
              </span>{" "}
              en cours
            </h2>

            <p>
              Outils internes, expérimentations et développements qui illustrent
              mon travail quotidien de développeuse.
            </p>

            <Link
              to="/DansLesCoulisses"
              className="btn-primary mt-6"
            >
              Voir tous les projets →
            </Link>
          </div>

          {/* Liste des projets */}
          <div className="grid gap-4">
            {previewProjects.map((project) => (
              <Link
  key={project.id}
  to={`/DansLesCoulisses?project=${project.id}`}
  className="card-dark
    card-glow
    group
    relative
    block
    overflow-hidden
    !p-0">
      <AnimatedCardBorder />
  <div className="grid md:grid-cols-[67%_33%]">
    
    {/* =========================
        CONTENU — 70 %
    ========================== */}
    <div className="relative z-10 p-4 md:p-5 lg:p-6">
      <div className="flex flex-wrap items-center gap-3">
        <span className="badge badge-primary">
          {project.status}
        </span>

        <h3>{project.title}</h3>
      </div>

      <p className="mt-3">
        {project.summary}
      </p>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="
              rounded-full
              border
              border-sky-500/20
              px-3
              py-1
              text-xs
              text-sky-400
              md:text-sm
            "
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* =========================
        IMAGE — 30 %
    ========================== */}
    <div className="
      relative
      hidden
      min-h-36
      overflow-hidden
      md:block
    ">
      <img
        src={project.featuredImage}
        alt={`Aperçu du projet ${project.title}`}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-top
          transition-transform
          duration-500
          group-hover:scale-105
        "
      />

      {/* Fondu côté gauche */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-slate-900
          via-slate-900/40
          to-transparent
        "
      />
    </div>

  </div>
</Link>
            ))}
          </div>
        </div>
      </div>

      {/* Décoration */}
<img
  src="/decorations/vagues/13.png"
  alt=""
  aria-hidden="true"
  className="
    pointer-events-none
    absolute
    right-0
    bottom-0
    w-32
    opacity-70
    sm:w-40
    md:w-48
    lg:w-56
    xl:w-64
    xl:opacity-100
    2xl:w-80
  "
/>
    </section>
  );
}