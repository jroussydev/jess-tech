import { FaqAssistance, HeroAssistance, InterventionsAssistance, ModeInterventionAssistance, PreparationAssistance } from "../../components/assistance";
import GlobalCTA from "../../components/GlobalCTA";


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