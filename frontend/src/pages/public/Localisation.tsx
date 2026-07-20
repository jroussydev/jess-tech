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
      <ModesIntervention />
      <ZonesDesservies />

      <FaqLocalisation />
    </main>
  );
};

export default Localisation;