import { Link } from "react-router";

type BanniereProps = {
  variant?: "header" | "footer" | "banniere";
};

export default function Banniere({ variant = "header" }: BanniereProps) {
  const isHeader = variant === "header";
 
  const isBanniere = variant === "banniere";

  const contenu = (
    <div className="flex items-center gap-4">
      <img
        src="/logo/logo_jesstech.webp"
        alt=""
        className={isHeader ? "h-12 w-12" : isBanniere ? "h-56 w-56" : "h-20 w-20"}
      />

      <div>
        {isBanniere && (
          <p className="mb-2 text-sm font-semibold tracking-[0.32em] text-[#E9C46A]">
            JESSTECH.FR
          </p>
        )}

        <p className={`font-titre font-title italic leading-none text-white ${isHeader ? "text-xl" : isBanniere ? "text-7xl" : "text-3xl"}`}>
          Jess <span className="text-[#2E7BFF]">Tech</span>
        </p>

        <div
  aria-hidden="true"
  className={`h-px bg-[linear-gradient(90deg,#9A6B22,#F3D58A_40%,#D4A24C_70%,transparent)] shadow-[0_0_6px_#D4A24C88] ${
    isHeader ? "my-1 w-20" : "my-4 h-0.5 w-36"
  }`}
/>

<p className={isHeader ? "text-xs leading-tight text-white/80" : "text-lg font-semibold text-white"}>
  Développeuse web <span className="text-[#E9C46A]">&amp;</span> assistante technique
</p>

        {!isHeader && (
          <p className="mt-2 text-sm tracking-wide text-[#B9C6E4]">
            Sites vitrines · Refonte · Maintenance · Assistance
          </p>
        )}
      </div>
    </div>
  );

  // Header et footer : tout le bloc est un lien vers l'accueil
  if (isBanniere) return contenu;
  return (
    <Link to="/" aria-label="Jess Tech, retour à l'accueil">
      {contenu}
    </Link>
  );
}