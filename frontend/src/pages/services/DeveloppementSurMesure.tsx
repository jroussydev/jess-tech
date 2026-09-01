import { ApresDeveloppement, FaqDeveloppement, FonctionnementDeveloppement, HeroDeveloppementSurMesure, PossibilitesDeveloppement, PreparationDeveloppement, QuandSurMesure, TarifDeveloppement } from "../../components/developpementSurMesure";
import GlobalCTA from "../../components/GlobalCTA";



export default function DeveloppementSurMesure() {
  return (
    <main>
      <HeroDeveloppementSurMesure />

      <PossibilitesDeveloppement />

      <FonctionnementDeveloppement />

      <QuandSurMesure />

      <TarifDeveloppement />

      <PreparationDeveloppement />

      <ApresDeveloppement />

      <FaqDeveloppement />

      <GlobalCTA variant="services" />
    </main>
  );
}