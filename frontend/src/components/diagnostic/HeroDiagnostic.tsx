import { Link } from "react-router-dom";
import {
  ArrowRight,
  Search,
  ScanSearch,
  Route,
} from "lucide-react";

const points = [
  {
    title: "Observer le problème",
    description:
      "Partir de ce qui se produit réellement sur le site.",
    icon: Search,
  },
  {
    title: "Rechercher son origine",
    description:
      "Examiner les éléments techniques concernés pour mieux comprendre la situation.",
    icon: ScanSearch,
  },
  {
    title: "Déterminer la suite",
    description:
      "Identifier les corrections ou interventions qui peuvent être nécessaires.",
    icon: Route,
  },
];

export default function HeroDiagnostic() {
  return (
    <section className="hero section-dark">
      <div className="hero__visual-mask md:hidden" aria-hidden="true">
        <img
          src="/services/diagnostic/hero-diagnostic.webp"
          alt=""
          className="hero__visual"
        />
      </div>

      <div
        className="hero__visual-mask hero__visual-mask--desktop hidden md:block"
        aria-hidden="true"
      >
        <img
          src="/services/diagnostic/hero-diagnostic.webp"
          alt=""
          className="hero__visual"
        />
      </div>

      <div className="site-container relative z-10">
        <div className="hero__content">
          <span className="badge badge-primary">
            Diagnostic technique
          </span>

          <h1 className="mt-5">
            Votre site rencontre un problème ?{" "}
            <span className="text-gradient">
              Cherchons d’abord ce qui se passe.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl">
            Erreur, comportement inhabituel, problème d’affichage ou
            fonctionnement difficile à expliquer : le diagnostic permet
            d’examiner la situation avant de décider de l’intervention à
            réaliser.
          </p>

          <div className="hero__actions mt-8">
            <Link to="/contact" className="btn-primary">
              Faire examiner mon site
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>

            <a
              href="#problemes-diagnostic"
              className="btn-secondary"
            >
              Voir les problèmes examinés
            </a>
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