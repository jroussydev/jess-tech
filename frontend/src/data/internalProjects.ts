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

    featuredImage: "/portfolio/jess-tech/jesstech-page-home.webp",
    gallery: [
  "/portfolio/jess-tech/jesstech-hero-page-home.webp",
  "/portfolio/jess-tech/jesstech-page-home.webp",
  "/portfolio/jess-tech/jesstech-page-services.webp",
  "/portfolio/jess-tech/jesstech-projets-page-danslescoulisses.webp",
  "/portfolio/jess-tech/jesstech-page-danslescoulisses.webp",
  "/portfolio/jess-tech/jesstech-hero-page-contact.webp",
  "/portfolio/jess-tech/jesstech-page-contact.webp",
],

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

    featuredImage: "/portfolio/dupont-plomberie/dupont-plomberie-site-wordpress.png",
    gallery: [
      "/portfolio/dupont-plomberie/dupont-plomberie-hero.webp",
      "/portfolio/dupont-plomberie/dupont-plomberie-section-services.webp",
      "/portfolio/dupont-plomberie/dupont-plomberie-section-pourquoi-nous.webp",
      "/portfolio/dupont-plomberie/dupont-plomberie-avis.webp",
      "/portfolio/dupont-plomberie/dupont-plomberie-contact.webp",
      "/portfolio/dupont-plomberie/dupont-plomberie-bas-de-page.webp"
    ],

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