import { ArrowDown, MessageSquareText } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicesHero() {
  return (
    <section className="section-dark section-spacing relative isolate overflow-hidden">
      <img
    src="/decorations/vagueLumineuse2.webp"
    alt=""
    aria-hidden="true"
    className="
      pointer-events-none
      absolute
      left-[48%]
      top-114
      z-0
      hidden
      h-[1000px]
      w-auto
      -translate-y-1/2
      opacity-100
      lg:block
    "
  />
      <div className="site-container">
        <div className="section-intro max-w-5xl">
          <p className="section-label">Services</p>

          <h1 className="max-w-4xl sm:text-5xl lg:text-6xl">
            Des solutions web adaptées à chaque projet
          </h1>

          <div className="max-w-3xl mt-5 space-y-4 text-lg leading-8 text-slate-400">
  <p>
    Chaque entreprise, association ou indépendant rencontre des besoins
    différents. Jess Tech vous accompagne pour créer, améliorer, maintenir ou
    débloquer vos outils web avec une solution adaptée à votre situation.
  </p>

  <p>
    L’objectif est simple : comprendre votre besoin avant de vous proposer une
    prestation, sans ajouter de complexité inutile.
  </p>
</div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#choisir-service"
              className="btn-primary w-full gap-2 sm:w-auto"
            >
              Trouver le bon service

              <ArrowDown
                className="h-5 w-5 shrink-0"
                aria-hidden="true"
              />
            </a>

            <Link
              to="/contact"
              className="btn-secondary w-full gap-2 sm:w-auto"
            >
              Parler de mon projet

              <MessageSquareText
                className="h-5 w-5 shrink-0"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}