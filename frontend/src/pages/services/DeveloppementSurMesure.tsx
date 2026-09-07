import { FaqDeveloppement, FonctionnementDeveloppement, HeroDeveloppementSurMesure, PossibilitesDeveloppement, PreparationDeveloppement, TarifDeveloppement } from "../../components/developpementSurMesure";
import GlobalCTA from "../../components/GlobalCTA";



export default function DeveloppementSurMesure() {
  return (
    <main>
      <HeroDeveloppementSurMesure />

      <PossibilitesDeveloppement />

      <PreparationDeveloppement />

      <FonctionnementDeveloppement />

      <TarifDeveloppement />

      <FaqDeveloppement />

      <GlobalCTA variant="services" />
    </main>
  );
}