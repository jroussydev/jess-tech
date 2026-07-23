import { Link } from "react-router-dom";

export default function PortfolioPreview() {
  return (
    <section className="section-light section-spacing rounded-t-2xl">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[30%_70%] lg:items-center">
          {/* Bloc gauche */}
          <div className="section-intro self-center">
            <p className="section-label">
              Réalisations
            </p>

            <h2>
              Des projets concrets,
              des résultats utiles
            </h2>

            <p>
              Découvrez prochainement une sélection de sites et projets réalisés
              pour des clients de différents secteurs.
            </p>

            <Link
              to="/realisations"
              className="btn-primary mt-8"
            >
              Voir les réalisations →
            </Link>
          </div>

          {/* Bloc droit */}
          <div
            className="
              rounded-3xl
              bg-gradient-to-r
              from-[#081120]
              to-[#0b1d35]
              p-10
              text-white
            "
          >
            <div className="grid items-center gap-10 lg:grid-cols-2">
              {/* Maquette */}
              <div className="rounded-2xl border border-blue-400/30 bg-gradient-to-br from-[#0b1730] to-[#123c8a]/60 p-4 shadow-[0_0_35px_rgba(13,91,255,0.25)]">
                <div className="mb-4 flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-slate-300" />
                  <div className="h-3 w-3 rounded-full bg-slate-300" />
                  <div className="h-3 w-3 rounded-full bg-slate-300" />
                </div>

                <div className="rounded-xl border border-blue-300/20 bg-blue-500/20 p-5">
                  <img src="/decorations/home/profil2.png"
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -top-21
          left-[36%]
          hidden
          h-[1080px]
          w-auto
          lg:block
        "
      />
                </div>
              </div>

              {/* Texte */}
              <div>
                <h2 className="text-4xl font-bold text-slate-200">
                  Les premières réalisations arrivent bientôt.
                </h2>

                <p className="mt-4 text-slate-400">
                  Chaque projet est unique et pensé sur mesure selon vos
                  objectifs.
                </p>

                <div className="mt-8 flex flex-wrap gap-8 text-sm">
                  <span>✓ Design soigné</span>
                  <span>✓ Code propre</span>
                  <span>✓ Optimisé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}