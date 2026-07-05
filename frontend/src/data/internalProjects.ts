import type { InternalProject } from "../types/project";

export const internalProjects: InternalProject[] = [
  {
    id: "dupont-plomberie",
    title: "Dupont Plomberie",
    type: "Exercice de site vitrine",
    description:
      "Un projet d'entraînement autour d'un site vitrine pour un artisan plombier, avec présentation des services, formulaire de contact et mise en page responsive.",
    tags: ["WordPress", "CSS", "Gutenberg", "Kadence", "Responsive"],
    status: "Terminé",
  },
  {
    id: "sunbanks-tool",
    title: "Sunbanks Tool",
    type: "Projet interne",
    description:
      "Un outil web développé pour travailler la gestion de projets, les interfaces d'administration et la communication entre frontend et backend.",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
    status: "En cours",
  },
];