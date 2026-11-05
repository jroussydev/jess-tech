import { FaqDeveloppement, FonctionnementDeveloppement, HeroDeveloppementSurMesure, PossibilitesDeveloppement, PreparationDeveloppement, TarifDeveloppement } from "../../components/developpementSurMesure";
import GlobalCTA from "../../components/GlobalCTA";
import { createMeta } from "../../seo/createMeta";

export function meta() {
  return createMeta({
    title: "Développement web sur mesure | Jess Tech",
    description:
      "Un site, un outil ou une fonctionnalité qui sort du cadre classique ? Une solution construite à partir de votre besoin, sans complexité inutile.",
    path: "/services/developpement-sur-mesure",
  });
}


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