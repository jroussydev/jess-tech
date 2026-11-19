import { Link } from "react-router";
import { offreActive, offreFondateur, prixSites } from "../data/tarifs";

export default function BarreOffreFondateur() {
  // Plus de place : la barre n'affiche rien
  if (!offreActive) return null;

  const { placesRestantes, placesTotal } = offreFondateur;

  return (
    <div className="bg-[linear-gradient(90deg,#C08A30,#E9C46A_35%,#FFE6A8_50%,#E9C46A_65%,#C08A30)] text-[#001A5A]">
      <Link
        to="/services/creation-site-internet#formules"
        className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-sm font-semibold sm:gap-3"
      >
        <span>Offre fondateur : votre site dès {prixSites.Lite.fondateur}</span>

        <span className="hidden sm:inline">
          · {placesRestantes} place{placesRestantes > 1 ? "s" : ""} sur {placesTotal}
        </span>

        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}