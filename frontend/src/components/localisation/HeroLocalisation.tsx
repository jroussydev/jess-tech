import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const HeroLocalisation = () => {
  return (
    <section
      className="
        hero
        section-dark
        
        relative
        overflow-visible
      "
    >
{/* Visuel mobile / tablette */}
<div className="hero__visual-mobile">
  <div className="hero__visual-mobile-mask">
    <img
      src="/decorations/image-Hero-CarteDeFrance.png"
      alt=""
      aria-hidden="true"
      className="hero__visual-mobile-image"
    />
  </div>
</div>

{/* Visuel desktop */}
<div
  className="
    contact-hero__visual
    pointer-events-none
    absolute
    inset-y-0
    right-0
    z-10
    hidden
    w-[58%]
    lg:block
  "
>
<img
  src="/decorations/image-Hero-CarteDeFrance.png"
  alt=""
  aria-hidden="true"
  className="
    absolute
    bottom-0
    right-50
    h-full
    w-auto
    max-w-none
    opacity-80

    [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]
    [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]
  "
/>
</div>

      <div className="site-container section-spacing relative z-10">
        <div
          className="
            grid
            items-center
            gap-8

            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-12

            xl:grid-cols-2
            xl:gap-16
          "
        >
          {/* Contenu */}
          <div className="section-intro min-w-0">
            <div className="badge badge-primary gap-2">
              <MapPin
                className="h-4 w-4 shrink-0"
                aria-hidden="true"
              />

              <span>
                Basée à Beaurieux, dans l’Aisne
              </span>
            </div>

            <p className="section-label mt-6">
              Zone d’intervention
            </p>

            <h1 className="max-w-3xl">
              Développeuse web locale et disponible{" "}
              <span className="text-gradient-blue">
                partout en France
              </span>
            </h1>

            <p className="max-w-2xl">
              Jess Tech accompagne les particuliers, artisans, commerçants,
              associations et petites entreprises dans leurs projets web.
            </p>

            <p className="max-w-2xl">
              Les interventions techniques peuvent être réalisées localement
              autour de Beaurieux. La création, la refonte et la maintenance de
              sites internet peuvent également être assurées à distance partout
              en France.
            </p>

            {/* Actions */}
            <div
              className="
                mt-7
                flex
                flex-wrap
                items-center
                gap-3

                sm:mt-8
                sm:gap-4
              "
            >
              <Link
                to="/contact"
                className="btn-primary"
              >
                Me contacter
              </Link>

              <Link
                to="/services"
                className="btn-secondary"
              >
                Découvrir mes services
              </Link>
            </div>
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
    </section>
  );
};

export default HeroLocalisation;