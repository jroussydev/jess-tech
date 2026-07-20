import { MapPin, Navigation } from "lucide-react";

const CarteZoneLocale = () => {
  return (
    <section className="section-light">
      <div className="site-container section-spacing">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contenu */}
          <div className="section-intro">
            <p className="section-label">Intervention locale</p>

            <h2>Une présence de proximité autour de Beaurieux</h2>

            <p className="max-w-2xl text-lg">
              Jess Tech est basée à Beaurieux, dans l’Aisne, et peut intervenir
              localement pour certains besoins techniques nécessitant un
              accompagnement sur place.
            </p>

            <p className="max-w-2xl">
              Les déplacements sont étudiés selon la nature de la demande, la
              distance et les conditions nécessaires à l’intervention.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Point de départ
                  </h3>

                  <p className="mt-1 leading-7 text-slate-600">
                    Beaurieux, commune située dans le département de l’Aisne.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
                  <Navigation className="h-5 w-5" aria-hidden="true" />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Déplacements étudiés au cas par cas
                  </h3>

                  <p className="mt-1 leading-7 text-slate-600">
                    Chaque demande est analysée afin de déterminer si une
                    intervention sur place est nécessaire et possible.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Emplacement de la future carte */}
          <div className="relative">
            <div className="card-light relative min-h-[400px] overflow-hidden p-0 md:min-h-[480px]">
              {/* Fond décoratif provisoire */}
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(13,91,255,0.12),_transparent_65%)]"
                aria-hidden="true"
              />

              <div
                className="absolute inset-8 rounded-full border border-blue-500/10"
                aria-hidden="true"
              />

              <div
                className="absolute inset-20 rounded-full border border-blue-500/15"
                aria-hidden="true"
              />

              <div
                className="absolute inset-32 rounded-full border border-blue-500/20"
                aria-hidden="true"
              />

              {/* Marqueur central */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center text-center">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-500/30">
                    <MapPin className="h-7 w-7" aria-hidden="true" />

                    <span
                      className="absolute inset-0 -z-10 animate-ping rounded-full bg-blue-500/20"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="mt-4 rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-lg">
                    <p className="m-0 font-bold text-slate-900">Beaurieux</p>

                    <p className="m-0 mt-1 text-sm text-slate-500">
                      Aisne · Hauts-de-France
                    </p>
                  </div>
                </div>
              </div>

              <p className="absolute bottom-5 left-0 right-0 m-0 text-center text-sm text-slate-500">
                La carte interactive sera ajoutée ultérieurement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarteZoneLocale;