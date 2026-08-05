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
        <div className="home-portfolio__layout">
          {/* Introduction */}
          <div className="section-intro home-portfolio__intro">
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
              className="btn-primary home-portfolio__link"
            >
              Voir les réalisations →
            </Link>
          </div>

          {/* Aperçu d’une réalisation */}
          <div className="home-portfolio__preview">
            <div className="home-portfolio__content">
              {/* Maquette du projet */}
              <div className="home-portfolio__browser">
                <div
                  className="home-portfolio__browser-bar"
                  aria-hidden="true"
                >
                  <span className="home-portfolio__browser-dot" />
                  <span className="home-portfolio__browser-dot" />
                  <span className="home-portfolio__browser-dot" />
                </div>

                <div className="home-portfolio__image-wrapper">
                  <img
                    src="/portfolio/dupont-plomberie/dupont-plomberie-hero.webp"
                    alt="Aperçu du site vitrine Dupont Plomberie"
                    className="home-portfolio__image"
                  />
                </div>
              </div>

              {/* Présentation */}
              <div className="home-portfolio__text">
                <h3 className="home-portfolio__title">
                  Les premières réalisations arrivent bientôt.
                </h3>

                <p className="home-portfolio__description">
                  Chaque projet est unique et pensé sur mesure selon vos
                  objectifs.
                </p>

                <div className="home-portfolio__features">
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