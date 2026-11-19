import type { InternalProject } from "../types/project";

export const internalProjects: InternalProject[] = [
  {
    id: "jess-tech",
    title: "Jess Tech",
    category: "Projet interne",
    description:
      "jesstech.fr est le site professionnel de Jess Tech, mon activité de développeuse web basée à Beaurieux. Il présente mes services, mes tarifs, ma zone d’intervention et mes réalisations. C’est un projet interne, en cours depuis juin 2026, que je fais évoluer page par page. Un artisan ou une association qui arrive sur le site trouve les prix affichés, le déroulement d’un projet et les communes où je me déplace. Avant même de m’écrire, il sait si l’offre correspond à son budget et à sa situation. Le formulaire de contact, protégé contre le spam, lui permet de me joindre sans passer par le téléphone. Le site est développé en React, mais chaque page est générée à l’avance en HTML. Google lit donc le contenu comme celui d’un site classique. Et comme il n’y a ni serveur ni extension, il n’y a pas de mises à jour à surveiller.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "React Router", "Leaflef", "Lucide React", "Vercel", "Google Search Console", "Procreate"],
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
      "Prérendu avec React Router 7 : un site React dont chaque page est lisible par les moteurs de recherche, sans serveur à maintenir.",
      "Migration d’URL avec redirections 301 : des adresses en français, faciles à lire, sans perdre les liens déjà indexés.",
      "Google Search Console (validation DNS, sitemap) : suivre l’indexation de chaque page et repérer ce qui manque en visibilité locale.",
      "Carte interactive avec Leaflet : montrer en un coup d’œil la zone d’intervention et les communes desservies.",
    ],
    challenges: [
      "Garder un seul design system (sections, cartes, boutons, badges) sur vingt-cinq pages, sans doublon de styles, pour que chaque nouvelle page reste simple à ajouter et à maintenir.",
      "Vérifier chaque page sur quatre formats (mobile, tablette, ordinateur, grand écran), y compris les décorations, qui doivent rester visibles sans gêner la lecture.",
      "Utiliser mes propres illustrations, dessinées sur Procreate, plutôt que des images de banque. C’est un parti pris qui oblige à régler l’opacité et le placement section par section.",
      "Rendre un site React visible sur les recherches locales : générer les pages en HTML, écrire les métadonnées de chaque page, et créer une page par commune desservie, avec des informations utiles plutôt qu’une simple liste de villes.",
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
    category: "Démo",
    description:
      "Dupont Plomberie Chauffage est un site vitrine d’une page pour un plombier chauffagiste de Soissons et des communes voisines. C’est un projet de démonstration : l’artisan est fictif, mais le projet a suivi toutes les étapes d’une vraie mission, du cahier des charges à la livraison. Sur téléphone, le visiteur peut appeler l’artisan d’un seul geste dès l’arrivée sur la page, ou lui envoyer une demande de devis. L’artisan reçoit la demande par e-mail, avec les coordonnées, le type de demande et la description du besoin : il sait de quoi il s’agit avant même de rappeler. Le site est construit avec l’éditeur de blocs de WordPress et le thème Kadence, sans constructeur de pages. Les pages restent légères, et l’artisan peut modifier ses textes et ses horaires lui-même, sans licence à payer.",
    tags: ["WordPress", "CSS", "Gutenberg", "Kadence", "Fluent Forms", "Responsive", "SEO de base"],
    status: "Terminé",

    featuredImage: "/portfolio/dupont-plomberie/dupont-plomberie-site-wordpress.webp",
    gallery: [
      "/portfolio/dupont-plomberie/dupont-plomberie-hero.webp",
      "/portfolio/dupont-plomberie/dupont-plomberie-avis.webp",
      "/portfolio/dupont-plomberie/plomberie-desktop-quinconce-fond.webp",
      "/portfolio/dupont-plomberie/plomberie-mobile-quinconce-fond.webp"
    ],

    learnings: [
      "Conception responsive dès le départ : un site lisible et des boutons faciles à toucher sur téléphone, là où cherche quelqu’un qui a une fuite.",
      "Navigation par ancres et boutons reliés : chaque bouton mène quelque part, vers l’appel direct ou le formulaire, sans clic perdu.",
      "Formulaires avec validation et notifications : des demandes complètes reçues par e-mail, et un message de confirmation qui rassure le visiteur.",
      "Référencement dès la construction : une hiérarchie de titres claire et des images décrites, pour aider le site à être trouvé localement.",
    ],
    challenges: [
      "Garder l’essentiel visible sur mobile : j’ai réduit le haut de page et revu les espacements pour que les boutons d’appel et de devis apparaissent dès l’ouverture, et contrôlé le résultat jusque sur un petit écran (iPhone SE).",
      "Aucun bouton décoratif : chaque bouton a été relié et testé (appel direct, accès au formulaire) avant les finitions visuelles.",
      "La lisibilité du formulaire : je l’ai placé dans une carte centrée plutôt qu’en pleine largeur, pour que les champs se lisent et se remplissent sans effort.",
      "Des outils que le client peut garder : seulement l’éditeur de WordPress et des extensions gratuites, pour qu’aucun abonnement ne conditionne le fonctionnement du site.",
    ],
    summary:
      "projet de démonstration d'un site vitrine pour un artisan Plombier.",

    startedAt:
      "2026-05",

    completedAt:
      "2026-06",
  },

  {
    id: "nuance-coiffure",
    title: "Nuance Coiffure",
    category: "Démo",
    description:
      "Nuance Coiffure est le site d’une page d’un salon de coiffure installé à Fismes. C’est un projet de démonstration : le salon est fictif. J’ai tout réalisé, de l’identité visuelle (logo dessiné à la main, couleurs, polices) jusqu’au site lui-même. Les clients réservent en ligne, à toute heure, sans créer de compte : il y a moins d’appels à prendre pendant une coupe. Les tarifs sont classés par prestation et par longueur de cheveux, et non selon qu’on est une femme ou un homme : chacun trouve son prix sans avoir à demander. Pour une question ou un mariage, un formulaire en deux étapes envoie au client un e-mail de confirmation qui annonce une réponse sous 48 h. J’ai codé moi-même le thème WordPress, sans aucune extension. La gérante modifie ses textes et ses photos dans l’éditeur de WordPress, et aucune mise à jour d’extension ni aucune licence ne peut fragiliser son site.",
    tags: ["WordPress", "Thème de blocs (FSE)", "HTML", "PHP", "JavaScript", "CSS", "Responsive", "SEO de base", "Procreate", "Git"],
    status: "Terminé",

    featuredImage: "/portfolio/nuance-coiffure/Hero.webp",
    gallery: [
      "/portfolio/nuance-coiffure/Hero.webp",
      "/portfolio/nuance-coiffure/tarifs.webp",
      "/portfolio/nuance-coiffure/nuance-desktop-quinconce-fond.webp",
      "/portfolio/nuance-coiffure/nuance-mobile-quinconce-fond.webp"
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
      "projet de démonstration d'un site vitrine One-page pour un artisan coiffeur.",

    github:
      "https://github.com/jroussydev/jesstech-wp-themes",

    startedAt:
      "2026-09",

    completedAt:
      "2026-11",
  },
];