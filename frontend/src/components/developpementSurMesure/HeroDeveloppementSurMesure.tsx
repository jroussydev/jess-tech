import { Code2, Blocks, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroDeveloppementSurMesure() {
  return (
    <section className="hero section-dark">
      {/* Visuel mobile */}
      <div
        className="hero__visual hero__visual--mobile"
        aria-hidden="true"
      >
        <div
          className="hero__visual-image"
          style={{
            backgroundImage:
              "url('/services/developpement-sur-mesure/hero-developpement.webp')",
          }}
        />
      </div>

      {/* Visuel desktop */}
      <div
        className="hero__visual hero__visual--desktop"
        aria-hidden="true"
      >
        <div
          className="hero__visual-image"
          style={{
            backgroundImage:
              "url('/services/developpement-sur-mesure/hero-developpement.webp')",
          }}
        />
      </div>

      <div className="site-container hero__container">
        <div className="hero__content">
          <span className="badge badge-primary">
            Développement sur mesure
          </span>

          <h1 className="hero__title">
            Votre projet web,{" "}
            <span className="text-gradient">
              du concept jusqu’au code.
            </span>
          </h1>

          <p className="hero__description">
            Site développé sur mesure, interface spécifique ou
            fonctionnalité particulière : je construis la solution à partir
            de ce que votre projet doit permettre de faire.
          </p>

          <div className="hero__actions">
            <a href="#possibilites" className="btn-primary">
              Voir les possibilités
            </a>

            <Link to="/contact" className="btn-secondary">
              Parler de mon projet
            </Link>
          </div>

          <div className="hero__cards">
            <article className="hero__card">
              <Code2 aria-hidden="true" />

              <div>
                <h2>Développement dédié</h2>
                <p>
                  Un site ou une partie du projet peut être développé
                  spécifiquement.
                </p>
              </div>
            </article>

            <article className="hero__card">
              <Blocks aria-hidden="true" />

              <div>
                <h2>Fonctionnalités spécifiques</h2>
                <p>
                  Des fonctionnalités peuvent être créées selon le
                  fonctionnement recherché.
                </p>
              </div>
            </article>

            <article className="hero__card">
              <Workflow aria-hidden="true" />

              <div>
                <h2>Choix techniques</h2>
                <p>
                  Les technologies sont choisies en fonction du projet.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>

      <img
        src="/decorations/vagues/09.png"
        alt=""
        className="hero__wave"
        aria-hidden="true"
      />
    </section>
  );
}