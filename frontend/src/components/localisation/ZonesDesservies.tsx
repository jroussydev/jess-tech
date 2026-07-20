import {
  Building2,
  Castle,
  Church,
  Landmark,
  MapPin,
  Trees,
} from "lucide-react";
import { Link } from "react-router-dom";

const ZonesDesservies = () => {
  const communes = [
    {
      nom: "Beaurieux",
      icon: Church,
    },
    {
      nom: "Laon",
      icon: Landmark,
    },
    {
      nom: "Soissons",
      icon: Building2,
    },
    {
      nom: "Reims",
      icon: Church,
    },
    {
      nom: "Château-Thierry",
      icon: Castle,
    },
    {
      nom: "Fismes",
      icon: Trees,
    },
    {
      nom: "Braine",
      icon: Church,
    },
    {
      nom: "Guignicourt",
      icon: Trees,
    },
  ];

  return (
    <section className="section-light">
      <div className="site-container section-spacing">
        {/* Introduction */}
        <div className="section-intro">
          <p className="section-label">Principaux secteurs desservis</p>

          <h2>Les communes où j’interviens régulièrement</h2>

          <p>
            Basée à Beaurieux, j’interviens dans différentes communes de
            l’Aisne et des alentours pour les prestations nécessitant une
            présence sur place.
          </p>
        </div>

        {/* Cartes des communes */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
          {communes.map(({ nom, icon: Icon }) => (
            <article
              key={nom}
              className="group flex min-h-[220px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-7 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="flex h-20 w-20 items-center justify-center text-slate-900 transition duration-300 group-hover:text-blue-600">
                <Icon
                  className="h-14 w-14 stroke-[1.4]"
                  aria-hidden="true"
                />
              </div>

              <h3 className="mt-5 text-base font-bold text-slate-900">
                {nom}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                et ses alentours
              </p>
            </article>
          ))}
        </div>

        {/* Commune absente */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 rounded-2xl border border-blue-100 bg-blue-50/70 px-6 py-5 text-center sm:flex-row">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <MapPin className="h-5 w-5" aria-hidden="true" />
          </div>

          <p className="m-0 text-slate-700">
            Votre commune n’apparaît pas&nbsp;? N’hésitez pas à{" "}
            <Link
              to="/contact"
              className="font-semibold text-blue-600 transition hover:text-blue-700"
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