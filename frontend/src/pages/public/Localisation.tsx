import GlobalCTA from "../../components/GlobalCTA";
import {
  CarteZoneLocale,

  FaqLocalisation,
  HeroLocalisation,
  ModesIntervention,
  ZonesDesservies,
} from "../../components/localisation";
import { createMeta } from "../../seo/createMeta";
import AvecVague from "../../components/decorations/AvecVague";

export function meta() {
  return createMeta({
    title: "Zone d'intervention : Beaurieux et l'Aisne | Jess Tech",
    description:
      "Développeuse web basée à Beaurieux : interventions techniques autour de l'Aisne et de la Marne, création et maintenance de sites partout en France.",
    path: "/localisation",
  });
}

const Localisation = () => {
  return (
    <main>
        <HeroLocalisation />
        <CarteZoneLocale />
        <AvecVague cote="droite">
          <ZonesDesservies />
        </AvecVague>
        <AvecVague cote="gauche">
          <ModesIntervention />
        </AvecVague>
        <AvecVague cote="droite">
          <FaqLocalisation />
        </AvecVague>
        <AvecVague cote="gauche">
          <GlobalCTA variant="localisation" />
        </AvecVague>
    </main>
  );
};

export default Localisation;