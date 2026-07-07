import type { InternalProject } from "../../types/project";
import CategoryBadge from "./CategoryBadge";
import ProjectTags from "./ProjectTags";
import StatusBadge from "./StatusBadge";

type ProjectDetailsProps = {
  project: InternalProject;
};

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-3xl font-black text-slate-900">
            {project.title}
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
            {project.summary}
          </p>
        </div>

        <StatusBadge status={project.status} />
      </div>

      <div className="mb-6">
        <CategoryBadge category={project.category} />
      </div>

      <p className="mb-8 text-base leading-8 text-slate-600 text-justify">
        {project.description}
      </p>

      <section className="mb-8">
        <h4 className="mb-3 text-lg font-bold text-slate-900">
          Technologies
        </h4>

        <ProjectTags tags={project.tags} />
      </section>

      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-200 p-4 text-sm font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-600"
          >
            🌐 Voir la démo
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-200 p-4 text-sm font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-600"
          >
            💻 Voir le code GitHub
          </a>
        )}
      </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        {project.startedAt && (
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Début
            </p>
            <p className="mt-1 font-semibold text-slate-700">
              {project.startedAt}
            </p>
          </div>
        )}

        {project.completedAt && (
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Fin
            </p>
            <p className="mt-1 font-semibold text-slate-700">
              {project.completedAt}
            </p>
          </div>
        )}
      </div>

      <section className="mb-8">
        <h4 className="mb-3 text-lg font-bold text-slate-900">
          Ce que j'ai appris
        </h4>

        <ul className="space-y-2">
          {project.learnings.map((learning) => (
            <li key={learning} className="text-slate-600">
              ✅ {learning}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h4 className="mb-3 text-lg font-bold text-slate-900">
          Difficultés rencontrées
        </h4>

        <ul className="space-y-2">
          {project.challenges.map((challenge) => (
            <li key={challenge} className="text-slate-600">
              ⚠️ {challenge}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h4 className="mb-3 text-lg font-bold text-slate-900">
          Galerie
        </h4>

        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-500">
          Galerie à venir.
        </div>
      </section>
    </article>
  );
}