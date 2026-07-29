import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Clock3,
  Mail,
  MapPin,
} from "lucide-react";
import { divIcon } from "leaflet";
import {
  Circle,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";

import { localCities } from "../../data/localCities";

const services = [
  "Création de site internet",
  "Refonte de site existant",
  "Développement web sur mesure",
  "Maintenance et accompagnement",
];


const createCitySlug = (cityName: string) =>
  cityName
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "-")
    .replace(/\s+/g, "-");

const CityPage = () => {
  const { ville } = useParams<{ ville: string }>();

  const city = localCities.find((item) => item.slug === ville);

  useEffect(() => {
    if (!city) return;

    document.title = city.title;

    const existingDescription = document.querySelector(
      'meta[name="description"]',
    );

    if (existingDescription) {
      existingDescription.setAttribute("content", city.metaDescription);
      return;
    }

    const description = document.createElement("meta");

    description.name = "description";
    description.content = city.metaDescription;

    document.head.appendChild(description);

    return () => {
      document.head.removeChild(description);
    };
  }, [city]);

  if (!city) {
    return <Navigate to="/localisation" replace />;
  }

  const cityPosition: [number, number] = [
    city.coordinates.latitude,
    city.coordinates.longitude,
  ];

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

  return (
    <main>
      {/* =====================================================================
          HERO
      ===================================================================== */}

      <section className="section-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,91,255,0.18),transparent_40%)]" />

        <div className="site-container relative py-20 sm:py-24 lg:py-28">
          <div className="section-intro max-w-4xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Jess Tech près de chez vous
            </p>

            <h1>
              Création de site internet à{" "}
              <span className="text-blue-600">{city.name}</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              {city.introduction}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Parler de votre projet
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>

              <Link
                to="/tarifs"
                className="inline-flex items-center justify-center rounded-lg border border-blue-500/25 bg-white px-5 py-3 font-semibold text-blue-600 transition hover:border-blue-500 hover:bg-blue-50"
              >
                Consulter les tarifs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          INTERVENTION LOCALE
      ===================================================================== */}

      <section className="section-dark section-spacing">
        <div className="site-container">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div className="section-intro">
              <p className="section-label">Accompagnement local</p>

              <h2>
                Votre projet web à{" "}
                <span className="text-blue-400">{city.name}</span>
              </h2>

              <div className="mt-6 space-y-5 leading-relaxed text-slate-300">
                <p>{city.localContext}</p>
                <p>{city.intervention}</p>
              </div>
            </div>

            <aside className="card-dark">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-blue-400/10 p-3 text-blue-400">
                  <Mail className="h-6 w-6" aria-hidden="true" />
                </div>

                <div>
                  <h3 className="text-xl">Des échanges simples et réguliers</h3>

                  <p className="mt-3 leading-relaxed text-slate-300">
                    Les échanges peuvent se faire par téléphone, par e-mail ou
                    en visioconférence selon vos préférences et les besoins du
                    projet.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-4">
                <div className="rounded-xl bg-blue-400/10 p-3 text-blue-400">
                  <Clock3 className="h-6 w-6" aria-hidden="true" />
                </div>

                <div>
                  <h3 className="text-xl">Un suivi à chaque étape</h3>

                  <p className="mt-3 leading-relaxed text-slate-300">
                    Vous restez informé de l’avancement et validez les éléments
                    importants avant la poursuite du projet.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* =====================================================================
          PRESTATIONS
      ===================================================================== */}

      <section className="section-light section-spacing">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="section-intro">
              <p className="section-label">Prestations disponibles</p>

              <h2>Un accompagnement adapté à votre projet</h2>

              <p className="mt-5 max-w-xl leading-relaxed text-slate-400">
                Que vous souhaitiez créer votre premier site internet, améliorer
                un site existant ou développer un outil plus spécifique, votre
                demande est étudiée selon vos véritables besoins.
              </p>

              <Link
                to="/services"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-400 transition hover:text-blue-300"
              >
                Découvrir toutes les prestations
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="card-dark">
              <ul className="space-y-5">
                {services.map((service) => (
                  <li
                    key={service}
                    className="flex items-center gap-4 text-lg text-slate-200"
                  >
                    <span className="shrink-0 rounded-full bg-blue-400/10 p-1.5 text-blue-400">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>

                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          FAÇON DE TRAVAILLER + TARIFS
      ===================================================================== */}

      <section className="section-dark section-spacing">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            {/* Ma façon de travailler */}

            <div className="section-intro">
              <p className="section-label">Ma façon de travailler</p>

              <h2>Une collaboration simple, claire et humaine.</h2>

              <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-300">
                <p>
                  Je préfère prendre le temps de comprendre votre activité avant
                  de commencer à développer. Un site internet est un
                  investissement : il doit donc répondre à vos besoins réels,
                  plutôt qu’à une liste de fonctionnalités imposées.
                </p>

                <p>
                  Tout au long de la création, je privilégie les échanges simples,
                  les explications claires et un suivi régulier. Mon objectif est
                  que vous sachiez toujours où en est votre site et que vous soyez
                  pleinement satisfait du résultat.
                </p>
              </div>
            </div>

            {/* Tarifs */}

            <aside className="card-dark lg:sticky lg:top-24 text-center">
              <p className="section-label">Tarifs transparents</p>

              <h2 className="mt-4">Un devis adapté à votre demande</h2>

              <p className="mt-5 leading-relaxed text-slate-300">
                Le tarif dépend notamment du nombre de pages, des fonctionnalités,
                du niveau de personnalisation et des contenus nécessaires. Chaque
                demande fait donc l’objet d’un devis détaillé avant le début de la
                prestation.
              </p>

              <Link
                to="/tarifs"
                className="btn-primary mt-8 inline-flex items-center justify-center gap-2"
              >
                Découvrir les tarifs
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* =====================================================================
          CARTE ET COMMUNES VOISINES
      ===================================================================== */}

      <section className="section-light section-spacing">
        <div className="site-container">
          <div className="section-intro mx-auto max-w-3xl text-center">
            <p className="section-label">Zone d’intervention</p>

            <h2>
              Jess Tech intervient à {city.name} et dans les communes voisines
            </h2>

            <p className="mt-5 leading-relaxed text-slate-600">
              Votre entreprise est située à proximité de {city.name} ? Votre
              projet peut également être étudié, sur place lorsque cela est
              possible ou entièrement à distance.
            </p>
          </div>
<div className="mx-auto mt-12 max-w-4xl">
  <div className="overflow-hidden rounded-[22px] border border-blue-400/35 bg-[#020817] p-4 shadow-xl shadow-blue-950/20">
    <MapContainer
      center={cityPosition}
      zoom={9}
      scrollWheelZoom={false}
      className="jess-tech-dark-map h-[400px] w-full rounded-2xl md:h-[480px]"
    >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              />

              <Circle
                center={cityPosition}
                radius={10000}
                pathOptions={{
                  color: "#0D5BFF",
                  fillColor: "#0D5BFF",
                  fillOpacity: 0.09,
                  opacity: 0.8,
                  weight: 2,
                }}
              />

              <Marker position={cityPosition} icon={cityMarkerIcon}>
                <Popup>
                  <div className="min-w-[190px]">
                    <p className="m-0 font-bold text-slate-900">
                      Jess Tech
                    </p>

                    <p className="mt-1 text-sm text-slate-600">
                      {city.name} · {city.department}
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
          {city.nearbyCities.length > 0 && (
            <div className="mt-10">
              <h3 className="text-center text-xl">
                Communes situées autour de {city.name}
              </h3>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {city.nearbyCities.map((nearbyCity) => {
                  const nearbySlug = createCitySlug(nearbyCity);
                  const hasLocalPage = localCities.some(
                    (localCity) => localCity.slug === nearbySlug,
                  );

                  if (!hasLocalPage) {
                    return (
                      <span
                        key={nearbyCity}
                        className="badge badge-primary gap-2"
                      >
                        <MapPin className="h-4 w-4" aria-hidden="true" />
                        {nearbyCity}
                      </span>
                    );
                  }

                  return (
                    <Link
                      key={nearbyCity}
                      to={`/localisation/${nearbySlug}`}
                      className="badge badge-primary gap-2 transition hover:-translate-y-0.5 hover:border-blue-400/60 hover:bg-blue-500/20"
                    >
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                      {nearbyCity}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================================
          FAQ LOCALE
      ===================================================================== */}

      <section className="section-dark section-spacing">
        <div className="site-container">
          <div className="mx-auto max-w-3xl">
            <div className="section-intro text-center">
              <p className="section-label">Questions fréquentes</p>

              <h2>Votre projet web à {city.name}</h2>
            </div>

            <div className="mt-10 space-y-4">
              {city.faq.map(({ question, answer }) => (
                <details
                  key={question}
                  className="group rounded-2xl border border-slate-700 bg-slate-900 p-6"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold text-white">
                    {question}

                    <span className="text-2xl font-light text-blue-400 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="mt-4 border-t border-slate-700 pt-4 leading-relaxed text-slate-300">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* =====================================================================
          CTA
      ===================================================================== */}


          <section className="section-light pb-16 md:pb-20 lg:pb-24 rounded-b-2xl pt-20">
      <div className="site-container max-w-[1200px]">
        <div className="relative overflow-hidden rounded-3xl border border-blue-500/15 bg-gradient-to-r from-[#081120] to-[#0b1d35] p-6 sm:p-8">
          {/* Décoration */}
          <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 text-2xl text-blue-400 sm:h-16 sm:w-16 sm:text-3xl">
                💬
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Un projet de site internet à {city.name} ?
                </h2>

                <p className="mt-1 text-slate-300">
                  Présentez-moi votre activité et vos besoins. <br/>Nous pourrons échanger
              simplement afin de déterminer la solution la plus adaptée à votre
              projet.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-primary px-8 py-4 md:min-w-[180px]"
            >
              Me contacter →
            </Link>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
};

export default CityPage;