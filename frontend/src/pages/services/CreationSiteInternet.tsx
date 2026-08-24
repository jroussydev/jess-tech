import FaqCreationSite from "../../components/creationSiteInternet/FaqCreationSite";
import FormulesCreationSite from "../../components/creationSiteInternet/FormulesCreationSite";
import HeroCreationSite from "../../components/creationSiteInternet/HeroCreationSite";
import PossibilitesCreationSite from "../../components/creationSiteInternet/PossibilitesCreationSite";
import PreparationCreationSite from "../../components/creationSiteInternet/PreparationCreationSite";
import TypeSiteCreation from "../../components/creationSiteInternet/TypeSiteCreation";
import GlobalCTA from "../../components/GlobalCTA";


export default function CreationSiteInternet() {
  return (
    <main className="relative overflow-hidden">
<HeroCreationSite/>
<TypeSiteCreation/>
<FormulesCreationSite/>
<PossibilitesCreationSite/>
<PreparationCreationSite/>
<FaqCreationSite/>
<GlobalCTA variant="services" />
    </main>
  )
}