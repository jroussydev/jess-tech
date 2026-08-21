import {
  Building2,
  Castle,
  House,
  Trees,
} from "lucide-react";

import { Link } from "react-router-dom";

const ZonesDesservies = () => {
  const communes = [
    {
      id: "berry-au-bac",
      label: "Berry-au-Bac",
      nom: (
        <>
          Berry-au-
          <br />
          Bac
        </>
      ),
      icon: Trees,
    },
    {
      id: "corbeny",
      label: "Corbeny",
      nom: "Corbeny",
      icon: Trees,
    },
    {
      id: "villeneuve-sur-aisne",
      label: "Villeneuve-sur-Aisne",
      nom: (
        <>
          Villeneuve-
          <br />
          sur-Aisne
        </>
      ),
      icon: House,
    },
    {
      id: "braine",
      label: "Braine",
      nom: "Braine",
      icon: House,
    },
    {
      id: "fismes",
      label: "Fismes",
      nom: "Fismes",
      icon: Building2,
    },
    {
      id: "laon",
      label: "Laon",
      nom: "Laon",
      icon: Castle,
    },
    {
      id: "cormontreuil",
      label: "Cormontreuil",
      nom: "Cormontreuil",
      icon: Building2,
    },
    {
      id: "reims",
      label: "Reims",
      nom: "Reims",
      icon: Building2,
    },
  ];

  return (
    <section
      className="
        section-dark
        section-fade-dark-soft
        section-spacing
      "
    >
      <div className="site-container">

        {/* Introduction */}
        <div className="section-intro max-w-3xl">
          <p className="section-label">
            Principaux secteurs desservis
          </p>

          <h2>
            Les communes où j’interviens{" "}
            <span className="text-gradient-blue">
              régulièrement
            </span>
          </h2>

          <p className="max-w-2xl text-slate-300">
            Basée à Beaurieux, j’interviens dans différentes communes de
            l’Aisne et des alentours pour les prestations nécessitant une
            présence sur place.
          </p>
        </div>

        {/* Cartes des communes */}
        <div
          className="
            mt-9
            grid
            grid-cols-2
            gap-3

            sm:grid-cols-3
            sm:gap-4

            lg:grid-cols-4

            xl:grid-cols-8
          "
        >
          {communes.map(({ id, label, nom, icon: Icon }) => (
            <Link
              key={id}
              to={`/localisation/${id}`}
              className="group block min-w-0"
              aria-label={`Voir les services de création de site internet de Jess Tech à ${label}`}
            >
              <article
                className="
                  card-dark
                  card-glow
                  relative
                  flex
                  h-full
                  min-w-0
                  flex-col
                  items-center
                  text-center
                  !p-3

                  sm:!p-4
                "
              >
                {/* Icône */}
                <Icon
                  className="
                    h-9
                    w-9
                    shrink-0
                    stroke-[1.4]
                    text-sky-500
                    transition-transform
                    duration-300
                    group-hover:scale-110

                    sm:h-11
                    sm:w-11

                    lg:h-12
                    lg:w-12
                  "
                  aria-hidden="true"
                />

                {/* Commune */}
                <h3
                  className="
                    mt-3
                    min-h-10
                    leading-tight
                    text-slate-200
                  "
                >
                  {nom}
                </h3>

                {/* Alentours */}
                <p
                  className="
                    !mt-2
                    text-slate-400
                    !text-xs

                    sm:!text-sm
                  "
                >
                  et ses alentours
                </p>
              </article>
            </Link>
          ))}
        </div>

        {/* Commune absente */}
        <div
          className="
            mx-auto
            mt-7
            flex
            max-w-4xl
            items-center
            justify-center
            gap-3
            border-t
            border-sky-500/20
            pt-6
            text-center
          "
        >


          <p className="m-0 text-slate-300">
            Votre commune n’apparaît pas ? N’hésitez pas à{" "}
            <Link
              to="/contact"
              className="
                font-semibold
                text-sky-500
                transition-colors
                duration-300
                hover:text-sky-400
              "
            >
              me contacter
            </Link>
            , chaque demande est étudiée avec attention.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ZonesDesservies;