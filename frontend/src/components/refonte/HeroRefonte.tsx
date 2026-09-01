import {
  RefreshCw,
  SearchCheck,
  Layers3,
} from "lucide-react";

import { Link } from "react-router-dom";

const refonteHighlights = [
  {
    title: "Conserver l’utile",
    description:
      "Les éléments qui fonctionnent encore peuvent rester en place.",
    icon: SearchCheck,
  },
  {
    title: "Reprendre ce qui bloque",
    description:
      "Design, structure ou contenus peuvent être retravaillés.",
    icon: RefreshCw,
  },
  {
    title: "Faire évoluer l’existant",
    description:
      "Le site évolue selon ce qui doit réellement changer.",
    icon: Layers3,
  },
];

export default function HeroRefonte() {
  return (
    <section className="hero section-dark">
      {/* =====================================================
          VISUEL MOBILE / TABLETTE
          Provisoire pour la première passe
      ====================================================== */}

      <div className="hero__visual-mobile">
        <div className="hero__visual-mobile-mask">
          <img
            src="/services/refonte/hero-refonte.webp"
            alt=""
            aria-hidden="true"
            className="hero__visual-mobile-image"
          />
        </div>
      </div>

      {/* =====================================================
          VISUEL DESKTOP
          Provisoire pour la première passe
      ====================================================== */}

      <div className="hero__visual">
        <div className="hero__visual-mask">
          <img
            src="/services/refonte/hero-refonte.webp"
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
            <span className="badge badge-primary uppercase tracking-wide">
              Refonte de site web
            </span>

            {/* Titre */}
            <h1 className="hero__title mt-6">
              Votre site existe déjà.{" "}
              <span className="text-gradient-blue">
                Voyons ce qu’il faut vraiment refaire.
              </span>
            </h1>

            {/* Description */}
            <p className="hero__description text-slate-300">
              Design, organisation des pages, affichage mobile, contenus ou
              fonctionnement : une refonte permet de reprendre ce qui ne
              convient plus tout en conservant ce qui mérite de l’être.
            </p>

            {/* Actions */}
            <div className="hero__actions">
              <Link
                to="/contact"
                className="btn-primary"
              >
                Étudier ma refonte
              </Link>

              <a
                href="#elements-refonte"
                className="btn-secondary"
              >
                Voir ce qui peut être retravaillé
              </a>
            </div>

            {/* Repères */}
            <div className="hero__cards grid-cols-3">
              {refonteHighlights.map(
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