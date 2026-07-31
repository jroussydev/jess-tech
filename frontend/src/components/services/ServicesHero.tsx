import { ArrowDown, MessageSquareText } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicesHero() {
  return (
    <section className="section-dark section-spacing">
      <div className="site-container">
        <div className="section-intro max-w-4xl">
          <p className="section-label">Services</p>

          <h1 className="sm:text-5xl lg:text-6xl">
            Des solutions web adaptées à chaque projet
          </h1>

          <p className="max-w-3xl text-base sm:text-lg sm:leading-8">
            Chaque entreprise, association ou indépendant rencontre des besoins
            différents. Jess Tech vous accompagne pour créer, améliorer,
            maintenir ou débloquer vos outils web avec une solution adaptée à
            votre situation.
          </p>

          <p className="max-w-3xl text-base sm:text-lg sm:leading-8">
            L’objectif est simple : comprendre votre besoin avant de vous
            proposer une prestation, sans ajouter de complexité inutile.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#choisir-service" className="btn-primary gap-2">
              Trouver le bon service
              <ArrowDown className="h-5 w-5" aria-hidden="true" />
            </a>

            <Link to="/contact" className="btn-secondary gap-2">
              Parler de mon projet
              <MessageSquareText
                className="h-5 w-5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}