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
    <article className="rounded-3xl border border-slate-700/60 bg-slate-900/70 p-6 shadow-lg shadow-black/20 lg:p-8">
      {/* Statut seul en haut à droite */}
      <div className="flex justify-end">
        <StatusBadge status={project.status} />
      </div>

      {/* Début réel des détails */}
      <header className="mt-3 border-b border-slate-700/60 pb-6">
        {/* Titre + catégorie */}
<div className="mt-3 flex items-center justify-left gap-4">
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

      <section className="border-b border-slate-700/60 py-7">
        <h4 className="mb-3 text-lg font-bold text-slate-50">
          Présentation
        </h4>

        <p className="text-base leading-8 text-slate-300">
          {project.description}
        </p>
      </section>

      <section className="border-b border-slate-700/60 py-7">
        <h4 className="mb-4 text-lg font-bold text-slate-50">
          Technologies utilisées
        </h4>

        <ProjectTags tags={project.tags} />
      </section>

      <div className="grid gap-8 border-b border-slate-700/60 py-7 md:grid-cols-2">
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
  );
}