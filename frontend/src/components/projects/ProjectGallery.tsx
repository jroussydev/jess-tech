import { useRef, useState } from "react";
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

  const touchStartX = useRef<number | null>(null);

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
    ) {
      return;
    }

    setSelectedMedia({
      type: "image",
      src: gallery[currentIndex + 1],
    });
  }

  function handleTouchStart(event: React.TouchEvent<HTMLDivElement>) {
    touchStartX.current = event.touches[0].clientX;
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLDivElement>) {
    if (
      touchStartX.current === null ||
      selectedMedia?.type !== "image"
    ) {
      return;
    }

    const touchEndX = event.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX;

    const swipeMinimum = 50;

    // Swipe vers la gauche → image suivante
    if (distance > swipeMinimum) {
      nextImage();
    }

    // Swipe vers la droite → image précédente
    if (distance < -swipeMinimum) {
      previousImage();
    }

    touchStartX.current = null;
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
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="
          relative
          aspect-video
          touch-pan-y
          overflow-hidden
          rounded-2xl
          border
          border-slate-700
          bg-slate-950
        "
      >
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
            className="
              project-gallery__arrow
              absolute
              left-2
              top-1/2
              -translate-y-1/2
              rounded-full
              border
              border-blue-400/40
              bg-blue-600/70
              text-white
              backdrop-blur-sm
              transition

              sm:left-4
              sm:p-3

              hover:border-blue-300/70
              hover:bg-blue-500/90
            "
            aria-label="Afficher l’image précédente"
          >
            <ChevronLeft className="project-gallery__arrow-icon" />
          </button>
        )}

        {/* Flèche suivante */}
        {selectedMedia.type === "image" &&
          currentIndex < gallery.length - 1 && (
            <button
              type="button"
              onClick={nextImage}
              className="
                project-gallery__arrow
                absolute
                right-2
                top-1/2
                -translate-y-1/2
                rounded-full
                border
                border-blue-400/40
                bg-blue-600/70
                text-white
                backdrop-blur-sm
                transition

                sm:right-4
                sm:p-3

                hover:border-blue-300/70
                hover:bg-blue-500/90
              "
              aria-label="Afficher l’image suivante"
            >
              <ChevronRight className="project-gallery__arrow-icon" />
            </button>
          )}
      </div>

      {/* Indication swipe — mobile uniquement */}
      {selectedMedia.type === "image" && gallery.length > 1 && (
        <p
          className="
            mt-2
            text-center
            !text-[10px]
            text-slate-500
            sm:hidden
          "
        >
          Glissez à gauche ou à droite pour parcourir les images
        </p>
      )}

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
              className={`
                group
                relative
                h-20
                w-32
                shrink-0
                overflow-hidden
                rounded-xl
                border
                transition-all
                duration-300
                ${
                  isSelected
                    ? "border-blue-500 ring-2 ring-blue-500/20"
                    : "border-slate-700 hover:border-slate-500"
                }
              `}
              aria-label={`Afficher la capture ${index + 1} du projet ${title}`}
            >
              <img
                src={image}
                alt=""
                className="
                  h-full
                  w-full
                  object-contain
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
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
            className={`
              flex
              h-20
              w-32
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              bg-slate-950
              text-sm
              font-semibold
              transition
              ${
                selectedMedia.type === "video"
                  ? "border-blue-500 text-blue-400"
                  : "border-slate-700 text-slate-300 hover:border-slate-500"
              }
            `}
            aria-label={`Afficher la vidéo du projet ${title}`}
          >
            ▶ Vidéo
          </button>
        )}
      </div>
    </div>
  );
}