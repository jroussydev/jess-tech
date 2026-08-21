import type { InternalProject } from "../../types/project";

import CategoryBadge from "./CategoryBadge";

import ProjectTags from "./ProjectTags";

import StatusBadge from "./StatusBadge";

import ProjectGallery from "./ProjectGallery";

type ProjectDetailsProps = {
  project: InternalProject;
};

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="relative">
        {/* Décoration vague en haut à droite, à l'extérieur de la carte */}
  <img
    src="/decorations/vagues/15.png"
    alt=""
    aria-hidden="true"
    className="
      pointer-events-none
      absolute
      -right-24
      -top-24
      z-0
      hidden
      h-auto
      w-64

      lg:block
      xl:-right-28
      xl:w-72
      2xl:-right-32
      2xl:w-80
    "
  />

  {/* Décoration vague en bas à gauche, à l'extérieur de la carte */}
  <img
    src="/decorations/vagues/16.png"
    alt=""
    aria-hidden="true"
    className="
      pointer-events-none
      absolute
      -bottom-24
      -left-24
      z-0
      hidden
      h-auto
      w-64

      lg:block
      xl:-left-28
      xl:w-72
      2xl:-left-32
      2xl:w-80
    "
  />

      <article
        className="
          relative
          z-10
          overflow-hidden
          rounded-3xl
          border
          border-sky-500/60
          bg-slate-900/70
          p-6
          shadow-[0_0_10px_rgba(14,165,233,0.20)]
          lg:p-8
        "
      >
        {/* Statut seul en haut à droite */}
        <div className="flex justify-end">
          <StatusBadge status={project.status} />
        </div>

        {/* Début réel des détails */}
        <header className="mt-3 border-b border-sky-500/30 pb-6">
          {/* Titre + catégorie */}
          <div className="mt-3 flex items-center justify-start gap-4">
            <h3 className="text-3xl font-black text-slate-50">
              {project.title}
            </h3>

            <CategoryBadge category={project.category} />
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
            {project.startedAt && (
              <span>
                Début :{" "}
                <strong className="font-semibold text-slate-200">
                  {project.startedAt}
                </strong>
              </span>
            )}

            {project.completedAt && (
              <span>
                Fin :{" "}
                <strong className="font-semibold text-slate-200">
                  {project.completedAt}
                </strong>
              </span>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-400 transition hover:text-blue-300"
              >
                Voir la démo
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-400 transition hover:text-blue-300"
              >
                GitHub
              </a>
            )}
          </div>
        </header>

        <section className="border-b border-sky-500/30 py-7">
          <h4 className="mb-3 text-lg font-bold text-slate-50">
            Présentation
          </h4>

          <p className="text-base leading-8 text-slate-300">
            {project.description}
          </p>
        </section>

        <section className="border-b border-sky-500/30 py-7">
          <h4 className="mb-4 text-lg font-bold text-slate-50">
            Technologies utilisées
          </h4>

          <ProjectTags tags={project.tags} />
        </section>

        <div className="grid gap-8 border-b border-sky-500/30 py-7 md:grid-cols-2">
          <section>
            <h4 className="mb-4 text-lg font-bold text-slate-50">
              Ce que j’ai appris
            </h4>

            <ul className="space-y-3">
              {project.learnings.map((learning) => (
                <li
                  key={learning}
                  className="flex gap-3 text-sm leading-6 text-slate-300"
                >
                  <span className="text-emerald-400">✓</span>

                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h4 className="mb-4 text-lg font-bold text-slate-50">
              Difficultés rencontrées
            </h4>

            <ul className="space-y-3">
              {project.challenges.map((challenge) => (
                <li
                  key={challenge}
                  className="flex gap-3 text-sm leading-6 text-slate-300"
                >
                  <span className="text-amber-400">!</span>

                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="pt-7">
          <h4 className="mb-4 text-lg font-bold text-slate-50">
            Galerie du projet
          </h4>

          <ProjectGallery
            key={project.id}
            title={project.title}
            gallery={project.gallery}
            video={project.video}
          />
        </section>
      </article>
    </div>
  );
}