import {
  KeyRound,
  GraduationCap,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

const apresLivraison = [
  {
    title: "Vos accès",
    description:
      "Les accès et les éléments prévus à la livraison vous sont remis une fois le projet terminé.",
    icon: KeyRound,
  },
  {
    title: "Votre prise en main",
    description:
      "Un temps de prise en main est inclus selon la formule choisie pour vous présenter le fonctionnement de votre site.",
    icon: GraduationCap,
  },
  {
    title: "30 jours de garantie corrective",
    description:
      "Après la livraison, les problèmes directement liés à la réalisation du site restent couverts pendant 30 jours.",
    icon: ShieldCheck,
  },
];

export default function ApresMiseEnLigne() {
  return (
    <section className="section-light section-spacing">
      <div className="site-container">
        {/* Introduction */}
        <div className="section-intro">
          <p className="section-label">
            Après la mise en ligne
          </p>

          <h2>
            Votre site est en ligne. Et ensuite ?
          </h2>

          <p>
            Une fois le projet terminé, les accès et éléments prévus vous sont
            remis et un temps de prise en main vous permet de découvrir le
            fonctionnement de votre site.
          </p>
        </div>

        {/* Après livraison */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {apresLivraison.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="
                card-light
                group
                flex
                h-full
                flex-col
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-blue-500/20
                  bg-blue-500/5
                  text-blue-500
                  transition
                  duration-300
                  group-hover:scale-110
                "
              >
                <Icon
                  className="h-6 w-6"
                  aria-hidden="true"
                />
              </div>

              <h3 className="mt-5">
                {title}
              </h3>

              <p>
                {description}
              </p>
            </article>
          ))}
        </div>

        {/* Maintenance */}
        <div
          className="
            mt-12
            flex
            flex-col
            gap-5
            border-t
            border-slate-200
            pt-8
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="!mt-0 max-w-3xl">
            Vous souhaitez ensuite me confier les mises à jour, modifications
            ou évolutions de votre site ? Un service de maintenance est
            également disponible.
          </p>

          <Link
            to="/maintenance"
            className="
              group
              inline-flex
              shrink-0
              items-center
              gap-2
              font-semibold
              text-blue-600
              transition-colors
              duration-300
              hover:text-blue-500
            "
          >
            Découvrir la maintenance

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
        </div>
      </div>
    </section>
  );
}