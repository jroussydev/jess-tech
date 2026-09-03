import {
  FileText,
  Files,
  PanelsTopLeft,
} from "lucide-react";

const typesSite = [
  {
    title: "One Page",
    subtitle: "Une seule page",
    description:
      "Une seule page rassemble les informations importantes de votre activité : présentation, services, coordonnées et moyen de contact. Une solution intéressante lorsque votre activité ne nécessite pas beaucoup de contenu.",
    icon: FileText,
  },
  {
    title: "Site vitrine",
    subtitle: "Plusieurs pages",
    description:
      "Plusieurs pages permettent de séparer vos contenus : accueil, services, à propos, réalisations, contact… Vos visiteurs peuvent accéder directement aux informations qui les intéressent et vous disposez de plus d’espace pour présenter votre travail.",
    icon: Files,
  },
  {
    title: "Projet plus complet",
    subtitle: "Une structure plus importante",
    description:
      "Plus de pages, davantage de contenus ou des besoins particuliers ? Le projet peut dépasser le cadre des formules proposées et être chiffré selon ce que vous souhaitez intégrer.",
    icon: PanelsTopLeft,
  },
];

export default function TypeSiteCreation() {
  return (
    <section className="section-light section-fade-light-soft section-spacing">
      <div className="site-container">

        {/* Introduction */}
        <div className="section-intro max-w-3xl">
          <p className="section-label">
            Votre projet
          </p>

          <h2>
  Quel site pour{" "}
  <span className="text-gradient-blue">
    votre projet
  </span>{" "}
  ?
</h2>
        </div>

        {/* Types de site */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-4

            sm:grid-cols-3
          "
        >
          {typesSite.map((type) => {
            const Icon = type.icon;

            return (
              <article
                key={type.title}
                className="
                  group
                  min-w-0

                  border-b
                  border-sky-500/20
                  pb-5

                  sm:border-b-0
                  sm:border-r
                  sm:pr-5

                  sm:last:border-r-0
                  sm:last:pr-0
                "
              >
                {/* Icône + sous-titre */}
                <div className="flex items-center gap-3">
                  <Icon
                    className="
                      h-7
                      w-7
                      shrink-0
                      text-sky-500
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                    aria-hidden="true"
                  />

                  <p className="section-label !m-0">
                    {type.subtitle}
                  </p>
                </div>

                {/* Titre */}
                <h3 className="mt-3 text-slate-950">
                  {type.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-slate-600">
                  {type.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Aide au choix */}
        <div
          className="
            mx-auto
            mt-10
            max-w-3xl
            text-center
          "
        >
          <p className="!m-0">
            <strong>
              Vous ne savez pas quel type de site choisir ?
            </strong>
            <br />
            Nous pouvons le déterminer ensemble à partir de ce que vous
            souhaitez mettre en avant.
          </p>
        </div>

      </div>
    </section>
  );
}