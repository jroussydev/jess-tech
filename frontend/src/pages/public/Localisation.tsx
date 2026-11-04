import GlobalCTA from "../../components/GlobalCTA";
import {
  CarteZoneLocale,

  FaqLocalisation,
  HeroLocalisation,
  ModesIntervention,
  ZonesDesservies,
} from "../../components/localisation";
import { createMeta } from "../../seo/createMeta";

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
        <ZonesDesservies />
        <ModesIntervention />
        <FaqLocalisation />
        <GlobalCTA variant="localisation" />
    </main>
  );
};

export default Localisation;