import {
  CarteZoneLocale,
  EtapesProjet,
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
      <EtapesProjet />
      <FaqLocalisation />
    </main>
  );
};

export default Localisation;