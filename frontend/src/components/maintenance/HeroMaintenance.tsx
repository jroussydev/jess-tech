import { Link } from "react-router-dom";
import {
  ArrowRight,
  RefreshCw,
  Save,
  Wrench,
} from "lucide-react";

export default function HeroMaintenance() {
  const points = [
    {
      title: "Suivi régulier",
      description:
        "Les vérifications et interventions prévues sont réalisées selon la formule choisie.",
      icon: RefreshCw,
    },
    {
      title: "Sauvegardes",
      description:
        "Des points de restauration permettent de disposer d’une copie du site lorsque cela est prévu.",
      icon: Save,
    },
    {
      title: "Intervention en cas de besoin",
      description:
        "Les problèmes couverts par la maintenance peuvent être pris en charge lorsqu’ils apparaissent.",
      icon: Wrench,
    },
  ];

  return (
    <section className="hero section-dark">
      <div className="hero__visual-mask md:hidden" aria-hidden="true">
        <img
          src="/services/maintenance/hero-maintenance.webp"
          alt=""
          className="hero__visual"
        />
      </div>

      <div className="hero__visual-mask hero__visual-mask--desktop hidden md:block" aria-hidden="true">
        <img
          src="/services/maintenance/hero-maintenance.webp"
          alt=""
          className="hero__visual"
        />
      </div>

      <div className="site-container relative z-10">
        <div className="hero__content">
          <span className="badge badge-primary">
            Maintenance de site web
          </span>

          <h1 className="mt-5">
            Votre site est en ligne.{" "}
            <span className="text-gradient">
              Il faut maintenant le garder en état.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl">
            Mises à jour, sauvegardes, vérifications et interventions
            techniques : la maintenance permet de suivre votre site dans le
            temps et d’intervenir lorsque cela devient nécessaire.
          </p>

          <div className="hero__actions mt-8">
            <a href="#formules-maintenance" className="btn-primary">
              Voir les formules
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>

            <Link to="/contact" className="btn-secondary">
              Parler de mon site
            </Link>
          </div>

          <div className="hero__cards mt-10">
            {points.map(({ title, description, icon: Icon }) => (
              <article key={title} className="hero__card">
                <Icon
                  className="h-6 w-6 text-blue-400"
                  aria-hidden="true"
                />

                <h2 className="mt-3">{title}</h2>
                <p className="mt-2">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <img
        src="/decorations/vagues/09.png"
        alt=""
        className="hero__wave"
        aria-hidden="true"
      />
    </section>
  );
}