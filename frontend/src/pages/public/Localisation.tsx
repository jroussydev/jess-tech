import {
  CarteZoneLocale,
  EtapeProjet,
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
      <EtapeProjet />
      <FaqLocalisation />
    </main>
  );
};

export default Localisation;