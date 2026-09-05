import {
  RefreshCw,
  Save,
  Wrench,
} from "lucide-react";

import { Link } from "react-router-dom";

const maintenanceHighlights = [
  {
    title: "Suivi régulier",
    description:
      "Les opérations prévues sont réalisées selon la formule choisie.",
    icon: RefreshCw,
  },
  {
    title: "Sauvegardes",
    description:
      "Des points de restauration permettent de conserver une copie du site.",
    icon: Save,
  },
  {
    title: "Intervention",
    description:
      "Les problèmes couverts peuvent être pris en charge lorsqu’ils apparaissent.",
    icon: Wrench,
  },
];

export default function HeroMaintenance() {
  return (
    <section className="hero">
      {/* =====================================================
          VISUEL MOBILE / TABLETTE
      ====================================================== */}

      <div className="hero__visual-mobile">
        <div className="hero__visual-mobile-mask">
          <img
            src="/services/maintenance/hero-maintenance.webp"
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
            src="/services/maintenance/hero-maintenance.webp"
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
              Maintenance de site web
            </p>

            {/* Titre */}
            <h1 className="hero__title mt-6">
              Votre site est en ligne.{" "}
              <span className="text-gradient-blue">
                Gardons-le en état.
              </span>
            </h1>

            {/* Description */}
            <p className="hero__description text-slate-300">
              Mises à jour, sauvegardes, vérifications et interventions
              techniques : Jess Tech vous accompagne pour entretenir votre
              site dans le temps et intervenir lorsque cela devient
              nécessaire.
            </p>

            {/* Actions */}
            <div className="hero__actions">
              <a
                href="#formules-maintenance"
                className="btn-primary"
              >
                Voir les formules
              </a>

              <Link
                to="/contact"
                className="btn-secondary"
              >
                Parler de mon site
              </Link>
            </div>

            {/* Repères sur la prestation */}
            <div className="hero__cards grid-cols-3">
              {maintenanceHighlights.map(
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