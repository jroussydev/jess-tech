import { Link } from "react-router";
import { Wrench } from "lucide-react";
import {
  banquesHeures,
  conditionsMaintenance,
  heuresIncluses,
  offreActive,
  prixMaintenance,
} from "../../data/tarifs";

export default function TarifsMaintenance() {
  return (
    <section className="section-dark section-fade-dark-soft section-fade-dark-bottom section-spacing">
      <div className="site-container relative z-10">
        <div className="section-intro max-w-3xl">
          <p className="section-label">Maintenance</p>
          <h2>
            Un suivi mensuel,{" "}
            <span className="text-gradient-blue">sans engagement</span>
          </h2>
          <p>
            Mises à jour, sauvegardes et vérifications régulières pour que
            votre site reste fiable. {conditionsMaintenance}.
          </p>
        </div>

        {/* Formules mensuelles */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {Object.entries(prixMaintenance).map(([nom, prix]) => {
            const miseEnAvant = offreActive && nom === "Sérénité";

            return (
                            <article
                key={nom}
                className={`card-dark relative flex flex-col !p-5 ${
                  miseEnAvant ? "card-glow-gold" : "card-glow"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Wrench className="h-6 w-6 shrink-0 text-blue-400" aria-hidden="true" />
                  <h3 className="!m-0 !text-xl text-white">{nom}</h3>
                </div>

                <p className="!mt-3 text-2xl font-semibold text-blue-400">
                  {prix}
                  <span className="text-base font-normal text-slate-400"> / mois</span>
                </p>

                <p className="!mt-2 text-slate-300">{heuresIncluses[nom]}</p>

                {miseEnAvant && (
                  <p className="!mt-3 text-sm text-[#E9C46A]">
                    2 mois offert avec l’offre fondateur
                  </p>
                )}
              </article>
            );
          })}
        </div>

        {/* Banques d'heures */}
        <div className="mt-10">
          <h3 className="text-slate-100">Ou une banque d’heures, sans abonnement</h3>
          <p className="!mt-2 text-slate-300">
            Des heures payées d’avance, à utiliser quand vous en avez besoin.
            Valables 12 mois.
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {banquesHeures.map((banque) => (
              <div key={banque.duration} className="card-dark card-glow !p-4 text-center">
                <p className="!m-0 text-slate-300">{banque.duration}</p>
                <p className="!mt-1 text-xl font-semibold text-blue-400">{banque.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link to="/services/maintenance-site-web" className="color-link">
            Voir le détail de la maintenance →
          </Link>
        </div>
      </div>
    </section>
  );
}