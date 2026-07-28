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
            
<img src="/decorations/image-Hero-CarteDeFrance.png"
        alt="carte de France représentant le travail à Beaurieux et à distance"
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -top-75
          left-[10%]
          hidden
          
          w-xl
          lg:block
        "
      />

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLocalisation;