import { MapPin, Navigation } from "lucide-react";
import {
  Circle,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import L from "leaflet";

const beaurieuxPosition: [number, number] = [49.394, 3.734];

const jessTechMarker = L.divIcon({
  className: "jess-tech-leaflet-marker",
  html: `
    <div class="jess-tech-leaflet-marker__pulse"></div>

    <div class="jess-tech-leaflet-marker__pin">
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    </div>
  `,
  iconSize: [52, 52],
  iconAnchor: [26, 26],
  popupAnchor: [0, -24],
});

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

          {/* Carte interactive */}
          <div className="relative">
            <div className="card-light relative min-h-[400px] overflow-hidden p-0 md:min-h-[480px]">
              <MapContainer
                center={beaurieuxPosition}
                zoom={9}
                scrollWheelZoom={false}
                className="h-[400px] w-full md:h-[480px]"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Circle
                  center={beaurieuxPosition}
                  radius={30000}
                  pathOptions={{
                    color: "#0D5BFF",
                    fillColor: "#0D5BFF",
                    fillOpacity: 0.1,
                    opacity: 0.7,
                    weight: 2,
                  }}
                />

                <Marker
                  position={beaurieuxPosition}
                  icon={jessTechMarker}
                >
                  <Popup>
                    <div className="min-w-[190px]">
                      <p className="m-0 font-bold text-slate-900">
                        Jess Tech
                      </p>

                      <p className="mt-1 text-sm text-slate-600">
                        Beaurieux · Aisne
                      </p>

                      <p className="mb-0 mt-3 text-sm leading-6 text-slate-600">
                        Interventions locales selon la demande et projets web
                        réalisables partout en France.
                      </p>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarteZoneLocale;