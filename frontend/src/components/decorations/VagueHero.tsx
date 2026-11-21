/* =========================================================
   Vague décorative en bas des heros
   ---------------------------------------------------------
   Par défaut : la vague dorée du hero d'accueil.
   Pour une vague propre à une page, il suffira d'écrire :
   <VagueHero src="/decorations/vagues/ma-nouvelle-vague.webp" />
   ========================================================= */

type VagueHeroProps = {
  src?: string;
  className?: string;
};

export default function VagueHero({
  src = "/decorations/vagues/vague_longue_dore_hero.webp",
  className = "",
}: VagueHeroProps) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={`hero__wave ${className}`}
    />
  );
}
