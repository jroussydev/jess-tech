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

  {
    id: "nuance-coiffure",
    title: "Nuance Coiffure",
    category: "Projet de démonstration",
    description:
      "Site vitrine d’un salon de coiffure fictif, construit sur un thème WordPress maison entièrement codé, sans constructeur de pages ni extension. Le projet sert de démonstration et de base réutilisable pour les futurs sites de salons.",
    tags: ["WordPress", "Thème de blocs (FSE)", "PHP", "JavaScript", "CSS", "Responsive", "Git"],
    status: "Terminé",

    featuredImage: "/portfolio/nuance-coiffure/Hero.webp",
    gallery: [
      "/portfolio/nuance-coiffure/Hero.webp",
      "/portfolio/nuance-coiffure/prestations.webp",
      "/portfolio/nuance-coiffure/tarifs.webp",
      "/portfolio/nuance-coiffure/cta.webp",
      "/portfolio/nuance-coiffure/galerie.webp",
      "/portfolio/nuance-coiffure/contact-1.webp",
      "/portfolio/nuance-coiffure/contact-2.webp",
      "/portfolio/nuance-coiffure/nuance-coiffure-pleine-page.webp",
      "/portfolio/nuance-coiffure/nuance-coiffure-pleine-page-mobile.webp"
    ],

    learnings: [
      "Développer un thème WordPress de zéro, sans thème parent ni constructeur : le client reste propriétaire de son site, sans dépendre d’un outil payant.",
      "Écrire un formulaire de contact sécurisé sans extension : jeton de sécurité, anti-robots, confirmation automatique au visiteur.",
      "Concevoir un site conforme sans bandeau cookies, en limitant la collecte de données à la source.",
      "Construire une base réutilisable, qui réduit le délai et le coût des projets suivants.",
    ],
    challenges: [
      "Faire fonctionner le formulaire même sans JavaScript, pour qu’aucun visiteur ne reste bloqué.",
      "Rendre les tarifs lisibles sur un écran de téléphone, sans sacrifier le détail des prestations.",
      "Concevoir des tarifs non genrés, classés par prestation et par longueur : un parti pris assumé avec le salon.",
      "Centraliser le lien de réservation à un seul endroit, pour éviter les oublis lors des mises à jour.",
    ],
    summary:
      "Exercice de création d'un site vitrine One-page pour un artisan coiffeur.",

    github:
      "https://github.com/jroussydev/jesstech-wp-themes",

    startedAt:
      "2026-09",

    completedAt:
      "2026-11",
  },
];