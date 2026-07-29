import {
  Building2,
  Castle,
  House,
  MapPin,
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
    <section className="section-dark">
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
  {communes.map(({ id, label, nom, icon: Icon }) => (
  <Link
    key={id}
    to={`/localisation/${id}`}
    className="group block"
    aria-label={`Voir les services de création de site internet de Jess Tech à ${label}`}
  >
      <article className="card-dark h-full text-center transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-500/40 group-hover:shadow-lg group-hover:shadow-blue-500/10">
        <div className="mt-2 flex justify-center">
          <Icon
            className="h-14 w-14 stroke-[1.4] text-blue-400"
            aria-hidden="true"
          />
        </div>

        <h3 className="mt-3 min-h-14 leading-tight">
          {nom}
        </h3>

        <p className="mt-2">et ses alentours</p>
      </article>
    </Link>
  ))}
</div>

        {/* Commune absente */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 rounded-2xl border border-slate-700 bg-slate-800 px-6 py-5 text-center sm:flex-row mx-auto max-w-4xl">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <MapPin className="h-5 w-5" aria-hidden="true" />
          </div>

          <p className="m-0 text-slate-300">
            Votre commune n’apparaît pas ? N’hésitez pas à{" "}
            <Link
              to="/contact"
              className="font-semibold text-blue-500 transition hover:text-blue-700"
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