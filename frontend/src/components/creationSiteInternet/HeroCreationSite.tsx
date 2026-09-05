import {
  LayoutTemplate,
  MonitorSmartphone,
  BadgeEuro,
} from "lucide-react";

import { Link } from "react-router-dom";

const creationHighlights = [
  {
    title: "One Page ou vitrine",
    description:
      "Plusieurs formats selon ce que vous souhaitez présenter.",
    icon: LayoutTemplate,
  },
  {
    title: "À partir de 299 €",
    description:
      "Des formules avec un tarif défini dès le départ.",
    icon: BadgeEuro,
  },
  {
    title: "Responsive",
    description:
      "Votre site est prévu pour ordinateur, tablette et mobile.",
    icon: MonitorSmartphone,
  },
];

export default function HeroCreationSite() {
  return (
    <section className="hero">
      {/* =====================================================
          VISUEL MOBILE / TABLETTE
      ====================================================== */}

      <div className="hero__visual-mobile">
        <div className="hero__visual-mobile-mask">
          <img
            src="/services/creation-site/hero-creation-site.webp"
            alt=""
            aria-hidden="true"
            className="hero__visual-mobile-image"
          />
        </div>
      </div>

      {/* =====================================================
          VISUEL DESKTOP
      ====================================================== */}

      <div className="hero__visual">
        <div className="hero__visual-mask">
          <img
            src="/services/creation-site/hero-creation-site.webp"
            alt=""
            aria-hidden="true"
            className="hero__visual-image"
          />
        </div>
      </div>

      {/* =====================================================
          CONTENU
      ====================================================== */}

      <div className="hero__container">
        <div className="hero__layout">
          <div className="hero__content">
            {/* Badge */}
            <p className="section-label">
              Création de site internet
            </p>

            {/* Titre */}
            <h1 className="hero__title mt-6">
              Un site pour montrer votre activité{" "}
              <span className="text-gradient-blue">
                à ceux qui la cherchent.
              </span>
            </h1>

            {/* Description */}
            <p className="hero__description text-slate-300">
              One Page, site vitrine ou projet plus complet : Jess Tech crée
              votre site pour présenter vos services, montrer vos réalisations
              et donner à vos visiteurs les informations nécessaires pour vous
              contacter.
            </p>

            {/* Actions */}
            <div className="hero__actions">
              <a
                href="#formules"
                className="btn-primary"
              >
                Voir les offres
              </a>

              <Link
                to="/contact"
                className="btn-secondary"
              >
                Parler de mon projet
              </Link>
            </div>

            {/* Repères sur la prestation */}
            <div className="hero__cards grid-cols-3">
              {creationHighlights.map(
                ({ title, description, icon: Icon }) => (
                  <article
                    key={title}
                    className="hero__card"
                  >
                    <div className="hero__card-heading">
                      <div
                        className="
                          hero__card-icon
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          border
                          border-blue-500/30
                          text-blue-500
                          md:h-9
                          md:w-9
                          lg:h-10
                          lg:w-10
                          lg:rounded-xl
                        "
                      >
                        <Icon
                          className="
                            h-4
                            w-4
                            md:h-5
                            md:w-5
                            lg:h-6
                            lg:w-6
                          "
                          aria-hidden="true"
                        />
                      </div>

                      <h2 className="hero__card-title font-semibold">
                        {title}
                      </h2>
                    </div>

                    <p className="hero__card-description text-slate-400">
                      {description}
                    </p>
                  </article>
                ),
              )}
            </div>
          </div>
        </div>

        {/* =====================================================
            VAGUE BASSE
        ====================================================== */}

        <img
          src="/decorations/vagues/09.png"
          alt=""
          aria-hidden="true"
          className="hero__wave"
        />
      </div>
    </section>
  );
}