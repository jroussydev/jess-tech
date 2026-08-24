import {
  FileText,
  Files,
  PanelsTopLeft,
  ArrowRight,
  ArrowDown,
  MessageCircle,
} from "lucide-react";

const typesSite = [
  {
    number: "01",
    title: "One Page",
    subtitle: "Une seule page",
    description:
      "Une seule page rassemble les informations importantes de votre activité : présentation, services, coordonnées et moyen de contact. Une solution intéressante lorsque votre activité ne nécessite pas beaucoup de contenu.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Site vitrine",
    subtitle: "Plusieurs pages",
    description:
      "Plusieurs pages permettent de séparer vos contenus : accueil, services, à propos, réalisations, contact… Vos visiteurs peuvent accéder directement aux informations qui les intéressent et vous disposez de plus d’espace pour présenter votre travail.",
    icon: Files,
  },
  {
    number: "03",
    title: "Projet plus complet",
    subtitle: "Une structure plus importante",
    description:
      "Plus de pages, davantage de contenus ou des besoins particuliers ? Le projet peut dépasser le cadre des formules proposées et être chiffré selon ce que vous souhaitez intégrer.",
    icon: PanelsTopLeft,
  },
];

export default function TypeSiteCreation() {
  return (
    <section className="section-light section-spacing">
      <div className="site-container">
        {/* Introduction */}
        <div className="section-intro">
          <p className="section-label">
            Votre projet
          </p>

          <h2>
            Quel site pour votre projet ?
          </h2>
        </div>

        {/* Parcours */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
          {typesSite.map((type, index) => {
            const Icon = type.icon;

            return (
              <div
                key={type.number}
                className="contents"
              >
                {/* Type de site */}
                <article className="relative">
                  <div className="mb-5 flex items-center gap-4">
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-blue-500/25
                        bg-blue-500/5
                        text-blue-500
                      "
                    >
                      <Icon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </div>

                    <span className="font-semibold text-blue-500">
                      {type.number}
                    </span>
                  </div>

                  <p className="section-label">
                    {type.subtitle}
                  </p>

                  <h3>
                    {type.title}
                  </h3>

                  <p>
                    {type.description}
                  </p>
                </article>

                {/* Flèche entre les étapes */}
                {index < typesSite.length - 1 && (
                  <>
                    {/* Mobile / tablette */}
                    <div
                      className="
                        flex
                        justify-center
                        py-2
                        text-blue-500
                        lg:hidden
                      "
                      aria-hidden="true"
                    >
                      <ArrowDown className="h-8 w-8 animate-bounce" />
                    </div>

                    {/* Desktop */}
                    <div
                      className="
                        hidden
                        items-center
                        justify-center
                        px-3
                        text-blue-500
                        lg:flex
                      "
                      aria-hidden="true"
                    >
                      <ArrowRight
                        className="
                          h-9
                          w-9
                          transition-transform
                          duration-500
                          hover:translate-x-2
                        "
                      />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Aide au choix */}
        <div
          className="
            mt-14
            flex
            items-start
            gap-4
            border-l-2
            border-blue-500
            pl-5
          "
        >
          <MessageCircle
            className="mt-1 h-6 w-6 shrink-0 text-blue-500"
            aria-hidden="true"
          />

          <p className="!mt-0 max-w-3xl">
            <strong>
              Vous ne savez pas quel type de site choisir ?
            </strong>{" "}
            Nous pouvons le déterminer ensemble à partir de ce que vous
            souhaitez mettre en avant.
          </p>
        </div>
      </div>
    </section>
  );
}