import { RefreshCw, TrendingUp } from "lucide-react";

export default function LimitesMaintenance() {
  return (
    <section className="section-dark section-spacing">
      <div className="site-container">
        <div className="section-intro">
          <p className="section-label">Périmètre</p>
          <h2>Maintenance ≠ évolution du site</h2>

          <p>
            Entretenir un site et lui ajouter de nouvelles possibilités sont
            deux types d’intervention différents.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="card-dark">
            <RefreshCw
              className="h-8 w-8 text-blue-400"
              aria-hidden="true"
            />

            <p className="section-label mt-5">Entretenir</p>
            <h3 className="mt-2">Maintenir ce qui existe</h3>

            <p className="mt-4">
              Maintenir le site, effectuer les opérations prévues et intervenir
              sur les éléments couverts par la formule.
            </p>
          </article>

          <article className="card-dark">
            <TrendingUp
              className="h-8 w-8 text-blue-400"
              aria-hidden="true"
            />

            <p className="section-label mt-5">Faire évoluer</p>
            <h3 className="mt-2">Ajouter ou transformer</h3>

            <p className="mt-4">
              Ajouter une page, créer une nouvelle fonctionnalité ou modifier
              plus largement le fonctionnement du site.
            </p>
          </article>
        </div>

        <p className="mt-8 max-w-4xl">
          Un site sous maintenance peut bien sûr évoluer. Les demandes qui
          sortent du périmètre de la formule sont simplement étudiées
          séparément.
        </p>
      </div>
    </section>
  );
}