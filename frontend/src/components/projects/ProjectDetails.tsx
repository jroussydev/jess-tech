import type { InternalProject } from "../../types/project";

type ProjectDetailsProps = {
  project: InternalProject;
};

export default function ProjectPreview({ project }: ProjectDetailsProps) {
  return (
    <article className="rounded-3xl border border-slate-700/60 bg-slate-900/60 p-6 shadow-lg shadow-black/20">
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-slate-50">
          {project.title}
        </h3>

        <StatusBadge status={project.status} />
      </div>

      <div className="mb-4">
        <CategoryBadge category={project.category} />
      </div>

      <p className="mb-5 text-sm leading-7 text-slate-300">
        {project.description}
      </p>

      <ProjectTags tags={project.tags} />
    </article>
  );
}