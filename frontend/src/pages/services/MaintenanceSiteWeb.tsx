import GlobalCTA from "../../components/GlobalCTA";
import { ChoixMaintenance, CycleMaintenance, EntretienMaintenance, FaqMaintenance, FormulesMaintenance, HeroMaintenance, InterventionsMaintenance, LimitesMaintenance, PreparationMaintenance } from "../../components/maintenance";


export default function MaintenanceSiteWeb() {
  return (
    <>
      <HeroMaintenance />
      <ChoixMaintenance />
      <FormulesMaintenance />
      <EntretienMaintenance />
      <LimitesMaintenance />
      <InterventionsMaintenance />
      <PreparationMaintenance />
      <CycleMaintenance />
      <FaqMaintenance />

      <GlobalCTA variant="services" />
    </>
  );
}