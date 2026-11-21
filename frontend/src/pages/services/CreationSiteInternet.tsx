import FaqCreationSite from "../../components/creationSiteInternet/FaqCreationSite";
import FormulesCreationSite from "../../components/creationSiteInternet/FormulesCreationSite";
import HeroCreationSite from "../../components/creationSiteInternet/HeroCreationSite";
import PossibilitesCreationSite from "../../components/creationSiteInternet/PossibilitesCreationSite";
import PreparationCreationSite from "../../components/creationSiteInternet/PreparationCreationSite";
import TypeSiteCreation from "../../components/creationSiteInternet/TypeSiteCreation";
import GlobalCTA from "../../components/GlobalCTA";

import { createMeta } from "../../seo/createMeta";
import AvecVague from "../../components/decorations/AvecVague";

export function meta() {
  return createMeta({
    title: "Création de site internet vitrine dans l'Aisne | Jess Tech",
    description:
      "One Page, site vitrine ou projet plus complet : un site pour présenter vos services, montrer vos réalisations et faciliter la prise de contact.",
    path: "/services/creation-site-internet",
  });
}

export default function CreationSiteInternet() {
  return (
    <main className="relative overflow-hidden">
<HeroCreationSite/>
<TypeSiteCreation/>
<AvecVague cote="droite">
  <FormulesCreationSite/>
</AvecVague>
<AvecVague cote="gauche">
  <PossibilitesCreationSite/>
</AvecVague>
<AvecVague cote="droite">
  <PreparationCreationSite/>
</AvecVague>
<AvecVague cote="gauche">
  <FaqCreationSite/>
</AvecVague>
<AvecVague cote="droite">
  <GlobalCTA variant="services" />
</AvecVague>
    </main>
  )
}