import { Headset, MessageCircle, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const qualities = [
  {
    title: "À l’écoute",
    description: "Vos besoins compris et expliqués clairement.",
    icon: Headset,
  },
  {
    title: "Sérieuse & fiable",
    description: "Des solutions claires, durables et maintenables.",
    icon: Shield,
  },
  {
    title: "Transparente",
    description: "Une communication simple, sans jargon inutile.",
    icon: MessageCircle,
  },
];

export default function Hero() {
  return (
    <section className="hero section-dark">
      {/* Visuel du Hero */}
{/* Visuel mobile / tablette */}
<div className="hero__visual-mobile">
  <div className="hero__visual-mobile-mask">
    <img
      src="/home/gerante-de-jess-tech-de-dos.png"
      alt=""
      aria-hidden="true"
      className="hero__visual-mobile-image"
    />
  </div>
</div>

{/* Visuel desktop */}
<div className="hero__visual">
  <div className="hero__visual-mask">
    <img
      src="/home/gerante-de-jess-tech-de-dos.png"
      alt=""
      aria-hidden="true"
      className="hero__visual-image"
    />
  </div>
</div>

      <div className="hero__container">
        <div className="hero__layout">
          <div className="hero__content">
            {/* Badge */}
            <span className="badge badge-primary uppercase tracking-wide">
              Jess Tech
            </span>

            {/* Titre */}
<h1 className="hero__title mt-6">
  Des <span className="text-gradient-blue">solutions</span> web propres,
  <span className="text-gradient-blue"> utiles </span>
  et
  <span className="text-gradient-blue">
    {" "}
    bien construites
  </span>
</h1>

            {/* Description */}
            <p className="hero__description text-slate-300">
              Développeuse freelance, j&apos;accompagne particuliers, artisans,
              associations et petites entreprises dans la{" "}
              <Link
                to="/CreationSiteInternet"
                className="font-semibold text-blue-400 transition-colors duration-300 hover:text-blue-300"
              >
                création de sites web
              </Link>{" "}
              et leurs besoins techniques.
            </p>

            {/* Actions */}
            <div className="hero__actions">
              <Link to="/contact" className="btn-primary">
                Demander un devis
              </Link>

              <Link to="/services" className="btn-secondary">
                Découvrir mes services
              </Link>
            </div>

            {/* Qualités */}
            <div className="hero__cards grid-cols-3">
              {qualities.map(({ title, description, icon: Icon }) => (
                <article key={title} className="hero__card">
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div
                      className="
                        flex
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

                    <h2 className="text-sm font-semibold md:text-base lg:text-lg">
                      {title}
                    </h2>
                  </div>

                  <p className="mt-2 text-xs leading-snug text-slate-400 md:text-sm lg:text-base">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Vague basse */}
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