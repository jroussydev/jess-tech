import type { InternalProject } from "../../types/project";

{/*import CategoryBadge from "./CategoryBadge";*/}
import AnimatedCardBorder from "../decorations/AnimatedCardBorder";
import StatusBadge from "./StatusBadge";

type ProjectPreviewProps = {
  project: InternalProject;
};

export default function ProjectPreview({ project }: ProjectPreviewProps) {
  const hasImages = project.gallery.length > 0;

  const hasVideo = Boolean(project.video);

  return (
    <article
  className="
    card-dark
    card-dark-opaque
    card-glow
    group
    relative
    grid
    min-h-[170px]
    grid-cols-[30%_70%]
    overflow-hidden
    rounded-3xl
    p-0!
  "
>
  {/* Décoration des cartes */}
<img
  src="/decorations/vagues/05.png"
  alt=""
  aria-hidden="true"
  className="
    pointer-events-none
    absolute
    -right-5
    -bottom-9
    z-30
    hidden
    h-auto
    w-[38%]
    max-w-none
    -translate-y-1/2
    object-contain
    lg:block
  "
/>
  {/* Bordure animée au survol */}
  <AnimatedCardBorder />
      {/* Image du projet */}
      <div className="relative h-full min-w-0 overflow-hidden">
        {project.featuredImage ? (
          <>
            <img
              src={project.featuredImage}
              alt={`Aperçu du projet ${project.title}`}
              className="
                absolute
                -inset-y-px
                -left-px
                h-[calc(100%+2px)]
                w-[calc(100%+2px)]
                max-w-none
                object-cover
                object-top
                transition-transform
                duration-500
                group-hover:scale-105
              "
            />

            {/* Fondu entre l'image et le contenu */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-r
                from-transparent
                via-transparent
                to-[#111827]
              "
              aria-hidden="true"
            />
          </>
        ) : (
          <div className="flex h-full items-center justify-center px-3 text-center text-xs text-slate-500">
            Aperçu à venir
          </div>
        )}
      </div>

      {/* Contenu du projet */}
      <div
        className="
          relative
          z-10
          flex
          min-w-0
          flex-col
          justify-center
          px-5
          py-3
        "
      >
        {/* Titre + statut */}
        <div className="flex items-center gap-3">
          <StatusBadge status={project.status} />

          <h3 className="min-w-0 text-slate-200">
            {project.title}
          </h3>
        </div>

        {/* <div className="mt-3">
          <CategoryBadge category={project.category} />
        </div> */}

        {/* Description */}
        <p className="mt-2 line-clamp-3 text-slate-300">
          {project.summary}
        </p>

        {/* Disponibilité des médias */}
        <div className="mt-3 flex items-center gap-5">
          <span
            className={
              hasImages
                ? "font-semibold text-sky-500 transition hover:text-sky-400"
                : "font-semibold text-slate-600 transition hover:text-slate-600"
            }
          >
            Images
          </span>

          <span
            className={
              hasVideo
                ? "font-semibold text-sky-500 transition hover:text-sky-400"
                : "font-semibold text-slate-600 transition hover:text-slate-600"
            }
          >
            Vidéo
          </span>
        </div>
      </div>
    </article>
  );
}