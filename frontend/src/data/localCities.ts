
export type LocalCity = {
  slug: string;
  name: string;
  department: string;
  region: string;
  title: string;
  metaDescription: string;
  introduction: string;
  localContext: string;
  intervention: string;
  nearbyCities: string[];
  coordinates: {
    latitude: number;
    longitude: number;
  };
  faq: {
    question: string;
    answer: string;
  }[];
};

export const localCities: LocalCity[] = [
  {
    slug: "berry-au-bac",
    name: "Berry-au-Bac",
    department: "Aisne",
    region: "Hauts-de-France",

    title: "Création de site internet à Berry-au-Bac",

    metaDescription:
      "Jess Tech accompagne les artisans, associations et petites entreprises de Berry-au-Bac pour la création, la refonte et la maintenance de leur site internet.",

    introduction:
      "Vous recherchez une développeuse web pour créer ou moderniser votre site internet à Berry-au-Bac ? Jess Tech accompagne les artisans, associations, commerçants et petites entreprises avec des solutions adaptées à leur activité.",

    localContext:
      "À Berry-au-Bac, un site internet professionnel permet aux entreprises et aux associations locales de présenter clairement leur activité, leurs services et leurs coordonnées. Il offre également une présence en ligne durable, complémentaire aux réseaux sociaux et au bouche-à-oreille.",

    intervention:
      "Située à Beaurieux, Jess Tech intervient à proximité de Berry-au-Bac. Selon les besoins du projet, les échanges peuvent avoir lieu à distance ou faire l’objet d’un rendez-vous dans le secteur.",

    nearbyCities: [
      "Pontavert",
      "Juvincourt-et-Damary",
      "Condé-sur-Suippe",
      "Aguilcourt",
      "Cormicy",
    ],

    coordinates: {
      latitude: 49.40299,
      longitude: 3.89989,
    },

    faq: [
      {
        question:
          "Quel est le prix d’un site internet à Berry-au-Bac ?",
        answer:
          "Le prix dépend du nombre de pages, des fonctionnalités attendues et du niveau de personnalisation. Un devis détaillé est établi après un premier échange autour du projet.",
      },
      {
        question:
          "Pouvez-vous vous déplacer à Berry-au-Bac ?",
        answer:
          "Oui. Berry-au-Bac se situe dans la zone d’intervention locale de Jess Tech. Un rendez-vous peut être organisé lorsque le projet nécessite une rencontre sur place.",
      },
      {
        question:
          "Proposez-vous la maintenance du site après sa création ?",
        answer:
          "Oui. Plusieurs solutions de maintenance permettent d’assurer les mises à jour, les sauvegardes, la sécurité et le suivi technique du site.",
      },
      {
        question:
          "Créez-vous uniquement des sites WordPress ?",
        answer:
          "Non. Jess Tech réalise des sites WordPress ainsi que des projets développés sur mesure lorsque les besoins nécessitent une solution plus personnalisée.",
      },
    ],
  },

  {
    slug: "corbeny",
    name: "Corbeny",
    department: "Aisne",
    region: "Hauts-de-France",

    title: "Création de site internet à Corbeny",

    metaDescription:
      "Jess Tech accompagne les professionnels et associations de Corbeny pour la création, la refonte et la maintenance de leur site internet.",

    introduction:
      "Vous recherchez une développeuse web à Corbeny pour créer ou moderniser votre site internet ? Jess Tech propose des solutions adaptées aux artisans, commerçants, associations et petites entreprises du secteur.",

    localContext:
      "Un site internet permet aux professionnels de Corbeny de présenter leurs prestations, leurs horaires et leurs coordonnées de manière accessible. Il aide également les habitants des communes voisines à trouver plus facilement une entreprise ou une association locale.",

    intervention:
      "Basée à Beaurieux, Jess Tech se situe à proximité de Corbeny. L’accompagnement peut être réalisé à distance ou avec un rendez-vous local lorsque cela est utile au projet.",

    nearbyCities: [
      "Sainte-Croix",
      "Aizelles",
      "Berrieux",
      "Craonne",
      "La Ville-aux-Bois-lès-Pontavert",
    ],

    coordinates: {
      latitude: 49.4625,
      longitude: 3.8236,
    },

    faq: [
      {
        question: "Quel est le prix d’un site internet à Corbeny ?",
        answer:
          "Le tarif dépend de la taille du site, des fonctionnalités souhaitées et du niveau de personnalisation. Chaque projet fait l’objet d’un devis détaillé.",
      },
      {
        question: "Pouvez-vous vous déplacer à Corbeny ?",
        answer:
          "Oui. Corbeny fait partie des communes proches de Jess Tech. Un rendez-vous peut être organisé lorsque la nature du projet le nécessite.",
      },
      {
        question: "Pouvez-vous refaire un site internet existant ?",
        answer:
          "Oui. Jess Tech propose des prestations de refonte pour moderniser le design, améliorer la structure et faciliter l’utilisation d’un site existant.",
      },
      {
        question: "Proposez-vous un suivi après la mise en ligne ?",
        answer:
          "Oui. Des offres de maintenance peuvent être proposées pour assurer les mises à jour, les sauvegardes et le suivi technique du site.",
      },
    ],
  },

  {
    slug: "villeneuve-sur-aisne",
    name: "Villeneuve-sur-Aisne",
    department: "Aisne",
    region: "Hauts-de-France",

    title: "Création de site internet à Villeneuve-sur-Aisne",

    metaDescription:
      "Jess Tech crée et modernise les sites internet des artisans, entreprises et associations de Villeneuve-sur-Aisne.",

    introduction:
      "Vous souhaitez créer un site internet à Villeneuve-sur-Aisne ? Jess Tech accompagne les professionnels et associations dans la création d’une présence en ligne claire, moderne et adaptée à leurs objectifs.",

    localContext:
      "À Villeneuve-sur-Aisne, un site internet peut aider une entreprise à présenter ses services, recevoir des demandes de contact et être visible auprès des habitants du secteur. Il constitue également un support plus stable et plus complet qu’une simple page sur les réseaux sociaux.",

    intervention:
      "Villeneuve-sur-Aisne se trouve dans la zone d’intervention locale de Jess Tech. Le projet peut être suivi à distance, avec la possibilité d’organiser une rencontre lorsque cela apporte une réelle utilité.",

    nearbyCities: [
      "Condé-sur-Suippe",
      "Variscourt",
      "Menneville",
      "Neufchâtel-sur-Aisne",
      "Prouvais",
    ],

    coordinates: {
      latitude: 49.43565,
      longitude: 3.96469,
    },

    faq: [
      {
        question:
          "Quel est le prix d’un site internet à Villeneuve-sur-Aisne ?",
        answer:
          "Le prix varie selon le nombre de pages, les fonctionnalités et le niveau de personnalisation attendu. Un devis précis est établi avant le début du projet.",
      },
      {
        question:
          "Travaillez-vous avec les artisans de Villeneuve-sur-Aisne ?",
        answer:
          "Oui. Jess Tech accompagne notamment les artisans, commerçants, associations, petites entreprises et collectivités locales.",
      },
      {
        question:
          "Pouvez-vous reprendre un ancien site internet ?",
        answer:
          "Oui. Une refonte peut permettre de moderniser l’apparence du site, de réorganiser les contenus et d’améliorer son fonctionnement.",
      },
      {
        question:
          "La maintenance est-elle obligatoire ?",
        answer:
          "Non. Elle reste facultative, mais elle est recommandée pour assurer les mises à jour, les sauvegardes et la sécurité du site.",
      },
    ],
  },

  {
    slug: "braine",
    name: "Braine",
    department: "Aisne",
    region: "Hauts-de-France",

    title: "Création de site internet à Braine",

    metaDescription:
      "Jess Tech accompagne les artisans, entreprises et associations de Braine pour la création et la maintenance de leur site internet.",

    introduction:
      "Vous avez besoin d’un site internet professionnel à Braine ? Jess Tech vous accompagne dans la création, la refonte ou la maintenance d’un site adapté à votre activité.",

    localContext:
      "Un site internet permet aux professionnels de Braine de présenter leurs prestations et de rendre leurs informations facilement accessibles. Il peut aussi contribuer à développer leur visibilité auprès des habitants de Braine et des communes environnantes.",

    intervention:
      "Les projets situés à Braine peuvent être réalisés à distance avec des échanges réguliers. Un rendez-vous local peut également être envisagé lorsque le projet nécessite une rencontre.",

    nearbyCities: [
      "Augy",
      "Vasseny",
      "Brenelle",
      "Courcelles-sur-Vesle",
      "Limé",
    ],

    coordinates: {
      latitude: 49.3439,
      longitude: 3.5342,
    },

    faq: [
      {
        question: "Quel est le prix d’un site internet à Braine ?",
        answer:
          "Le prix est déterminé selon la taille du site, les contenus à intégrer et les fonctionnalités souhaitées. Un devis détaillé est remis avant le démarrage.",
      },
      {
        question: "Pouvez-vous travailler entièrement à distance ?",
        answer:
          "Oui. Les échanges, les validations et le suivi du projet peuvent être réalisés à distance.",
      },
      {
        question:
          "Créez-vous des sites pour les associations de Braine ?",
        answer:
          "Oui. Jess Tech peut créer des sites pour présenter une association, ses activités, ses événements et les informations utiles à ses membres.",
      },
      {
        question:
          "Proposez-vous aussi la maintenance du site ?",
        answer:
          "Oui. Des offres de maintenance sont disponibles pour assurer les mises à jour, les sauvegardes et la sécurité du site.",
      },
    ],
  },

  {
    slug: "fismes",
    name: "Fismes",
    department: "Marne",
    region: "Grand Est",

    title: "Création de site internet à Fismes",

    metaDescription:
      "Jess Tech réalise des sites internet pour les artisans, associations et petites entreprises de Fismes et de ses alentours.",

    introduction:
      "Vous recherchez une développeuse web pour votre activité à Fismes ? Jess Tech crée des sites internet professionnels, modernes et adaptés aux besoins des artisans, associations et petites entreprises.",

    localContext:
      "À Fismes, disposer d’un site internet permet de renforcer sa visibilité locale et de présenter ses services aux habitants des communes voisines. Le site devient un point de référence pour consulter vos prestations, vos réalisations et vos coordonnées.",

    intervention:
      "Fismes se situe dans la zone d’intervention de Jess Tech. Les projets peuvent être menés à distance, avec la possibilité d’organiser ponctuellement une rencontre selon les besoins.",

    nearbyCities: [
      "Mont-Saint-Martin",
      "Ville-Savoye",
      "Blanzy-lès-Fismes",
      "Courlandon",
      "Saint-Gilles",
    ],

    coordinates: {
      latitude: 49.30694,
      longitude: 3.68025,
    },

    faq: [
      {
        question: "Quel est le prix d’un site internet à Fismes ?",
        answer:
          "Le tarif dépend du type de site, du nombre de pages et des fonctionnalités demandées. Un devis est réalisé après une première étude du besoin.",
      },
      {
        question:
          "Pouvez-vous travailler avec une entreprise située à Fismes ?",
        answer:
          "Oui. Jess Tech accompagne les professionnels de Fismes à distance et peut envisager un rendez-vous lorsque cela est utile au projet.",
      },
      {
        question:
          "Pouvez-vous améliorer le référencement de mon site ?",
        answer:
          "Oui. Les sites sont conçus avec une structure claire, des contenus organisés et les bases techniques nécessaires au référencement naturel.",
      },
      {
        question:
          "Créez-vous des sites sur mesure ?",
        answer:
          "Oui. En complément de WordPress, Jess Tech peut développer des solutions personnalisées en fonction des besoins du projet.",
      },
    ],
  },

  {
    slug: "laon",
    name: "Laon",
    department: "Aisne",
    region: "Hauts-de-France",

    title: "Création de site internet à Laon",

    metaDescription:
      "Jess Tech accompagne les artisans, associations et petites entreprises de Laon pour créer, moderniser et maintenir leur site internet.",

    introduction:
      "Vous recherchez une développeuse web pour créer ou moderniser votre site internet à Laon ? Jess Tech accompagne les artisans, associations, commerçants et petites entreprises avec des solutions adaptées.",

    localContext:
      "À Laon, un site internet professionnel permet de se différencier, de présenter clairement ses services et de faciliter la prise de contact. Il peut également renforcer la visibilité d’une activité auprès des habitants de l’agglomération et du département de l’Aisne.",

    intervention:
      "Les projets pour les professionnels situés à Laon peuvent être suivis entièrement à distance. Des échanges réguliers permettent de valider chaque étape jusqu’à la mise en ligne du site.",

    nearbyCities: [
      "Chambry",
      "Athies-sous-Laon",
      "Bruyères-et-Montbérault",
      "Mons-en-Laonnois",
      "Aulnois-sous-Laon",
    ],

    coordinates: {
      latitude: 49.56408,
      longitude: 3.62068,
    },

    faq: [
      {
        question: "Quel est le prix d’un site internet à Laon ?",
        answer:
          "Le prix dépend des besoins du projet, du nombre de pages et des fonctionnalités à intégrer. Une proposition détaillée est établie avant le début de la prestation.",
      },
      {
        question:
          "Travaillez-vous avec les petites entreprises de Laon ?",
        answer:
          "Oui. Jess Tech accompagne les artisans, commerçants, associations, indépendants et petites entreprises.",
      },
      {
        question:
          "Pouvez-vous moderniser un site déjà en ligne ?",
        answer:
          "Oui. Une refonte peut améliorer le design, la navigation, les contenus et les performances d’un site existant.",
      },
      {
        question:
          "Le site sera-t-il adapté aux téléphones ?",
        answer:
          "Oui. Les sites sont conçus pour s’adapter aux téléphones, tablettes et ordinateurs.",
      },
    ],
  },

  {
    slug: "cormontreuil",
    name: "Cormontreuil",
    department: "Marne",
    region: "Grand Est",

    title: "Création de site internet à Cormontreuil",

    metaDescription:
      "Jess Tech crée et modernise les sites internet des artisans, associations et petites entreprises de Cormontreuil.",

    introduction:
      "Vous recherchez une développeuse web à Cormontreuil ? Jess Tech vous accompagne pour créer, refaire ou maintenir un site internet professionnel adapté à votre activité.",

    localContext:
      "À proximité immédiate de Reims, Cormontreuil accueille de nombreuses activités commerciales et professionnelles. Un site internet clair permet de présenter ses services, de renforcer sa crédibilité et de faciliter les demandes de contact.",

    intervention:
      "Les projets situés à Cormontreuil peuvent être réalisés entièrement à distance. Un rendez-vous peut également être étudié lorsque la nature du projet nécessite une rencontre.",

    nearbyCities: [
      "Reims",
      "Taissy",
      "Trois-Puits",
      "Saint-Léonard",
      "Bezannes",
    ],

    coordinates: {
      latitude: 49.22281,
      longitude: 4.05318,
    },

    faq: [
      {
        question:
          "Quel est le prix d’un site internet à Cormontreuil ?",
        answer:
          "Le prix dépend du type de site, de ses fonctionnalités et de son niveau de personnalisation. Un devis détaillé est réalisé selon les besoins.",
      },
      {
        question:
          "Pouvez-vous travailler entièrement à distance ?",
        answer:
          "Oui. Le suivi du projet, les échanges et les validations peuvent être réalisés à distance.",
      },
      {
        question:
          "Proposez-vous des sites pour les commerces ?",
        answer:
          "Oui. Jess Tech peut créer des sites permettant de présenter un commerce, ses produits, ses services, ses horaires et ses coordonnées.",
      },
      {
        question:
          "Proposez-vous la maintenance après la création ?",
        answer:
          "Oui. Plusieurs offres de maintenance permettent de conserver un site à jour, sécurisé et fonctionnel.",
      },
    ],
  },

  {
    slug: "reims",
    name: "Reims",
    department: "Marne",
    region: "Grand Est",

    title: "Création de site internet à Reims",

    metaDescription:
      "Jess Tech accompagne les artisans, associations et petites entreprises de Reims pour la création, la refonte et la maintenance de leur site internet.",

    introduction:
      "Vous recherchez une développeuse web pour créer ou moderniser votre site internet à Reims ? Jess Tech accompagne les artisans, associations, commerçants et petites entreprises avec des solutions adaptées à leur activité.",

    localContext:
      "Disposer d’un site internet professionnel permet aux entreprises rémoises de présenter clairement leurs services, de renforcer leur crédibilité et d’être trouvées plus facilement par leurs futurs clients. Chaque projet est conçu selon les besoins réels de l’activité, sans imposer une solution inutilement complexe.",

    intervention:
      "Les projets pour les professionnels situés à Reims peuvent être réalisés entièrement à distance. Des échanges réguliers permettent de suivre la conception du site, de valider les contenus et d’avancer progressivement jusqu’à sa mise en ligne.",

    nearbyCities: [
      "Cormontreuil",
      "Tinqueux",
      "Bétheny",
      "Bezannes",
      "Saint-Brice-Courcelles",
    ],

    coordinates: {
      latitude: 49.2583,
      longitude: 4.0317,
    },

    faq: [
      {
        question: "Quel est le prix d’un site internet à Reims ?",
        answer:
          "Le prix dépend du nombre de pages, des fonctionnalités attendues et du niveau de personnalisation. Un devis détaillé est établi après un premier échange autour du projet.",
      },
      {
        question:
          "Pouvez-vous travailler entièrement à distance ?",
        answer:
          "Oui. La création, les validations et le suivi du projet peuvent être réalisés à distance par téléphone, visioconférence et e-mail.",
      },
      {
        question:
          "Proposez-vous également la maintenance du site ?",
        answer:
          "Oui. Des solutions de maintenance peuvent être proposées pour assurer les mises à jour, les sauvegardes, la sécurité et les petites modifications du site.",
      },
      {
        question:
          "Créez-vous uniquement des sites WordPress ?",
        answer:
          "Non. Jess Tech réalise des sites WordPress, mais aussi des projets développés sur mesure lorsque les besoins nécessitent une solution plus personnalisée.",
      },
    ],
  },
];