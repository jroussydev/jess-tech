import HeroTarifs from "../../components/tarifs/HeroTarifs";
import FaqTarifs from "../../components/tarifs/FaqTarifs";
import GlobalCTA from "../../components/GlobalCTA";
import { createMeta } from "../../seo/createMeta";
import TarifsSites from "../../components/tarifs/TarifsSites";
import TarifsMaintenance from "../../components/tarifs/TarifsMaintenance";
import TarifsAutres from "../../components/tarifs/TarifsAutres";
import TarifsInclus from "../../components/tarifs/TarifsInclus";

export function meta() {
  return createMeta({
    title: "Tarifs de création et maintenance de site | Jess Tech",
    description:
      "Tous les prix affichés : sites vitrines dès 490 €, maintenance sans engagement dès 49 €/mois, audit à 90 €. Offre fondateur pour les premiers clients.",
    path: "/tarifs",
  });
}

export default function TarifsTransparents() {
    return (
        <>
            <HeroTarifs />
            <TarifsSites />
            <TarifsMaintenance />
            <TarifsAutres />
            <TarifsInclus />
            <FaqTarifs />
            <GlobalCTA variant="tarifs" />
                  
        </>
    );
}

