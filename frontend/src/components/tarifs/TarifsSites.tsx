import { Link } from "react-router";
import { formules } from "../../data/formulesSite";
import PrixFormule from "../fondateur/PrixFormule";
import EncadreFondateur from "../fondateur/EncadreFondateur";

export default function TarifsSites() {
  return (
    <section className="section-light section-fade-hero section-spacing">
      <div className="site-container relative z-10">
        <div className="section-intro max-w-3xl">
          <p className="section-label">Sites vitrines</p>
          <h2>
            Trois formules,{" "}
            <span className="text-gradient-blue">un prix annoncé</span>
          </h2>
          <p>
            Chaque formule a un prix fixe et un contenu défini à l’avance.
            Le détail complet est sur la page Création de site.
          </p>
        </div>

        <div className="mt-10">
          <EncadreFondateur />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {formules.map((formule) => {
            const Icon = formule.icon;

            return (
              <article
                key={formule.name}
                className="card-dark card-glow group flex flex-col !p-5"
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-6 w-6 shrink-0 text-blue-400" aria-hidden="true" />
                  <h3 className="!m-0 !text-xl text-white">{formule.name}</h3>
                </div>

                <div className="mt-3">
                  <PrixFormule nom={formule.name} />
                </div>

                <p className="!mt-3 text-slate-200">{formule.resume}</p>
                <p className="!mt-1 text-sm text-slate-400">
                  Délai indicatif : {formule.delay}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-6 text-center">
          <Link to="/services/creation-site-internet#formules" className="color-link">
            Voir le détail des formules →
          </Link>
        </div>
      </div>
    </section>
  );
}