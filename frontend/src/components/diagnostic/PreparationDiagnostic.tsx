import {
  Clock3,
  KeyRound,
  MessageSquareText,
  TriangleAlert,
} from "lucide-react";

const elements = [
  {
    numero: "01",
    title: "Ce que vous constatez",
    description:
      "Décrivez simplement ce qui ne fonctionne pas ou ce qui vous paraît inhabituel.",
    icon: MessageSquareText,
  },
  {
    numero: "02",
    title: "Les messages affichés",
    description:
      "Une capture d’écran ou le texte d’un message d’erreur peut apporter des informations utiles lorsqu’il y en a un.",
    icon: TriangleAlert,
  },
  {
    numero: "03",
    title: "Le moment où le problème apparaît",
    description:
      "Précisez si possible quand le problème se produit et s’il est permanent ou seulement présent dans certaines situations.",
    icon: Clock3,
  },
  {
    numero: "04",
    title: "Les accès nécessaires",
    description:
      "Selon le problème, certains accès au site, à son administration ou à son environnement technique peuvent être nécessaires pour poursuivre l’analyse.",
    icon: KeyRound,
  },
];

export default function PreparationDiagnostic() {
  return (
    <section className="section-dark section-spacing">
      <div className="site-container">
        <div className="section-intro">
          <p className="section-label">Pour commencer</p>
          <h2>Ce qui peut aider à examiner le problème</h2>

          <p>
            Vous n’avez pas besoin de connaître la cause. Quelques informations
            sur ce que vous observez permettent déjà de commencer
            l’investigation.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {elements.map(
            ({ numero, title, description, icon: Icon }) => (
              <article key={numero} className="card-dark">
                <div className="flex items-start justify-between gap-4">
                  <Icon
                    className="h-8 w-8 text-blue-400"
                    aria-hidden="true"
                  />

                  <span className="text-2xl font-bold text-white/20">
                    {numero}
                  </span>
                </div>

                <h3 className="mt-5">{title}</h3>
                <p className="mt-3">{description}</p>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}