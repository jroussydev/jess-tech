import { MapPin, Navigation } from "lucide-react";
import { lazy, Suspense } from "react";
import ClientOnly from "../ClientOnly";
import MapPlaceholder from "./MapPlaceholder";

const ZoneLocaleMap = lazy(() => import("./ZoneLocaleMap"));

const CarteZoneLocale = () => {
  return (
    <section
      className="
        section-light
        section-fade-hero
        section-spacing
      "
    >
      <div className="site-container">
        <div
          className="
            grid
            items-center
            gap-10

            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-14

            xl:grid-cols-[0.9fr_1.1fr]
            xl:gap-16
          "
        >
          {/* Contenu */}
          <div className="section-intro min-w-0">
            <p className="section-label">
              Intervention locale
            </p>

            <h2>
              Une présence de proximité autour de{" "}
              <span className="text-gradient-blue">
                Beaurieux
              </span>
            </h2>

            <p className="max-w-2xl md:text-justify">
              Jess Tech est basée à Beaurieux, dans l’Aisne, et peut intervenir
              localement pour certains besoins techniques nécessitant un
              accompagnement sur place.
            </p>

            <p className="max-w-2xl md:text-justify">
              Les déplacements sont étudiés selon la nature de la demande, la
              distance et les conditions nécessaires à l’intervention.
            </p>

            {/* Informations */}
            <div className="mt-8 flex flex-col gap-6">
              {/* Point de départ */}
              <div
                className="
                  group
                  border-b
                  border-sky-500/20
                  pb-6
                "
              >
                <div className="flex items-center gap-3">
                  <MapPin
                    className="
                      h-7
                      w-7
                      shrink-0
                      text-sky-500
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                    aria-hidden="true"
                  />

                  <h3 className="text-slate-950">
                    Point de départ
                  </h3>
                </div>

                <p className="mt-2 max-w-xl text-slate-600">
                  Beaurieux, commune située dans le département de l’Aisne.
                </p>
              </div>

              {/* Déplacements */}
              <div className="group">
                <div className="flex items-center gap-3">
                  <Navigation
                    className="
                      h-7
                      w-7
                      shrink-0
                      text-sky-500
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                    aria-hidden="true"
                  />

                  <h3 className="text-slate-950">
                    Déplacements étudiés au cas par cas
                  </h3>
                </div>

                <p className="mt-2 max-w-xl text-slate-600">
                  Chaque demande est analysée afin de déterminer si une
                  intervention sur place est nécessaire et possible.
                </p>
              </div>
            </div>
          </div>

          {/* Carte interactive */}
          <div className="relative min-w-0">
            <div
              className="
                card-glow
                relative
                overflow-hidden
                rounded-3xl
                bg-gradient-to-br
                from-[#041126]
                via-[#020817]
                to-[#001A5A]
                p-2
                shadow-xl
                shadow-blue-950/20

                sm:p-3
                lg:p-4
              "
            >
              <div
                className="
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-sky-500/35

                  sm:rounded-[22px]
                "
              >
                {/* La carte Leaflet n'est chargée que dans le navigateur */}
                <ClientOnly fallback={<MapPlaceholder />}>
                  <Suspense fallback={<MapPlaceholder />}>
                    <ZoneLocaleMap />
                  </Suspense>
                </ClientOnly>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarteZoneLocale;