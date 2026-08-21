import GlobalCTA from "../../components/GlobalCTA";
import {
  CarteZoneLocale,

  FaqLocalisation,
  HeroLocalisation,
  ModesIntervention,
  ZonesDesservies,
} from "../../components/localisation";

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