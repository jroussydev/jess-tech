import {
  CircleHelp,
  SearchCheck,
  Route,
} from "lucide-react";
import { Link } from "react-router-dom";

const points = [
  {
    title: "Pas besoin de connaître la cause",
    description:
      "Vous me décrivez simplement ce que vous constatez sur votre site.",
    icon: CircleHelp,
  },
  {
    title: "Examiner avant d’intervenir",
    description:
      "Le but est d’abord de comprendre le problème avant de prévoir une correction.",
    icon: SearchCheck,
  },
  {
    title: "Savoir quoi faire ensuite",
    description:
      "Le diagnostic permet d’y voir plus clair sur les suites possibles.",
    icon: Route,
  },
];

export default function HeroDiagnostic() {
  return (
    <section className="hero section-dark">

      {/* Visuel mobile */}

      <div
        className="hero__visual-mobile"
        aria-hidden="true"
      >
        <div className="hero__visual-mobile-mask">
          <img
            src="/services/diagnostic/hero-diagnostic.webp"
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
            src="/services/diagnostic/hero-diagnostic.webp"
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
              Diagnostic technique
            </span>

            <h1 className="hero__title mt-5">
              Quelque chose ne va pas sur votre site ?{" "}
              <span className="text-gradient-blue">
                Commençons par comprendre pourquoi.
              </span>
            </h1>

            <p className="hero__description">
              Erreur, problème d’affichage, formulaire qui ne fonctionne plus
              ou comportement inhabituel : vous n’avez pas besoin d’en
              connaître la cause pour demander un diagnostic.
            </p>

            {/* Actions */}

            <div className="hero__actions">
              <Link
                to="/contact"
                className="btn-primary"
              >
                Faire examiner mon site
              </Link>

              <a
                href="#problemes-diagnostic"
                className="btn-secondary"
              >
                Voir les problèmes concernés
              </a>
            </div>

            {/* Points clés */}

            <div className="hero__cards grid-cols-3">
              {points.map(({ title, description, icon: Icon }) => (
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