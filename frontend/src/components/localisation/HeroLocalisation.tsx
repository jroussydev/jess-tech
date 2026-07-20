import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const HeroLocalisation = () => {
  return (
    <section className="section-dark relative overflow-hidden">
      {/* Halo décoratif */}
      <div
        className="pointer-events-none absolute -right-32 top-12 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="site-container section-spacing relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contenu */}
          <div className="section-intro">
            <div className="badge badge-primary gap-2">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Basée à Beaurieux, dans l’Aisne
            </div>

            <p className="section-label mt-6">
              Zone d’intervention
            </p>

            <h1 className="max-w-3xl">
              Développeuse web locale et disponible partout en France
            </h1>

            <p className="max-w-2xl text-lg">
              Jess Tech accompagne les particuliers, artisans, commerçants,
              associations et petites entreprises dans leurs projets web.
            </p>

            <p className="max-w-2xl">
              Les interventions techniques peuvent être réalisées localement
              autour de Beaurieux. La création, la refonte et la maintenance de
              sites internet peuvent également être assurées à distance partout
              en France.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Me contacter
              </Link>

              <Link to="/services" className="btn-secondary">
                Découvrir mes services
              </Link>
            </div>
          </div>

          {/* Emplacement de la future carte */}
          <div className="relative">
            <div className="card-dark relative flex min-h-[380px] items-center justify-center overflow-hidden md:min-h-[450px] lg:min-h-[520px]">
              <div
                className="absolute inset-12 rounded-full border border-blue-500/10"
                aria-hidden="true"
              />

              <div
                className="absolute inset-24 rounded-full border border-blue-500/10"
                aria-hidden="true"
              />

              <div className="relative z-10 max-w-xs text-center">
                <MapPin
                  className="mx-auto h-10 w-10 text-blue-400"
                  aria-hidden="true"
                />

                <p className="mt-4 text-lg font-semibold text-slate-200">
                  Beaurieux
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  Intervention locale et accompagnement à distance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLocalisation;