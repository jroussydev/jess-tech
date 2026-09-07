import {
  Lightbulb,
  Puzzle,
  MessageSquareText,
} from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  {
    title: "Partir de votre besoin",
    description:
      "On commence par ce que vous voulez obtenir, pas par une technologie imposée.",
    icon: Lightbulb,
  },
  {
    title: "S’adapter au projet",
    description:
      "Le développement est pensé selon votre fonctionnement et vos contraintes.",
    icon: Puzzle,
  },
  {
    title: "Garder les choses claires",
    description:
      "Les choix faits pour le projet vous sont expliqués simplement.",
    icon: MessageSquareText,
  },
];

export default function HeroDeveloppementSurMesure() {
  return (
    <section className="hero section-dark">

      {/* Visuel mobile */}

      <div
        className="hero__visual-mobile"
        aria-hidden="true"
      >
        <div className="hero__visual-mobile-mask">
          <img
            src="/services/developpement-sur-mesure/hero-developpement.webp"
            alt=""
            className="hero__visual-mobile-image"
          />
        </div>
      </div>

      {/* Visuel desktop */}

      <div
        className="hero__visual"
        aria-hidden="true"
      >
        <div className="hero__visual-mask">
          <img
            src="/services/developpement-sur-mesure/hero-developpement.webp"
            alt=""
            className="hero__visual-image"
          />
        </div>
      </div>

      {/* Overlay */}

      <div
        className="hero__overlay"
        aria-hidden="true"
      />

      {/* Contenu */}

      <div className="hero__container">
        <div className="hero__layout">
          <div className="hero__content">

            <span className="badge badge-primary">
              Développement sur mesure
            </span>

            <h1 className="hero__title mt-5">
              Un projet web pensé pour{" "}
              <span className="text-gradient-blue">
                ce qu’il doit vraiment faire.
              </span>
            </h1>

            <p className="hero__description">
              Besoin d’un site, d’un outil ou d’une fonctionnalité qui sort du
              cadre classique ? Je pars de votre besoin pour construire une
              solution adaptée, sans ajouter de complexité inutile.
            </p>

            {/* Actions */}

            <div className="hero__actions">
              <Link
                to="/contact"
                className="btn-primary"
              >
                Parler de mon projet
              </Link>

              <a
                href="#possibilites"
                className="btn-secondary"
              >
                Voir les possibilités
              </a>
            </div>

            {/* Points clés */}

            <div className="hero__cards grid-cols-3">
              {highlights.map(({ title, description, icon: Icon }) => (
                <article
                  key={title}
                  className="hero__card"
                >
                  <div className="hero__card-heading">
                    <div
                      className="
                        hero__card-icon
                        items-center
                        justify-center
                        text-blue-400
                      "
                    >
                      <Icon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </div>

                    <h2 className="hero__card-title">
                      {title}
                    </h2>
                  </div>

                  <p className="hero__card-description">
                    {description}
                  </p>
                </article>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Vague */}

      <img
        src="/decorations/vagues/09.png"
        alt=""
        className="hero__wave"
        aria-hidden="true"
      />

    </section>
  );
}