export type CtaKey =
  | "home"
  | "services"
  | "about"
  | "coulisses"
  | "realisation"
  | "citypage"
  | "legal"
  | "tarifs"
  | "localisation";

type Cta = {
  titre: string;
  description: string;
  bouton: string;
  lien: string;
};

export const ctas: Record<CtaKey, Cta> = {
  home: {
    titre: "Un projet en tête ?",
    description: "Discutons-en simplement.",
    bouton: "Me contacter",
    lien: "/contact",
  },

  services: {
    titre: "Besoin d’un conseil ?",
    description:
      "Expliquez-moi votre situation et nous verrons ensemble quelle solution correspond le mieux à votre besoin.",
    bouton: "Expliquer moi",
    lien: "/contact",
  },

  about: {
    titre: "Vous avez des questions ?",
    description:
      "Présentez-moi simplement votre situation et nous verrons ensemble la suite.",
    bouton: "Échangeons",
    lien: "/contact",
  },

  coulisses: {
    titre: "Une idée en tête ?",
    description:
      "Ces projets montrent une partie de ma méthode de travail. Pour un besoin réel, chaque solution est adaptée au contexte et aux objectifs.",
    bouton: "Parlons-en",
    lien: "/contact",
  },

  realisation: {
    titre: "Une idée en tête ?",
    description:
      "Découvrez mes réalisations et parlons ensemble de votre propre projet.",
    bouton: "Me contacter",
    lien: "/contact",
  },

  citypage: {
    titre: "Un projet près de chez vous ?",
    description:
      "Présentez-moi votre besoin et voyons ensemble la solution la plus adaptée.",
    bouton: "Me contacter",
    lien: "/contact",
  },

  legal: {
    titre: "Une question ?",
    description:
      "Vous pouvez me contacter directement si vous avez besoin d’une précision.",
    bouton: "Me contacter",
    lien: "/contact",
  },

  tarifs: {
    titre: "Besoin d’un tarif précis ?",
    description:
      "Expliquez-moi votre projet pour obtenir une estimation adaptée à votre besoin.",
    bouton: "Me contacter",
    lien: "/contact",
  },

    localisation: {
    titre: "Vous avez une autre question ?",
    description:
      "Présentez-moi votre besoin et votre commune afin que nous étudiions ensemble les possibilités d’intervention.",
    bouton: "Me contacter",
    lien: "/contact",
  },
};