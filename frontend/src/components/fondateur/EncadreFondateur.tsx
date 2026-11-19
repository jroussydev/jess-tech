import { offreActive, offreFondateur } from "../../data/tarifs";

export default function EncadreFondateur() {
  if (!offreActive) return null;

  const { placesRestantes, placesTotal, bonus } = offreFondateur;

  return (
    <div className="card-dark card-glow-gold relative z-10 !p-5">
      <p className="!m-0 font-semibold text-[#E9C46A]">
        Offre fondateur : {placesRestantes} place
        {placesRestantes > 1 ? "s" : ""} sur {placesTotal}
      </p>

      <p className="!mt-2 text-slate-200">
        Pour mes premiers clients, les trois formules sont à prix réduit,
        avec {bonus}. En échange : un témoignage, un avis Google et l'accord
        pour présenter votre site dans mes réalisations.
      </p>
    </div>
  );
}