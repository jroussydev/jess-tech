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
    <section className="home-hero section-dark section-spacing">
      {/* Image uniquement décorative, visible sur ordinateur */}
      <img
        src="/home/profil2.webp"
        alt=""
        aria-hidden="true"
        className="home-hero__image"
      />

      <div className="site-container home-hero__layout">
        <div className="home-hero__content">
          <span className="badge badge-primary home-hero__badge">
            Jess Tech
          </span>

          <h1 className="home-hero__title">
            Des solutions web
            <br />
            propres,
            <span className="home-hero__highlight"> utiles </span>
            et
            <span className="home-hero__highlight">
              {" "}
              bien construites.
            </span>
          </h1>

          <p className="home-hero__description">
            Développeuse freelance, j&apos;accompagne particuliers, artisans,
            associations et petites entreprises dans la{" "}
            <Link
              to="/CreationSiteInternet"
              className="home-hero__text-link"
            >
              création de sites web
            </Link>{" "}
            et leurs besoins techniques.
          </p>

          {/* Actions principales */}
          <div className="home-hero__actions">
            <Link to="/contact" className="btn-primary">
              Demander un devis
            </Link>

            <Link to="/services" className="btn-secondary">
              Découvrir mes services
            </Link>
          </div>

          {/* Qualités mises en avant */}
          <div className="home-hero__qualities">
            {qualities.map(({ title, description, icon: Icon }) => (
              <article key={title} className="home-hero__quality">
                <div className="home-hero__quality-header">
                  <div className="home-hero__quality-icon">
                    <Icon aria-hidden="true" />
                  </div>

                  <h2 className="home-hero__quality-title">
                    {title}
                  </h2>
                </div>

                <p className="home-hero__quality-description">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}