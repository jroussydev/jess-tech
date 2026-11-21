import GlobalCTA from "../../components/GlobalCTA";


import FaqRefonte from "../../components/refonte/FaqRefonte";
import HeroRefonte from "../../components/refonte/HeroRefonte";
import NiveauRefonte from "../../components/refonte/NiveauRefonte";
import PreparationRefonte from "../../components/refonte/PreparationRefonte";
import ProblemesRefonte from "../../components/refonte/ProblemesRefonte";
import TarifRefonte from "../../components/refonte/TarifRefonte";

import { createMeta } from "../../seo/createMeta";
import AvecVague from "../../components/decorations/AvecVague";

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

      <AvecVague cote="droite">
        <NiveauRefonte />
      </AvecVague>



      <AvecVague cote="gauche">
        <TarifRefonte />
      </AvecVague>

     

      <AvecVague cote="droite">
        <PreparationRefonte />
      </AvecVague>

      <AvecVague cote="gauche">
        <FaqRefonte />
      </AvecVague>

      <AvecVague cote="droite">
        <GlobalCTA variant="services" />
      </AvecVague>
    </main>
  );
}