import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedCardBorder from "../decorations/AnimatedCardBorder";

const features = [
  "Design soigné",
  "Code propre",
  "Optimisé",
];

export default function PortfolioPreview() {
  return (
    <section className="section-light section-fade-light-soft section-spacing">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[400px_minmax(0,1fr)] lg:items-center xl:gap-12">
          
          {/* Introduction */}
          <div className="section-intro max-w-xl">
            <p className="section-label">Réalisations</p>

            <h2>
              Des projets{" "}
              <span className="text-gradient-blue">
                concrets
              </span>
              ,
              <br />
              des résultats utiles
            </h2>

            <p>
              Découvrez prochainement une sélection de sites et projets réalisés
              pour des clients de différents secteurs.
            </p>

            <Link
              to="/realisations"
              className="btn-primary mt-6"
            >
              Voir les réalisations →
            </Link>
          </div>

          {/* Aperçu d'une réalisation */}
          <div
            className="
              card-glow
              group
              relative
              overflow-hidden
              rounded-3xl
              bg-[#081120]
              text-white
            "
          >
            <AnimatedCardBorder />

            <div className="grid items-center gap-6 p-5 sm:p-6 xl:grid-cols-[0.9fr_1.1fr] xl:gap-8 xl:p-7">
              
              {/* Maquette du projet */}
              <div
                className="
                  rounded-2xl
                  border
                  border-sky-500/20
                  bg-gradient-to-br
                  from-[#0b1730]
                  to-[#123c8a]/60
                  p-3
                "
              >
                {/* Faux navigateur */}
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

                {/* Capture */}
                <div
                  className="
                    relative
                    h-40
                    overflow-hidden
                    rounded-xl
                    border
                    border-sky-500/20
                    bg-blue-500/10
                    sm:h-44
                    xl:h-48
                  "
                >
                  <img
                    src="/portfolio/dupont-plomberie/dupont-plomberie-hero.webp"
                    alt="Aperçu du site vitrine Dupont Plomberie"
                    className="
                      absolute
                      left-1/2
                      h-full
                      max-w-none
                      -translate-x-[52%]
                      object-contain
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />
                </div>
              </div>

              {/* Présentation */}
              <div className="card-content-mobile min-w-0">
                <h3 className="text-slate-200">
  Les premières réalisations arrivent bientôt.
</h3>

                <p className="mt-3 text-slate-400">
                  Chaque projet est unique et pensé sur mesure selon vos objectifs.
                </p>

                <div className="card-features-mobile mt-5 flex flex-wrap gap-x-6 gap-y-3">
                  {features.map((feature) => (
                    <span
                      key={feature}
                      className="flex items-center gap-2 text-slate-200"
                    >
                      <Check
                        className="h-4 w-4 shrink-0 text-sky-500"
                        aria-hidden="true"
                      />

                      {feature}
                    </span>
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