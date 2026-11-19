import { offreActive, prixSites } from "../../data/tarifs";

type PrixFormuleProps = {
  nom: string; // "Lite", "Essentiel" ou "Pro"
};

export default function PrixFormule({ nom }: PrixFormuleProps) {
  const prix = prixSites[nom];

  // Offre terminée : simple prix bleu
  if (!offreActive) {
    return (
      <span className="text-2xl font-semibold text-blue-400">
        {prix.normal}
      </span>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Badge doré : étiquette + prix fondateur */}
      <span className="badge-fondateur inline-flex overflow-hidden rounded-lg border border-[#E9C46A] shadow-[0_0_10px_rgba(233,196,106,0.35)]">
        <span className="flex items-center bg-[#E9C46A] px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-[#001A5A]">
          Offre fondateur
        </span>
        <span className="px-3 py-1 text-xl font-semibold text-[#E9C46A]">
          {prix.fondateur}
        </span>
      </span>

      {/* Prix normal barré */}
      <span className="sr-only">au lieu de</span>
      <span className="text-lg text-slate-400 line-through decoration-slate-400/70">
        {prix.normal}
      </span>
    </div>
  );
}