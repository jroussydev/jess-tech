import { Link } from "react-router-dom";
import {
  ArrowRight,
  House,
  MonitorSmartphone,
  Users,
} from "lucide-react";

const points = [
  {
    title: "À distance",
    description:
      "Certaines interventions peuvent être réalisées directement à distance.",
    icon: MonitorSmartphone,
  },
  {
    title: "À domicile",
    description:
      "Une intervention sur place peut être proposée selon le besoin et la localisation.",
    icon: House,
  },
  {
    title: "Particuliers & professionnels",
    description:
      "L’assistance s’adapte au matériel, au problème rencontré et à votre niveau d’autonomie.",
    icon: Users,
  },
];

export default function HeroAssistance() {
  return (
    <section className="hero section-dark">
      <div className="hero__visual-mask md:hidden" aria-hidden="true">
        <img
          src="/services/assistance/hero-assistance.webp"
          alt=""
          className="hero__visual"
        />
      </div>

      <div
        className="hero__visual-mask hero__visual-mask--desktop hidden md:block"
        aria-hidden="true"
      >
        <img
          src="/services/assistance/hero-assistance.webp"
          alt=""
          className="hero__visual"
        />
      </div>

      <div className="site-container relative z-10">
        <div className="hero__content">
          <span className="badge badge-primary">
            Assistance technique
          </span>

          <h1 className="mt-5">
            Un problème à résoudre, une installation à faire ou{" "}
            <span className="text-gradient">
              simplement besoin d’aide ?
            </span>
          </h1>

          <p className="mt-6 max-w-3xl">
            À distance ou à domicile, Jess Tech vous accompagne pour
            installer, configurer, dépanner ou prendre en main vos outils
            informatiques.
          </p>

          <div className="hero__actions mt-8">
            <a
              href="#interventions-assistance"
              className="btn-primary"
            >
              Voir les interventions
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>

            <Link to="/contact" className="btn-secondary">
              Expliquer mon besoin
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