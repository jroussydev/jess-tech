import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const garanties = [
  "Devis gratuit",
  "Aucun frais caché",
  "Accompagnement personnalisé",
];

export default function HeroTarifs() {
  return (
    <section className="hero section-dark">

      {/* =====================================================
          CONTENU
      ====================================================== */}
      <div className="hero__container">
        <div className="hero__layout">
          <div className="hero__content">

            {/* Label */}
            <p className="hero__label">
              Tarifs transparents
            </p>

            {/* Titre */}
            <h1 className="hero__title">
              Des tarifs{" "}
              <span className="text-gradient-blue">
                clairs
              </span>
              , sans surprise
            </h1>

            {/* Description */}
            <p className="hero__description max-w-2xl text-slate-300">
              Chaque projet commence par un échange afin de comprendre votre
              besoin. Vous recevez ensuite un devis détaillé avant le début de
              la prestation.
            </p>

            {/* Actions */}
            <div className="hero__actions">
              <Link
                to="/contact"
                className="btn-primary group gap-2"
              >
                Demander un devis

                <ArrowRight
                  className="
                    h-5
                    w-5
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                  aria-hidden="true"
                />
              </Link>

              <Link
                to="/services"
                className="btn-secondary"
              >
                Voir les prestations
              </Link>
            </div>

            {/* Garanties rapides */}
            <div
              className="
                mt-7
                flex
                flex-wrap
                gap-x-6
                gap-y-3
              "
            >
              {garanties.map((garantie) => (
                <div
                  key={garantie}
                  className="flex items-center gap-2 text-slate-300"
                >
                  <Check
                    className="h-4 w-4 shrink-0 text-sky-500"
                    aria-hidden="true"
                  />

                  <span className="text-sm sm:text-base">
                    {garantie}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

        {/* Vague basse */}
        <img
  src="/decorations/vagues/01.png"
  alt=""
  aria-hidden="true"
  className="
    pointer-events-none
    absolute
    left-0
    z-30
    max-w-none
    object-fill
    origin-left

    -bottom-13
    h-50
    w-[140%]
    scale-x-[1.05]

    sm:h-60
    sm:w-[130%]

    md:h-40
    md:w-[120%]

    lg:bottom-40
    lg:h-124
    lg:w-full
    lg:scale-x-[1.18]
    lg:translate-y-1/2
  "
/>

    </section>
  );
}