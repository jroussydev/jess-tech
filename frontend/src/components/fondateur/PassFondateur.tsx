import { offreFondateur } from "../../data/tarifs";
import CompteurPlaces from "./CompteurPlaces";

export default function PassFondateur() {
  const { placesTotal, placesRestantes } = offreFondateur;
  const prochainNumero = placesTotal - placesRestantes + 1;

  return (
    <div className="card-glow-gold relative overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#0b1430,#001A5A)] p-6">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold tracking-[0.3em] text-[#E9C46A]">
          PASS FONDATEUR
        </span>
        <img src="/logo/logo_jesstech.webp" alt="" aria-hidden="true" className="h-12 w-12" />
      </div>

      <p className="!mt-6 font-title text-4xl italic text-white">
        N° {prochainNumero} / {placesTotal}
      </p>

      <p className="!mt-2 text-slate-300">
        Votre site pourrait être ma prochaine réalisation.
      </p>

      {/* Places restantes */}
      <div className="mt-6">
        <CompteurPlaces texteClassName="text-white" />
      </div>

      <div className="mt-6 border-t border-dashed border-[#E9C46A]/60 pt-3 text-sm text-[#E9C46A]">
        Réservé à mes {placesTotal} premiers clients
      </div>
    </div>
  );
}