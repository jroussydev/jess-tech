export type InfoBulleItem = {
  title: string;
  content: string;
};

export const infoBulles = {
  limitesMaintenance: {
    title: "Votre site peut bien sûr continuer à évoluer.",
    content:
      "Les demandes qui sortent du périmètre de la maintenance sont simplement étudiées et chiffrées séparément.",
  },

  preparationMaintenance: {
    title: "Votre site n’a pas été créé par Jess Tech ?",
    content:
      "Ce n’est pas forcément un problème. Sa prise en charge dépend de son environnement technique et de son état au moment de l’intervention.",
  },
} satisfies Record<string, InfoBulleItem>;