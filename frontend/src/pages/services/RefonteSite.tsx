import GlobalCTA from "../../components/GlobalCTA";
import ElementsRefonte from "../../components/refonte/ElementsRefonte";
import ExistantRefonte from "../../components/refonte/ExistantRefonte";
import FaqRefonte from "../../components/refonte/FaqRefonte";
import HeroRefonte from "../../components/refonte/HeroRefonte";
import NiveauRefonte from "../../components/refonte/NiveauRefonte";
import PreparationRefonte from "../../components/refonte/PreparationRefonte";
import ProblemesRefonte from "../../components/refonte/ProblemesRefonte";
import TarifRefonte from "../../components/refonte/TarifRefonte";



export default function RefonteSite() {
  return (
    <main>
      <HeroRefonte />

      <ProblemesRefonte />

      <NiveauRefonte />

      <ElementsRefonte />

      <TarifRefonte />

      <ExistantRefonte />

      <PreparationRefonte />

      <FaqRefonte />

      <GlobalCTA variant="services" />
    </main>
  );
}