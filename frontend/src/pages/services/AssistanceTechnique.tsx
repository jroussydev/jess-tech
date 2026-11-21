import { FaqAssistance, HeroAssistance, InterventionsAssistance, ModeInterventionAssistance, PreparationAssistance } from "../../components/assistance";
import GlobalCTA from "../../components/GlobalCTA";
import { createMeta } from "../../seo/createMeta";
import AvecVague from "../../components/decorations/AvecVague";


export function meta() {
  return createMeta({
    title: "Assistance informatique autour de Beaurieux | Jess Tech",
    description:
      "Ordinateur, logiciel, imprimante ou réseau : aide à l'installation, à la configuration et au dépannage, sur place autour de Beaurieux ou à distance.",
    path: "/services/assistance-technique",
  });
}

export default function AssistanceTechnique() {
  return (
    <>
      <HeroAssistance />
      <InterventionsAssistance />
      <AvecVague cote="droite">
        <ModeInterventionAssistance />
      </AvecVague>
      <AvecVague cote="gauche">
        <PreparationAssistance />
      </AvecVague>
      <AvecVague cote="droite">
        <FaqAssistance />
      </AvecVague>

      <AvecVague cote="gauche">
        <GlobalCTA variant="services" />
      </AvecVague>
    </>
  );
}