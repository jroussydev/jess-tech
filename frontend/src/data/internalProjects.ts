import type { InternalProject } from "../types/project";

export const internalProjects: InternalProject[] = [
  {
    id: "jess-tech",
    title: "Jess Tech",
    category: "Projet interne",
    description:
      "Le site vitrine de Jess Tech, construit pour présenter les services, la méthode de travail, les projets internes et les réalisations.",
    tags: ["React", "TypeScript", "Tailwind CSS", "React Router"],
    status: "En cours",

    featuredImage: "/chemin de limage",
    gallery: [],

    learnings: [
      "Créer une architecture React plus propre.",
      "Découper une interface en composants réutilisables.",
      "Gérer la sélection d'un projet avec useState.",
    ],
    challenges: [
      "Trouver le bon équilibre entre apprentissage et avancement.",
      "Organiser les données sans rendre les composants trop lourds.",
    ],
    summary:
    "Le site vitrine officiel de Jess Tech, développé pour présenter mes services et mes réalisations.",

    github:
      "https://github.com/jroussydev/jess-tech",

    demo:
      "https://jesstech.fr",

    startedAt:
      "2026-06",
      completedAt: undefined,

  },
  {
    id: "dupont-plomberie",
    title: "Dupont Plomberie",
    category: "Exercice",
    description:
      "Un projet d'entraînement autour d'un site vitrine pour un artisan plombier, avec présentation des services, formulaire de contact et mise en page responsive.",
    tags: ["WordPress", "CSS", "Gutenberg", "Kadence", "Responsive"],
    status: "Terminé",

    featuredImage: "/chemin de limage",
    gallery: [],

    learnings: [
      "Structurer une page de site vitrine.",
      "Travailler le responsive sur mobile et ordinateur.",
      "Présenter clairement les services d'un artisan.",
    ],
    challenges: [
      "Organiser les sections pour que le site reste lisible.",
      "Adapter le rendu aux différents formats d'écran.",
    ],
    summary:
      "Exercice de création d'un site vitrine pour un artisan.",

    startedAt:
      "2026-05",

    completedAt:
      "2026-06",
  },
];