import GlobalCTA from "../../components/GlobalCTA";


import FaqRefonte from "../../components/refonte/FaqRefonte";
import HeroRefonte from "../../components/refonte/HeroRefonte";
import NiveauRefonte from "../../components/refonte/NiveauRefonte";
import PreparationRefonte from "../../components/refonte/PreparationRefonte";
import ProblemesRefonte from "../../components/refonte/ProblemesRefonte";
import TarifRefonte from "../../components/refonte/TarifRefonte";

import { createMeta } from "../../seo/createMeta";

export function meta() {
  return createMeta({
    title: "Refonte de site internet dans l'Aisne | Jess Tech",
    description:
      "Design, organisation, affichage mobile ou contenus : une refonte pour corriger ce qui ne convient plus, sans forcément repartir de zéro.",
    path: "/services/refonte-site",
  });
}

export default function RefonteSite() {
  return (
    <main>
      <HeroRefonte />

      <ProblemesRefonte />

      <NiveauRefonte />



      <TarifRefonte />

     

      <PreparationRefonte />

      <FaqRefonte />

      <GlobalCTA variant="services" />
    </main>
  );
}