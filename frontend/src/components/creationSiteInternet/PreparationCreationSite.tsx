import {
  FileText,
  Images,
  Palette,
  Globe2,
  CheckCircle2,
} from "lucide-react";

const preparationItems = [
  {
    number: "01",
    title: "Vos textes",
    description:
      "Présentation de votre activité, services, coordonnées et autres informations à intégrer. Les petites corrections d’orthographe, de présentation ou de fluidité peuvent être réalisées lors de l’intégration. Une rédaction ou une réécriture importante constitue un travail supplémentaire.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Vos visuels",
    description:
      "Logo, photos de votre activité, réalisations ou autres images que vous souhaitez utiliser. Leur préparation, leur recherche ou leur création dépend de la formule choisie et des éléments prévus dans la prestation.",
    icon: Images,
  },
  {
    number: "03",
    title: "Votre identité",
    description:
      "Si vous avez déjà un logo, des couleurs ou une identité visuelle, ils servent de base à la création. Si ce n’est pas encore le cas, nous faisons le point sur les éléments disponibles avant de démarrer.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Nom de domaine et hébergement",
    description:
      "Vous n’avez encore ni nom de domaine ni hébergement ? Ce n’est pas bloquant. Je peux vous accompagner dans leur choix et leur mise en place. Les abonnements et services souscrits restent à votre charge.",
    icon: Globe2,
  },
];

export default function PreparationCreationSite() {
  return (
    <section className="section-dark section-spacing">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          {/* Introduction */}
          <div className="section-intro">
            <p className="section-label">
              Avant de commencer
            </p>

            <h2>
              Ce qu’il faut pour démarrer votre site.
            </h2>

            <p>
              Pas besoin d’arriver avec tout votre site déjà préparé. Pour
              démarrer le projet, nous avons surtout besoin des éléments qui
              représentent votre activité et de savoir ce que vous souhaitez
              présenter.
            </p>
          </div>

          {/* Checklist */}
          <div>
            {preparationItems.map(
              ({ number, title, description, icon: Icon }, index) => (
                <article
                  key={number}
                  className="
                    group
                    relative
                    grid
                    grid-cols-[auto_1fr]
                    gap-5
                    pb-10
                    last:pb-0
                  "
                >
                  {/* Axe vertical */}
                  <div className="relative flex flex-col items-center">
                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-blue-500/30
                        bg-[#081120]
                        text-blue-400
                        transition
                        duration-300
                        group-hover:border-blue-400/60
                        group-hover:shadow-[0_0_20px_rgba(13,91,255,0.25)]
                      "
                    >
                      <Icon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </div>

                    {index < preparationItems.length - 1 && (
                      <div
                        className="
                          absolute
                          top-12
                          h-[calc(100%-3rem)]
                          w-px
                          bg-gradient-to-b
                          from-blue-500/50
                          to-blue-500/10
                        "
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  {/* Contenu */}
                  <div className="pb-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-semibold text-blue-400">
                        {number}
                      </span>

                      <h3 className="!mt-0">
                        {title}
                      </h3>
                    </div>

                    <p>
                      {description}
                    </p>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>

        {/* Message de fin */}
        <div
          className="
            mt-12
            flex
            max-w-4xl
            items-start
            gap-4
            border-l-2
            border-blue-500
            pl-5
          "
        >
          <CheckCircle2
            className="mt-1 h-6 w-6 shrink-0 text-blue-400"
            aria-hidden="true"
          />

          <p className="!mt-0 text-slate-300">
            <strong className="text-white">
              Il vous manque certains éléments ?
            </strong>{" "}
            Dites-moi simplement ce que vous avez déjà. Nous verrons ce qu’il
            reste à préparer avant le démarrage.
          </p>
        </div>
      </div>
    </section>
  );
}