import GlobalCTA from "../../components/GlobalCTA";
import { ChoixMaintenance, CycleMaintenance, EntretienMaintenance, FaqMaintenance, FormulesMaintenance, HeroMaintenance, InterventionsMaintenance, LimitesMaintenance, PreparationMaintenance } from "../../components/maintenance";
import { createMeta } from "../../seo/createMeta";
import AvecVague from "../../components/decorations/AvecVague";


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
      <AvecVague cote="droite">
        <FormulesMaintenance />
      </AvecVague>
      <AvecVague cote="gauche">
        <EntretienMaintenance />
      </AvecVague>
      <AvecVague cote="droite">
        <LimitesMaintenance />
      </AvecVague>
      <AvecVague cote="gauche">
        <InterventionsMaintenance />
      </AvecVague>
      <AvecVague cote="droite">
        <PreparationMaintenance />
      </AvecVague>
      <AvecVague cote="gauche">
        <CycleMaintenance />
      </AvecVague>
      <AvecVague cote="droite">
        <FaqMaintenance />
      </AvecVague>

      <AvecVague cote="gauche">
        <GlobalCTA variant="services" />
      </AvecVague>
    </>
  );
}