/* =========================================================
   TARIFS JESS TECH — source unique de tous les prix du site
   ========================================================= */

/* ---------- Offre fondateur ---------- */

export const offreFondateur = {
  placesTotal: 3,
  placesRestantes: 3, // ← à baisser à chaque client signé
  bonus: "2 mois de maintenance Sérénité offerts, sans engagement ensuite",
  contreparties: [
    "Un témoignage sur notre collaboration",
    "Un avis Google",
    "L'accord pour présenter votre site dans mes réalisations",
  ],
};

// L'offre s'affiche partout tant qu'il reste au moins une place
export const offreActive = offreFondateur.placesRestantes > 0;

/* ---------- Sites vitrines ---------- */

export const prixSites: Record<string, { normal: string; fondateur: string }> = {
  Lite: { normal: "490 €", fondateur: "350 €" },
  Essentiel: { normal: "1 190 €", fondateur: "750 €" },
  Pro: { normal: "1 790 €", fondateur: "1 090 €" },
};

/* ---------- Maintenance (par mois, sans engagement) ---------- */

export const prixMaintenance: Record<string, string> = {
  Essentielle: "49 €",
  Sérénité: "95 €",
  Prioritaire: "159 €",
};

export const heuresIncluses: Record<string, string> = {
  Essentielle: "Aucune heure incluse",
  Sérénité: "1 h d'intervention incluse",
  Prioritaire: "2 h d'intervention incluses",
};

export const conditionsMaintenance = "Sans engagement, résiliable à tout moment";

export const banquesHeures = [
  { duration: "2 heures", price: "85 €" },
  { duration: "5 heures", price: "199 €" },
  { duration: "10 heures", price: "379 €" },
];

/* ---------- Autres prestations ---------- */

export const tauxHoraire = "45 €/h";

export const prixPageSupplementaire = "135 €";

export const autresPrestations = [
  {
    name: "Audit technique et SEO",
    price: "90 €",
    note: "Déduit une fois d'une création de site ou d'une maintenance, s'ils sont commandés dans les 2 mois",
  },
  { name: "Assistance technique", price: tauxHoraire, note: "Minimum 1 h" },
  { name: "Refonte de site", price: "Sur devis" },
  { name: "Développement sur mesure", price: "À partir de 540 €" },
];