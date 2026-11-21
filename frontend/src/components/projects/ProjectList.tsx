import { useImperativeHandle, useLayoutEffect, useRef, type Ref } from "react";

import type { InternalProject } from "../../types/project";
import ProjectPreview from "./ProjectPreview";

export type ProjectListHandle = {
  capturePositions: () => void;
};

type ProjectListProps = {
  projects: InternalProject[];
  onSelectProject: (project: InternalProject) => void;
  selectedProject: InternalProject | null;
  ref?: Ref<ProjectListHandle>;
};

export default function ProjectList({
  projects,
  onSelectProject,
  selectedProject,
  ref,
}: ProjectListProps) {

  const isOpen = selectedProject !== null;

  // Une référence vers chaque carte (clé = id du projet)
  const cardRefs = useRef(new Map<string, HTMLDivElement>());

  // Positions des cartes AVANT le changement
  const firstPositions = useRef<Map<string, DOMRect> | null>(null);

    // 1. FIRST : mémorise la position actuelle des cartes
  function capturePositions() {
    const positions = new Map<string, DOMRect>();

    cardRefs.current.forEach((card, id) => {
      positions.set(id, card.getBoundingClientRect());
    });

    firstPositions.current = positions;
  }

  function handleSelect(project: InternalProject) {
    capturePositions();
    onSelectProject(project);
  }

  // Permet à la page d'appeler capturePositions() avant de fermer
  useImperativeHandle(ref, () => ({ capturePositions }));

  // 2, 3, 4 : après la mise à jour du DOM, avant que l'écran ne soit redessiné
  useLayoutEffect(() => {
    const first = firstPositions.current;
    if (!first) return;
    firstPositions.current = null;

    // Respecte le réglage « réduire les animations » du système
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let index = 0;

    cardRefs.current.forEach((card, id) => {
      const before = first.get(id);
      if (!before) return;

      // 2. LAST : nouvelle position
      const after = card.getBoundingClientRect();

      // 3. INVERT : écart entre avant et après
      const dx = before.left - after.left;
      const dy = before.top - after.top;
      if (dx === 0 && dy === 0) return;

      // 4. PLAY : on part de l'ancienne position et on glisse vers la nouvelle
      card.animate(
        [
          { transform: `translate(${dx}px, ${dy}px)` },
          { transform: "none" },
        ],
        {
          duration: 600,
          delay: index * 50, // petit décalage entre les cartes
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "backwards",
        },
      );

      index++;
    });
  }, [selectedProject]);

  return (
    <div
      className={`grid gap-8 ${
        isOpen ? "grid-cols-1" : "md:grid-cols-2 xl:grid-cols-3"
      }`}
    >
      {projects.map((project) => (
        <div
          key={project.id}
          ref={(card) => {
            if (card) cardRefs.current.set(project.id, card);
            else cardRefs.current.delete(project.id);
          }}
          onClick={() => handleSelect(project)}
          className="cursor-pointer"
        >
          <ProjectPreview
  project={project}
  isActive={selectedProject?.id === project.id}
/>
        </div>
      ))}
    </div>
  );
}