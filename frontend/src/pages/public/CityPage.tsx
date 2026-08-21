import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import GlobalCTA from "../../components/GlobalCTA";
import {
  ArrowRight,
  Check,
  ChevronDown,
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

<section
  className="
    hero
    section-dark
    relative
    overflow-visible
  "
>
  {/* Halo décoratif */}
  <div
    className="
      pointer-events-none
      absolute
      -right-24
      top-12
      h-72
      w-72
      rounded-full
      bg-blue-600/10
      blur-3xl

      sm:h-80
      sm:w-80

      lg:-right-32
      lg:h-96
      lg:w-96
    "
    aria-hidden="true"
  />

  {/* Contenu */}
  <div className="hero__container">
    <div className="hero__layout">
      <div className="hero__content">

        {/* Badge localisation */}
        <div className="badge badge-primary gap-2">
          <MapPin
            className="h-4 w-4 shrink-0"
            aria-hidden="true"
          />

          Jess Tech près de chez vous
        </div>

        {/* Titre */}
        <h1 className="hero__title mt-6">
          Création de site internet à{" "}
          <span className="text-gradient-blue">
            {city.name}
          </span>
        </h1>

        {/* Introduction */}
        <p className="hero__description max-w-2xl text-slate-300">
          {city.introduction}
        </p>

        {/* Actions */}
        <div className="hero__actions">
          <Link
            to="/contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Parler de votre projet

            <ArrowRight
              className="h-5 w-5"
              aria-hidden="true"
            />
          </Link>

          <Link
            to="/TarifsTransparents"
            className="btn-secondary"
          >
            Consulter les tarifs
          </Link>
        </div>
      </div>
    </div>
  </div>

  {/* Vague basse */}
  <img
  src="/decorations/vagues/19.png"
  alt=""
  aria-hidden="true"
  className="
    pointer-events-none
    absolute
    right-5
    -bottom-20
    z-30
    hidden
    h-auto
    origin-right
      scale-x-[1.2]
    object-contain

    lg:block
    lg:w-[48%]
    xl:w-[52%]
    2xl:w-[85%]
  "
/>
</section>

      {/* =====================================================================
    INTERVENTION LOCALE
===================================================================== */}

<section
  className="
    section-light
    section-fade-light-soft
    section-spacing
  "
>
  <div className="site-container">
    <div
      className="
        grid
        items-start
        gap-10

        lg:grid-cols-[1fr_0.8fr]
        lg:gap-14
      "
    >
      {/* Présentation */}
      <div className="section-intro">
        <p className="section-label">
          Accompagnement local
        </p>

        <h2>
          Votre projet web à{" "}
          <span className="text-gradient-blue">
            {city.name}
          </span>
        </h2>

        <div className="mt-6 space-y-5">
          <p>
            {city.localContext}
          </p>

          <p>
            {city.intervention}
          </p>
        </div>
      </div>

      {/* Informations complémentaires */}
      <div className="flex flex-col gap-7 lg:pt-6">

        {/* Échanges */}
        <div
          className="
            group
            border-b
            border-sky-500/20
            pb-6
            lg:pt-15
          "
        >
          <div className="flex items-center gap-3">
            <Mail
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

            <h3>
              Des échanges simples et réguliers
            </h3>
          </div>

          <p className="mt-2 max-w-xl">
            Les échanges peuvent se faire par téléphone, par e-mail ou en
            visioconférence selon vos préférences et les besoins du projet.
          </p>
        </div>

        {/* Suivi */}
        <div className="group">
          <div className="flex items-center gap-3">
            <Clock3
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

            <h3>
              Un suivi à chaque étape
            </h3>
          </div>

          <p className="mt-2 max-w-xl">
            Vous restez informé de l’avancement et validez les éléments
            importants avant la poursuite du projet.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* =====================================================================
    PRESTATIONS
===================================================================== */}

