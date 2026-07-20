import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProjectGalleryProps = {
  title: string;
  gallery: string[];
  video?: string;
};

type SelectedMedia = {
  type: "image" | "video";
  src: string;
};

export default function ProjectGallery({
  title,
  gallery,
  video,
}: ProjectGalleryProps) {
  const firstMedia: SelectedMedia | null = gallery[0]
    ? {
        type: "image",
        src: gallery[0],
      }
    : video
      ? {
          type: "video",
          src: video,
        }
      : null;

  const [selectedMedia, setSelectedMedia] =
    useState<SelectedMedia | null>(firstMedia);

const currentIndex =
  selectedMedia?.type === "image"
    ? gallery.indexOf(selectedMedia.src)
    : -1;

    function previousImage() {
  if (gallery.length <= 1 || currentIndex <= 0) return;

  setSelectedMedia({
    type: "image",
    src: gallery[currentIndex - 1],
  });
}

function nextImage() {
  if (
    gallery.length <= 1 ||
    currentIndex >= gallery.length - 1
  )
    return;

  setSelectedMedia({
    type: "image",
    src: gallery[currentIndex + 1],
  });
}

  if (!selectedMedia) {
    return (
      <div className="flex aspect-video items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-950/60 px-6 text-center text-sm text-slate-500">
        Aucun média disponible pour ce projet.
      </div>
    );
  }

  return (
    <div>
{/* Média principal */}
<div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-700 bg-slate-950">
  {selectedMedia.type === "image" ? (
    <img
      src={selectedMedia.src}
      alt={`Capture du projet ${title}`}
      className="h-full w-full object-contain"
    />
  ) : (
    <video
      src={selectedMedia.src}
      controls
      className="h-full w-full object-contain"
    >
      Votre navigateur ne prend pas en charge la lecture de vidéos.
    </video>
  )}

  {/* Flèche précédente */}
  {selectedMedia.type === "image" && currentIndex > 0 && (
    <button
      type="button"
      onClick={previousImage}
      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-blue-400/40 bg-blue-600/70 p-3 text-white shadow-lg shadow-blue-950/30 backdrop-blur-sm transition hover:border-blue-300/70 hover:bg-blue-500/90 focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-blue-400
focus-visible:ring-offset-2
focus-visible:ring-offset-slate-950"
      aria-label="Afficher l’image précédente"
    >
      <ChevronLeft size={22} />
    </button>
  )}

  {/* Flèche suivante */}
  {selectedMedia.type === "image" &&
    currentIndex < gallery.length - 1 && (
      <button
        type="button"
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-blue-400/40 bg-blue-600/70 p-3 text-white shadow-lg shadow-blue-950/30 backdrop-blur-sm transition hover:border-blue-300/70 hover:bg-blue-500/90 focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-blue-400
focus-visible:ring-offset-2
focus-visible:ring-offset-slate-950"
        aria-label="Afficher l’image suivante"
      >
        <ChevronRight size={22} />
      </button>
    )}
</div>

      {/* Miniatures */}
      <div className="mt-4 flex justify-center gap-3 overflow-x-auto pb-2">
        {gallery.map((image, index) => {
          const isSelected =
            selectedMedia.type === "image" &&
            selectedMedia.src === image;

          return (
            <button
              key={image}
              type="button"
              onClick={() =>
                setSelectedMedia({
                  type: "image",
                  src: image,
                })
              }
              className={`group relative h-20 w-32 shrink-0 overflow-hidden rounded-xl border transition-all duration-300 ${
  isSelected
    ? "border-blue-500 ring-2 ring-blue-500/20"
    : "border-slate-700 hover:border-slate-500"
}`}
              aria-label={`Afficher la capture ${index + 1} du projet ${title}`}
            >
              <img
                src={image}
                alt=""
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          );
        })}

        {video && (
          <button
            type="button"
            onClick={() =>
              setSelectedMedia({
                type: "video",
                src: video,
              })
            }
            className={`flex h-20 w-32 shrink-0 items-center justify-center rounded-xl border bg-slate-950 text-sm font-semibold transition ${
              selectedMedia.type === "video"
                ? "border-blue-500 text-blue-400"
                : "border-slate-700 text-slate-300 hover:border-slate-500"
            }`}
            aria-label={`Afficher la vidéo du projet ${title}`}
          >
            ▶ Vidéo
          </button>
        )}
      </div>
    </div>
  );
}