import { divIcon } from "leaflet";
import {
  Circle,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";

type CityMapProps = {
  name: string;
  department: string;
  position: [number, number];
};

const cityMarkerIcon = divIcon({
  className: "jess-tech-city-icon",
  html: `
    <div class="jess-tech-leaflet-marker" aria-hidden="true">
      <span class="jess-tech-leaflet-marker__pulse"></span>

      <span class="jess-tech-leaflet-marker__pin">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      </span>
    </div>
  `,
  iconSize: [52, 52],
  iconAnchor: [26, 26],
});

const CityMap = ({ name, department, position }: CityMapProps) => {
  return (
    <MapContainer
      center={position}
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
        url={`https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png?key=${import.meta.env.VITE_CARTO_API_KEY}`}
      />

      <Circle
        center={position}
        radius={10000}
        pathOptions={{
          color: "#0D5BFF",
          fillColor: "#0D5BFF",
          fillOpacity: 0.09,
          opacity: 0.8,
          weight: 2,
        }}
      />

      <Marker position={position} icon={cityMarkerIcon}>
        <Popup>
          <div className="min-w-[190px]">
            <p className="m-0 font-bold text-slate-900">
              Jess Tech
            </p>

            <p className="mt-1 text-sm text-slate-600">
              {name} · {department}
            </p>

            <p className="mb-0 mt-3 text-sm leading-6 text-slate-600">
              Interventions locales selon la demande et projets web
              réalisables partout en France.
            </p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default CityMap;