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

const villesPrincipales = [
  { nom: "Laon", position: [49.563, 3.624] as [number, number] },
  { nom: "Reims", position: [49.258, 4.031] as [number, number] },
  { nom: "Soissons", position: [49.381, 3.323] as [number, number] },
  { nom: "Fismes", position: [49.307, 3.681] as [number, number] },
  { nom: "Berry-au-Bac", position: [49.4044, 3.9022] as [number, number] },
  { nom: "Villeneuve-sur-Aisne", position: [49.4358, 3.9667] as [number, number] },
  { nom: "Corbeny", position: [49.4628, 3.8244] as [number, number] },
  { nom: "Braine", position: [49.3417, 3.5319] as [number, number] },
  { nom: "Cormontreuil", position: [49.2167, 4.05] as [number, number] },
  { nom: "Bezannes", position: [49.2236, 3.9878] as [number, number] },
];

const villeMarker = (nom: string) =>
  L.divIcon({
    className: "jess-tech-city-icon",

    html: `
      <div
        style="
          display: flex;
          align-items: center;
          gap: 6px;
          width: max-content;
          white-space: nowrap;
          pointer-events: none;
        "
      >
        <span
          style="
            display: block;
            width: 8px;
            height: 8px;
            flex-shrink: 0;
            border: 1px solid white;
            border-radius: 9999px;
            background: #0D5BFF;
            box-shadow: 0 0 10px rgba(13, 91, 255, 0.95);
          "
        ></span>

        <span
          style="
            color: #F8FAFC;
            font-size: 12px;
            font-weight: 700;
            line-height: 1;
            text-shadow:
              0 1px 3px #020817,
              0 0 7px #020817;
          "
        >
          ${nom}
        </span>
      </div>
    `,

    iconSize: [100, 24],
    iconAnchor: [4, 12],
  });

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
                <MapContainer
                  center={beaurieuxPosition}
                  zoom={9}
                  scrollWheelZoom={false}
                  className="
                    jess-tech-dark-map
                    h-[320px]
                    w-full

                    sm:h-[380px]
                    md:h-[420px]
                    lg:h-[460px]
                    xl:h-[480px]
                  "
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                  />

                  <Circle
                    center={beaurieuxPosition}
                    radius={25000}
                    pathOptions={{
                      color: "#0D5BFF",
                      fillColor: "#0D5BFF",
                      fillOpacity: 0.09,
                      opacity: 0.8,
                      weight: 2,
                    }}
                  />

                  {villesPrincipales.map((ville) => (
                    <Marker
                      key={ville.nom}
                      position={ville.position}
                      icon={villeMarker(ville.nom)}
                      interactive={false}
                    />
                  ))}

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
      </div>
    </section>
  );
};

export default CarteZoneLocale;