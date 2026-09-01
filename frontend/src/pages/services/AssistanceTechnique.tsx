import { BesoinsAssistance, DonneesAssistance, FaqAssistance, HeroAssistance, InterventionsAssistance, ModeInterventionAssistance, PreparationAssistance } from "../../components/assistance";
import GlobalCTA from "../../components/GlobalCTA";


export default function AssistanceTechnique() {
  return (
    <>
      <HeroAssistance />
      <BesoinsAssistance />
      <InterventionsAssistance />
      <ModeInterventionAssistance />
      <PreparationAssistance />
      <DonneesAssistance />
      <FaqAssistance />

      <GlobalCTA variant="services" />
    </>
  );
}