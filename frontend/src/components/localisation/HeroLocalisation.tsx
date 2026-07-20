import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const HeroLocalisation = () => {
  return (
    <section className="section-dark relative overflow-hidden">
      <div className="site-container section-spacing">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Partie gauche */}
          <div className="section-intro">
            <div className="badge badge-primary gap-2">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Basée à Beaurieux dans l’Aisne
            </div>

            <p className="section-label mt-6">Zone d’intervention</p>

            <h1>
              Proche de vous,
              <br />
              disponible partout en France.
            </h1>

            <p className="max-w-2xl">
              Jess Tech accompagne les particuliers, artisans, associations et
              petites entreprises dans leurs projets web. Les interventions
              techniques peuvent être réalisées localement autour de Beaurieux,
              tandis que les prestations de développement web sont proposées à
              distance partout en France.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Me contacter
              </Link>

              <Link to="/contact" className="btn-secondary">
                Demander un devis
              </Link>
            </div>
          </div>

          {/* Partie droite */}
          <div className="relative">
            <div className="card-dark flex min-h-[420px] items-center justify-center lg:min-h-[520px]">
              <p className="m-0 text-center text-sm uppercase tracking-widest text-blue-400">
                Carte de France à venir
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLocalisation;