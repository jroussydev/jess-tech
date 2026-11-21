import { Check } from "lucide-react";
import { offreFondateur } from "../../data/tarifs";

type CompteurPlacesProps = {
  texteClassName?: string; // couleur du texte selon le fond
};

export default function CompteurPlaces({ texteClassName = "" }: CompteurPlacesProps) {
  const { placesTotal, placesRestantes } = offreFondateur;
  const placesPrises = placesTotal - placesRestantes;

  return (
    <div>
      <div className="flex gap-3" aria-hidden="true">
        {Array.from({ length: placesTotal }, (_, index) => {
          const prise = index < placesPrises;

          return (
            <span
              key={index}
              className={`flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#E9C46A] ${
                prise ? "bg-[#E9C46A] text-[#001A5A]" : "shadow-[0_0_10px_rgba(233,196,106,0.35)]"
              }`}
            >
              {prise && <Check className="h-5 w-5" />}
            </span>
          );
        })}
      </div>

      <p className={`!mt-3 font-semibold ${texteClassName}`}>
        {placesRestantes === 1
          ? "Dernière place disponible"
          : `Plus que ${placesRestantes} places sur ${placesTotal}`}
      </p>
    </div>
  );
}