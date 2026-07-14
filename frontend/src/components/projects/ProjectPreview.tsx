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
    <article className="overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/70 shadow-lg shadow-black/20 transition hover:border-blue-500/40">
      <div className="p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-slate-50">
            {project.title}
          </h3>

          <StatusBadge status={project.status} />
        </div>

        <div className="mb-4">
          <CategoryBadge category={project.category} />
        </div>

        <p className="text-sm leading-7 text-slate-300">
          {project.summary}
        </p>
      </div>

      <div className="aspect-video overflow-hidden bg-slate-800">
        {project.featuredImage ? (
          <img
            src={project.featuredImage}
            alt={`Aperçu du projet ${project.title}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center text-sm text-slate-500">
            Aperçu du projet à venir
          </div>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-slate-700/60 px-6 py-4 text-sm">
        <span className={hasImages ? "text-slate-300" : "text-slate-600"}>
          Images
        </span>

        <span className={hasVideo ? "text-slate-300" : "text-slate-600"}>
          Vidéo
        </span>
      </div>
    </article>
  );
}