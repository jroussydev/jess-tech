import HeroTarifs from "../../components/tarifs/HeroTarifs";
import NosEngagements from "../../components/tarifs/NosEngagements";
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
      "Des tarifs clairs et sans surprise : chaque projet commence par un échange, puis un devis détaillé vous est remis avant le début de la prestation.",
    path: "/tarifs",
  });
}

export default function TarifsTransparents() {
    return (
        <>
            <HeroTarifs />
            <NosEngagements />
            <TarifsSites />
            <TarifsMaintenance />
            <TarifsAutres />
            <TarifsInclus />
            <FaqTarifs />
            <GlobalCTA variant="tarifs" />
                  
        </>
    );
}

