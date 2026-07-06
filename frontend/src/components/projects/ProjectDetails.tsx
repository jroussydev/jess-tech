import type { InternalProject } from "../../types/project";
import CategoryBadge from "./CategoryBadge";
import ProjectTags from "./ProjectTags";
import StatusBadge from "./StatusBadge";

type ProjectDetailsProps = {
  project: InternalProject;
};

export default function ProjectDetails({
  project,
}: ProjectDetailsProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      {/* En-tête */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <h3 className="text-3xl font-black text-slate-900">
          {project.title}
        </h3>

        <StatusBadge status={project.status} />
      </div>

      <div className="mb-6">
        <CategoryBadge category={project.category} />
      </div>

      {/* Description */}
      <p className="mb-8 text-base leading-8 text-slate-600 text-justify">
        {project.description}
      </p>

      {/* Technologies */}
      <section className="mb-8">
        <h4 className="mb-3 text-lg font-bold text-slate-900">
          Technologies
        </h4>

        <ProjectTags tags={project.tags} />
      </section>

      {/* Ce que j'ai appris */}
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

      {/* Difficultés */}
      <section>
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

    </article>
  );
}