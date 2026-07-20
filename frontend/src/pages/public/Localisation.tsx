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
    </main>
  );
};

export default Localisation;