
import { Link } from "react-router-dom";

export default function ServicesHero() {
  return (
    <section className="hero">

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

    md:h-80
    md:w-[120%]

    lg:bottom-60
    lg:h-174
    lg:w-full
    lg:scale-x-[1.18]
    lg:translate-y-1/2
  "
/>
      <div className="hero__container">
        <div className="hero__layout">
          <div className="hero__content">
            <p className="hero__label">
              Services
            </p>

            <h1 className="hero__title">
              Des solutions web{" "}
              <span className="text-gradient-blue">
                adaptées
              </span>{" "}
              à chaque projet
            </h1>

            <div className="hero__description space-y-4">
              <p>
                Chaque entreprise, association ou indépendant rencontre des
                besoins différents. Jess Tech vous accompagne pour créer,
                améliorer, maintenir ou débloquer vos outils web avec une
                solution adaptée à votre situation.
              </p>

              <p>
                L’objectif est simple : comprendre votre besoin avant de vous
                proposer une prestation, sans ajouter de complexité inutile.
              </p>
            </div>

            <div className="hero__actions">
              <a
                href="#choisir-service"
                className="btn-primary"
              >
                Trouver le bon service

                <img
  src="/decorations/fleche-bas.png"
  alt=""
  aria-hidden="true"
  className="
    h-8
    w-8
    shrink-0
    
    object-contain
    transition-transform
    duration-300
    group-hover:translate-y-1
  "
/>
              </a>

              <Link
                to="/contact"
                className="btn-secondary"
              >
                Parler de mon projet

                
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}