import HeroTarifs from "../../components/tarifs/HeroTarifs";
import NosEngagements from "../../components/tarifs/NosEngagements";
import CalculTarifs from "../../components/tarifs/CalculTarifs";
import EtapesProjet from "../../components/tarifs/EtapesProjet";
import PrestationsIncluses from "../../components/tarifs/PrestationsIncluses";
import FaqTarifs from "../../components/tarifs/FaqTarifs";
import GlobalCTA from "../../components/GlobalCTA";
import { createMeta } from "../../seo/createMeta";

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
            <CalculTarifs />
            <EtapesProjet />
            <PrestationsIncluses />
            <FaqTarifs />
            <GlobalCTA variant="tarifs" />
                  
        </>
    );
}

