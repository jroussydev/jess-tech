import HeroTarifs from "../../components/tarifs/HeroTarifs";
import NosEngagements from "../../components/tarifs/NosEngagements";
import CalculTarifs from "../../components/tarifs/CalculTarifs";
import EtapesProjet from "../../components/tarifs/EtapesProjet";
import PrestationsIncluses from "../../components/tarifs/PrestationsIncluses";
import FaqTarifs from "../../components/tarifs/FaqTarifs";
import GlobalCTA from "../../components/GlobalCTA";

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

