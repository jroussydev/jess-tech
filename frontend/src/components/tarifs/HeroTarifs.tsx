import { ArrowRight, BadgeCheck, Eye, Handshake } from "lucide-react";
import { Link } from "react-router";

const engagements = [
  {
    icon: Eye,
    title: "Des prix affichés",
    description: "Tous mes tarifs sont sur cette page, avant même de me contacter.",
  },
  {
    icon: BadgeCheck,
    title: "Un devis détaillé",
    description: "Ce qui est prévu est écrit noir sur blanc avant de commencer.",
  },
  {
    icon: Handshake,
    title: "Aucun ajout imprévu",
    description: "Rien n’est ajouté au prix sans votre accord.",
  },
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
            <p className="section-label">
              Tarifs
            </p>

            {/* Titre */}
            <h1 className="hero__title">
              Des prix{" "}
              <span className="text-gradient-gold">
                affichés 
              </span>
              , sans{" "}
              <span className="text-gradient-blue">
              surprise
              </span>
            </h1>

            {/* Description */}
            <p className="hero__description max-w-2xl text-slate-300">
              Sites vitrines, maintenance, audit, assistance : tous mes tarifs
              sont sur cette page. Vous savez à quoi vous attendre avant même de
              me contacter, et vous recevez un devis détaillé avant tout
              démarrage.
            </p>

            {/* Actions */}
            <div className="hero__actions">
              <a href="#prix" className="btn-secondary group gap-2">
                Voir les prix
                <ArrowRight
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>

              <Link to="/contact" className="btn-primary btn-gold">
                Demander un devis
              </Link>
            </div>
            {/* Engagements (même style que les qualités de l'accueil) */}
            <div className="hero__cards grid-cols-3">
              {engagements.map(({ title, description, icon: Icon }) => (
                <article key={title} className="hero__card">
                  <div className="hero__card-heading">

                    {/* Icône */}
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
                        className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Titre */}
                    <h2 className="hero__card-title font-semibold">
                      <span className="glitter-band">{title}</span>
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="hero__card-description text-slate-400">
                    {description}
                  </p>
                </article>
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