<section className="section-dark section-fade-dark-soft section-spacing">
  <div className="site-container">
    <div
      className="
        grid
        gap-10

        lg:grid-cols-[0.9fr_1.1fr]
        lg:items-center
        lg:gap-14
      "
    >
      {/* Introduction */}
      <div className="section-intro">
        <p className="section-label">
          Prestations disponibles
        </p>

        <h2>
          Un accompagnement adapté à votre{" "}
          <span className="text-gradient-blue">
            projet
          </span>
        </h2>

        <p className="max-w-xl text-slate-300">
          Que vous souhaitiez créer votre premier site internet, améliorer
          un site existant ou développer un outil plus spécifique, votre
          demande est étudiée selon vos véritables besoins.
        </p>

        <Link
          to="/services"
          className="
            mt-6
            inline-flex
            items-center
            gap-2
            font-semibold
            text-sky-500
            transition-colors
            duration-300
            hover:text-sky-400
          "
        >
          Découvrir toutes les prestations

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

      {/* Liste des prestations */}
      <div className="flex flex-col gap-5 lg:pt-18">
        {services.map((service) => (
          <div
            key={service}
            className="
              group
              flex
              items-center
              gap-3
              border-b
              border-sky-500/20
              pb-5
              last:border-b-0
              last:pb-0
            "
          >
            <Check
              className="
                h-5
                w-5
                shrink-0
                text-sky-500
                transition-transform
                duration-300
                group-hover:scale-110
              "
              aria-hidden="true"
            />

            <span className="text-lg">
              {service}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* =====================================================================
    FAÇON DE TRAVAILLER + TARIFS
===================================================================== */}

<section className="section-light section-fade-light-soft section-spacing">
  <div className="site-container">
    <div
      className="
        grid
        gap-10

        lg:grid-cols-[1.15fr_0.85fr]
        lg:items-start
        lg:gap-14
      "
    >
      {/* Ma façon de travailler */}
      <div className="section-intro">
        <p className="section-label">
          Ma façon de travailler
        </p>

        <h2>
          Une collaboration{" "}
          <span className="text-gradient-blue">
            simple
          </span>
          , claire et humaine
        </h2>

        <div className="mt-6 max-w-3xl space-y-5">
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
      <aside
        className="
          card-dark
          card-glow
          relative
          text-center
          lg:sticky
          lg:top-24
        "
      >
        <p className="section-label">
          Tarifs transparents
        </p>

        <h2 className="mt-4">
          Un devis adapté à votre demande
        </h2>

        <p className="mt-5 text-slate-300">
          Le tarif dépend notamment du nombre de pages, des fonctionnalités,
          du niveau de personnalisation et des contenus nécessaires. Chaque
          demande fait donc l’objet d’un devis détaillé avant le début de la
          prestation.
        </p>

        <Link
          to="/tarifs"
          className="
            btn-primary
            mt-7
            inline-flex
            items-center
            justify-center
            gap-2
          "
        >
          Découvrir les tarifs

          <ArrowRight
            className="h-5 w-5"
            aria-hidden="true"
          />
        </Link>
      </aside>
    </div>
  </div>
</section>

      {/* =====================================================================
    CARTE ET COMMUNES VOISINES
===================================================================== */}

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
        Zone d’intervention
      </p>

      <h2>
        Jess Tech intervient à{" "}
        <span className="text-gradient-blue">
          {city.name}
        </span>{" "}
        et dans les communes voisines
      </h2>

      <p className="max-w-2xl text-slate-600">
        Votre entreprise est située à proximité de {city.name} ? Votre
        projet peut également être étudié, sur place lorsque cela est
        possible ou entièrement à distance.
      </p>
    </div>

    {/* Carte interactive */}
    <div className="mx-auto mt-8 max-w-4xl">
      <div
        className="
          card-glow
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
            center={cityPosition}
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

            <Marker
              position={cityPosition}
              icon={cityMarkerIcon}
            >
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
    </div>

{/* Communes voisines */}
{city.nearbyCities.length > 0 && (
  <div className="mt-8 text-center">
    <h3 className="text-slate-950">
      Communes situées autour de {city.name}
    </h3>

    <div className="mt-4 flex flex-wrap justify-center gap-2 sm:gap-3">
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
              <MapPin
                className="h-4 w-4"
                aria-hidden="true"
              />

              {nearbyCity}
            </span>
          );
        }

        return (
          <Link
            key={nearbyCity}
            to={`/localisation/${nearbySlug}`}
            className="
              badge
              badge-primary
              gap-2
              transition
              duration-300
              hover:-translate-y-0.5
              hover:border-blue-400/60
              hover:bg-blue-500/20
            "
          >
            <MapPin
              className="h-4 w-4"
              aria-hidden="true"
            />

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

<section
  className="
    section-light
    section-fade-light-soft
    section-spacing
  "
>
  <div className="site-container">

    {/* Introduction */}
    <div className="section-intro mx-auto max-w-3xl text-center">
      <p className="section-label">
        Questions fréquentes
      </p>

      <h2>
        Votre projet web à{" "}
        <span className="text-gradient-blue">
          {city.name}
        </span>
      </h2>
    </div>

    {/* FAQ */}
    <div className="mx-auto mt-8 max-w-4xl space-y-3">
      {city.faq.map(({ question, answer }) => (
        <details
          key={question}
          className="
            card-dark
            card-glow
            group
            !p-0
            overflow-hidden
          "
        >
          <summary
            className="
              flex
              cursor-pointer
              list-none
              items-center
              justify-between
              gap-4
              px-4
              py-4
              sm:px-5
              [&::-webkit-details-marker]:hidden
            "
          >
            <span className="font-semibold text-white">
              {question}
            </span>

            <ChevronDown
              className="
                h-5
                w-5
                shrink-0
                text-sky-400
                transition-transform
                duration-300
                group-open:rotate-180
              "
              aria-hidden="true"
            />
          </summary>

          <div
            className="
              mx-4
              border-t
              border-sky-500/20
              pb-4
              pt-3
              sm:mx-5
              sm:pb-5
            "
          >
            <p className="!m-0 text-slate-300">
              {answer}
            </p>
          </div>
        </details>
      ))}
    </div>

  </div>
</section>



      {/* =====================================================================
          CTA
      ===================================================================== */}
<GlobalCTA variant="citypage" />
      
    </main>
  );
};

export default CityPage;