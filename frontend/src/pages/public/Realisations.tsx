import { Link } from "react-router";
import { createMeta } from "../../seo/createMeta";
import { offreActive, offreFondateur, prixSites } from "../../data/tarifs";
import PassFondateur from "../../components/fondateur/PassFondateur";
import CompteurPlaces from "../../components/fondateur/CompteurPlaces";
import GlobalCTA from "../../components/GlobalCTA";

export function meta() {
  return createMeta({
    title: "Réalisations et projets web | Jess Tech",
    description:
      "Découvrez des exemples de sites internet et de projets web réalisés par Jess Tech pour des artisans, associations et petites entreprises.",
    path: "/realisations",
  });
}


export default function Realisations() {
  return (
    <main>
      {/* Introduction */}
      <section className="section-dark section-spacing relative z-10 !pb-24">
        <div className="site-container">
          <div className="section-intro max-w-3xl">
            <p className="section-label">Réalisations</p>
            <h1>
              Mes premières{" "}
              <span className="text-gradient-gold">réalisations</span>
            </h1>
            <p className="text-slate-300">
              Je lance mon activité : mes premiers sites clients seront
              présentés ici, avec leur accord. En attendant, découvrez mes
              projets de démonstration, réalisés comme de vraies missions.
            </p>
          </div>
        </div>
{/* Vague dorée (même que le hero d'accueil) */}
        <img
          src="/decorations/vagues/vague_longue_dore_hero.webp"
          alt=""
          aria-hidden="true"
          className="hero__wave"
        />
      </section>

      {/* Offre fondateur */}
      {offreActive && (
        <section id="offre-fondateur" className="section-dark section-spacing !pt-25">
          <div className="site-container grid items-center gap-10 lg:grid-cols-2">
            <PassFondateur />

            <div>
              <p className="section-label">Offre fondateur</p>
              <h2 className="text-white">
                Et si votre site était le{" "}
                <span className="text-gradient-gold">premier</span> ?
              </h2>

              <p className="text-slate-300">
                Pour mes {offreFondateur.placesTotal} premiers clients, les
                formules sont à prix réduit (dès {prixSites.Lite.fondateur}),
                avec {offreFondateur.bonus}. En échange : un témoignage, un
                avis Google et l’accord pour présenter votre site ici.
              </p>

              <div className="mt-6">
                <CompteurPlaces />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary btn-gold">
                  Réserver ma place
                </Link>
                <Link to="/tarifs#prix" className="btn-secondary">
                  Voir les formules
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <GlobalCTA variant="tarifs" />
    </main>
  );
}