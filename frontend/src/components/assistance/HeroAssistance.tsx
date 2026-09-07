import {
  CircleHelp,
  MessageSquareText,
  HandHelping,
} from "lucide-react";
import { Link } from "react-router-dom";

const points = [
  {
    title: "Pas besoin de connaître le problème",
    description:
      "Expliquez simplement ce qui ne fonctionne pas ou ce que vous aimeriez faire.",
    icon: CircleHelp,
  },
  {
    title: "Des explications simples",
    description:
      "Je vous explique les choses clairement, sans vous noyer dans les termes techniques.",
    icon: MessageSquareText,
  },
  {
    title: "Une aide adaptée",
    description:
      "Installation, dépannage ou prise en main : l’intervention s’adapte à votre besoin.",
    icon: HandHelping,
  },
];

export default function HeroAssistance() {
  return (
    <section className="hero section-dark">

      {/* Visuel mobile */}

      <div
        className="hero__visual-mobile"
        aria-hidden="true"
      >
        <div className="hero__visual-mobile-mask">
          <img
            src="/services/assistance/hero-assistance.webp"
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
            src="/services/assistance/hero-assistance.webp"
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
              Assistance technique
            </span>

            <h1 className="hero__title mt-5">
              Un problème informatique ou{" "}
              <span className="text-gradient-blue">
                simplement besoin d’un coup de main ?
              </span>
            </h1>

            <p className="hero__description">
              Ordinateur, logiciel, imprimante, réseau ou outil numérique :
              je vous aide à installer, configurer, dépanner ou simplement
              mieux comprendre ce que vous utilisez.
            </p>

            {/* Actions */}

            <div className="hero__actions">
              <a
                href="#interventions-assistance"
                className="btn-primary"
              >
                Voir les interventions
              </a>

              <Link
                to="/contact"
                className="btn-secondary"
              >
                Expliquer mon besoin
              </Link>
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