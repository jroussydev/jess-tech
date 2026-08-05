import { Link } from "react-router-dom";

const features = [
  "Design soigné",
  "Code propre",
  "Optimisé",
];

export default function PortfolioPreview() {
  return (
    <section className="section-light section-spacing rounded-t-2xl">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
          {/* Introduction */}
          <div className="section-intro max-w-xl self-center">
            <p className="section-label">Réalisations</p>

            <h2>
              Des projets concrets,
              <br />
              des résultats utiles
            </h2>

            <p>
              Découvrez prochainement une sélection de sites et projets réalisés
              pour des clients de différents secteurs.
            </p>

            <Link
              to="/realisations"
              className="btn-primary mt-8 w-full sm:w-auto"
            >
              Voir les réalisations →
            </Link>
          </div>

{/* Aperçu d’une réalisation */}
<div className="w-full rounded-3xl bg-gradient-to-r from-[#081120] to-[#0b1d35] p-5 text-white sm:p-6 lg:p-7">
  <div className="grid items-center gap-6 xl:grid-cols-[0.9fr_1.1fr] xl:gap-8">
    {/* Maquette du projet */}
    <div className="rounded-2xl border border-blue-400/30 bg-gradient-to-br from-[#0b1730] to-[#123c8a]/60 p-3 shadow-[0_0_35px_rgba(13,91,255,0.25)]">
      <div
        className="mb-3 flex gap-2"
        aria-hidden="true"
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <span
            key={index}
            className="h-2.5 w-2.5 rounded-full bg-slate-300"
          />
        ))}
      </div>

      <div className="relative h-40 overflow-hidden rounded-xl border border-blue-300/20 bg-blue-500/20 sm:h-44 xl:h-48">
        <img
          src="/portfolio/dupont-plomberie/dupont-plomberie-hero.webp"
          alt="Aperçu du site vitrine Dupont Plomberie"
          className="absolute left-1/2 h-full max-w-none -translate-x-[52%] object-contain"
        />
      </div>
    </div>

    {/* Présentation */}
    <div className="min-w-0">
      <h3 className="text-2xl font-bold leading-tight text-slate-200 sm:text-3xl">
        Les premières réalisations arrivent bientôt.
      </h3>

      <p className="mt-3 text-lg leading-7 text-slate-400">
        Chaque projet est unique et pensé sur mesure selon vos objectifs.
      </p>

      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-base">
        {features.map((feature) => (
          <span key={feature}>✓ {feature}</span>
        ))}
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}