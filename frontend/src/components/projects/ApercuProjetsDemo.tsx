import { Link } from "react-router";
import { Hourglass } from "lucide-react";
import { internalProjects } from "../../data/internalProjects";

/* =========================================================
   Aperçu court des projets de démonstration
   (le détail complet reste sur la page Dans les coulisses)
   ========================================================= */

// Nombre de projets affichés (les plus récents). Une seule variable à changer.
const NB_PROJETS = 3;

export default function ApercuProjetsDemo() {
  // On ne garde que les projets de démonstration
  // Les NB_PROJETS derniers ajoutés dans internalProjects.ts, le plus récent en premier
  const projetsDemo = internalProjects
    .filter((project) => project.category === "Démo")
    .slice(-NB_PROJETS)
    .reverse();

  // Cases « en préparation » pour compléter la grille
  const casesVides = Math.max(0, NB_PROJETS - projetsDemo.length);

  return (
    <section className="section-dark section-fade-dark-soft section-fade-dark-bottom section-spacing">

      <div className="site-container">
        <div className="section-intro max-w-3xl">
          <p className="section-label">Projets de démonstration</p>
          <h2 className="text-white">
            Des clients fictifs,{" "}
            <span className="text-gradient-blue">un vrai travail</span>
          </h2>
          <p className="text-slate-300">
            Chaque projet a suivi toutes les étapes d’une vraie mission, du
            cahier des charges à la livraison.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Projets réalisés */}
          {projetsDemo.map((project) => (
            <article
              key={project.id}
              className="card-dark card-glow group flex flex-col overflow-hidden !p-0"
            >
              {project.featuredImage && (
                <div className="overflow-hidden">
                  <img
                    src={project.featuredImage}
                    alt={`Aperçu du site ${project.title}`}
                    className="aspect-video w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col p-4">
                <h3 className="!m-0 !text-lg text-white">{project.title}</h3>
                <p className="!mt-1 text-sm text-slate-300">{project.summary}</p>

                <div className="mt-auto flex flex-wrap gap-2 pt-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="badge badge-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}

          {/* Cases en préparation (disparaissent au fil des nouveaux projets) */}
          {Array.from({ length: casesVides }, (_, index) => (
            <div
              key={`a-venir-${index}`}
              className="flex min-h-56 flex-col items-center justify-center rounded-2xl border border-dashed border-sky-500/30 p-4 text-center"
            >
              <Hourglass className="h-6 w-6 text-sky-500/60" aria-hidden="true" />
              <p className="!mt-3 text-sm font-semibold text-slate-300">
                Projet en préparation
              </p>
              <p className="!mt-1 text-xs text-slate-500">Bientôt ici</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/dans-les-coulisses" className="color-link">
            Découvrir ces projets en détail dans les coulisses →
          </Link>
        </div>
      </div>
    </section>
  );
}
