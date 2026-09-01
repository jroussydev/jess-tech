import { CodeXml, Puzzle } from "lucide-react";

export default function PossibilitesDeveloppement() {
  return (
    <section
      id="possibilites"
      className="section-light section-spacing"
    >
      <div className="site-container">
        <div className="section-intro">
          <p className="section-label">
            Les possibilités
          </p>

          <h2>
            Qu’est-ce qu’on peut développer sur mesure ?
          </h2>

          <p>
            Le développement sur mesure peut concerner l’ensemble d’un
            site ou seulement une partie de son fonctionnement. Tout dépend
            du projet et de ce qu’il doit permettre de faire.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 lg:grid lg:grid-cols-2">
          {/* Site complet */}
          <article className="p-6 sm:p-8 lg:p-10">
            <div className="flex items-center justify-between gap-4">
              <CodeXml
                className="h-9 w-9 text-blue-500"
                aria-hidden="true"
              />

              <span className="text-5xl font-bold text-slate-200">
                01
              </span>
            </div>

            <h3 className="mt-8">
              Un site développé sur mesure
            </h3>

            <p className="mt-4">
              Certains projets nécessitent une construction spécifique dès
              le départ. Le site peut alors être développé directement en
              code, avec une structure et un fonctionnement adaptés au
              projet.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="badge">Site React</span>
              <span className="badge">Interface personnalisée</span>
              <span className="badge">Contenu dynamique</span>
              <span className="badge">Connexion à des données</span>
            </div>
          </article>

          {/* Fonctionnalité */}
          <article className="border-t border-slate-200 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
            <div className="flex items-center justify-between gap-4">
              <Puzzle
                className="h-9 w-9 text-blue-500"
                aria-hidden="true"
              />

              <span className="text-5xl font-bold text-slate-200">
                02
              </span>
            </div>

            <h3 className="mt-8">
              Une fonctionnalité spécifique
            </h3>

            <p className="mt-4">
              Le sur-mesure peut aussi répondre à un besoin précis au sein
              d’un site ou d’un projet web lorsqu’une fonctionnalité
              existante ne correspond pas suffisamment au fonctionnement
              attendu.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="badge">Formulaire avancé</span>
              <span className="badge">Espace utilisateur</span>
              <span className="badge">Gestion de données</span>
              <span className="badge">API</span>
              <span className="badge">Administration</span>
              <span className="badge">Automatisation</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}