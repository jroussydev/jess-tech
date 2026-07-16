import type { InternalProject } from "../../types/project";
import CategoryBadge from "./CategoryBadge";
import StatusBadge from "./StatusBadge";

type ProjectPreviewProps = {
  project: InternalProject;
};

export default function ProjectPreview({ project }: ProjectPreviewProps) {
  const hasImages = project.gallery.length > 0;
  const hasVideo = Boolean(project.video);

  return (
    <article className="grid grid-cols-[180px_1fr] gap-5 rounded-3xl border border-slate-700/60 bg-slate-900/70 p-5 shadow-lg shadow-black/20 transition hover:border-blue-500/40">
      <div className="aspect-video overflow-hidden rounded-2xl border border-blue-500/15 bg-slate-800">
        {project.featuredImage ? (
          <img
            src={project.featuredImage}
            alt={`Aperçu du projet ${project.title}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-3 text-center text-xs text-slate-500">
            Aperçu à venir
          </div>
        )}
      </div>

      <div className="min-w-0">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold text-slate-50">
            {project.title}
          </h3>

          <StatusBadge status={project.status} />
        </div>

        <div className="mt-3">
          <CategoryBadge category={project.category} />
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-400 text-justify">
          {project.summary}
        </p>

        <div className="mt-5 flex items-center gap-5 text-sm">
          <span className={hasImages ? "font-semibold text-blue-400 transition hover:text-blue-300" : "font-semibold text-slate-600 transition hover:text-slate-600"}>
            Images
          </span>

          <span className={hasVideo ? "font-semibold text-blue-400 transition hover:text-blue-300" : "font-semibold text-slate-600 transition hover:text-slate-600"}>
            Vidéo
          </span>
        </div>
      </div>
    </article>
  );
}