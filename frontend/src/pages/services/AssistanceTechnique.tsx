import { FaqAssistance, HeroAssistance, InterventionsAssistance, ModeInterventionAssistance, PreparationAssistance } from "../../components/assistance";
import GlobalCTA from "../../components/GlobalCTA";
import { createMeta } from "../../seo/createMeta";


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
      <ModeInterventionAssistance />
      <PreparationAssistance />
      <FaqAssistance />

      <GlobalCTA variant="services" />
    </>
  );
}