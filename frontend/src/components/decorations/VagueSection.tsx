/* =========================================================
   Vague décorative entre deux sections
   ---------------------------------------------------------
   Même vague que sous le header, posée à cheval sur le bord
   haut ou bas d'une section, à gauche ou à droite (inversée).

   ⚠️ La section qui contient la vague doit avoir
   « relative z-20 » pour que la vague passe au-dessus
   de la section voisine.
   ========================================================= */

type VagueSectionProps = {
  cote?: "gauche" | "droite";
  position?: "haut" | "bas";
  src?: string;
};

export default function VagueSection({
  cote = "droite",
  position = "haut",
  src = "/decorations/vagues/vague_header.webp",
}: VagueSectionProps) {
  const placementVertical =
    position === "haut" ? "top-0 -translate-y-[40%]" : "bottom-0 translate-y-[40%]";

  // À droite, on retourne l'image comme dans un miroir
  const placementHorizontal = cote === "droite" ? "right-0 -scale-x-100" : "left-0";

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={`pointer-events-none absolute z-20 w-5/12 max-w-none ${placementVertical} ${placementHorizontal}`}
    />
  );
}
