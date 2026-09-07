import {
  Code2,
  TestTubeDiagonal,
  PackageCheck,
  Plus,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

const etapes = [
  {
    title: "Développement",
    description:
      "Les fonctionnalités prévues dans le périmètre sont réalisées.",
    icon: Code2,
  },
  {
    title: "Tests",
    description:
      "Le fonctionnement et les principaux parcours sont vérifiés avant la livraison.",
    icon: TestTubeDiagonal,
  },
  {
    title: "Livraison",
    description:
      "Les accès et les éléments nécessaires à l’utilisation du projet vous sont transmis.",
    icon: PackageCheck,
  },
];

export default function ApresDeveloppement() {
  return (
    <section className="section-dark section-spacing">
      <div className="site-container">
        <div className="section-intro">
          <p className="section-label">
            Après le développement
          </p>

          <h2>
            Une fois le développement terminé
          </h2>

          <p>
            La livraison marque la fin du périmètre prévu, mais le projet
            peut continuer à évoluer par la suite.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-center">
          {etapes.map(({ title, description, icon: Icon }) => (
            <div key={title} className="contents">
              <article>
                <Icon
                  className="h-8 w-8 text-blue-400"
                  aria-hidden="true"
                />

                <h3 className="mt-4">
                  {title}
                </h3>

                <p className="mt-2">
                  {description}
                </p>
              </article>

              <div>
                <ArrowDown
                  className="mx-auto h-7 w-7 text-blue-400 lg:hidden"
                  aria-hidden="true"
                />

                <ArrowRight
                  className="hidden h-7 w-7 text-blue-400 lg:block"
                  aria-hidden="true"
                />
              </div>
            </div>
          ))}

          <article className="rounded-2xl border border-blue-400/30 p-6">
            <Plus
              className="h-8 w-8 text-blue-400"
              aria-hidden="true"
            />

            <h3 className="mt-4">
              Évolutions
            </h3>

            <p className="mt-2">
              De nouvelles fonctionnalités ou modifications peuvent être
              développées plus tard dans le cadre d’une nouvelle demande.
            </p>
          </article>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <h3>
            Garantie corrective de 30 jours
          </h3>

          <p className="mt-3 max-w-4xl">
            Les anomalies directement liées au développement réalisé et
            signalées dans les 30 jours suivant la livraison sont corrigées
            sans frais. Une nouvelle fonctionnalité ou une modification du
            périmètre initial constitue en revanche une nouvelle demande.
          </p>
        </div>
      </div>
    </section>
  );
}