import GlobalCTA from "../../components/GlobalCTA";
import { ChoixMaintenance, CycleMaintenance, EntretienMaintenance, FaqMaintenance, FormulesMaintenance, HeroMaintenance, InterventionsMaintenance, LimitesMaintenance, PreparationMaintenance } from "../../components/maintenance";
import { createMeta } from "../../seo/createMeta";


export function meta() {
  return createMeta({
    title: "Maintenance de site internet | Jess Tech",
    description:
      "Mises à jour, sauvegardes, vérifications et interventions techniques : un accompagnement pour entretenir votre site dans le temps.",
    path: "/services/maintenance-site-web",
  });
}

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