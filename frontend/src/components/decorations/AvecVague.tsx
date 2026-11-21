import type { ReactNode } from "react";
import VagueSection from "./VagueSection";

/* =========================================================
   Enveloppe une section et pose une vague à cheval
   sur son bord haut (à gauche ou à droite).
   Le « relative z-20 » fait passer la vague au-dessus
   de la section précédente.
   ========================================================= */

type AvecVagueProps = {
  cote: "gauche" | "droite";
  children: ReactNode;
};

export default function AvecVague({ cote, children }: AvecVagueProps) {
  return (
    <div className="relative z-20">
      <VagueSection cote={cote} position="haut" />
      {children}
    </div>
  );
}
