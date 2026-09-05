import {
  MonitorCog,
  Smartphone,
  RefreshCcw,
  ListTree,
  MousePointerClick,
  Wrench,
} from "lucide-react";

const problemes = [
  {
    label: "Apparence",
    title: "Le design ne vous correspond plus",
    description:
      "Couleurs, typographies, mise en page ou visuels peuvent être retravaillés lorsque l’apparence du site ne correspond plus à l’image de votre activité.",
    icon: MonitorCog,
  },
  {
    label: "Responsive",
    title: "Le mobile pose problème",
    description:
      "L’affichage peut être repris lorsque certains contenus débordent, deviennent difficiles à lire ou que la navigation fonctionne mal sur les petits écrans.",
    icon: Smartphone,
  },
  {
    label: "Contenus",
    title: "Votre activité a évolué",
    description:
      "Services, textes, photos ou informations devenus obsolètes peuvent être remplacés ou réorganisés pour présenter votre activité telle qu’elle est aujourd’hui.",
    icon: RefreshCcw,
  },
  {
    label: "Organisation",
    title: "Les informations sont difficiles à trouver",
    description:
      "L’organisation des pages et des contenus peut être revue pour retrouver une structure plus claire et faciliter l’accès aux informations importantes.",
    icon: ListTree,
  },
  {
    label: "Fonctionnement",
    title: "Certains éléments ne remplissent plus leur rôle",
    description:
      "Menus, formulaires, liens ou autres fonctionnalités peuvent être repris lorsqu’ils fonctionnent mal ou ne répondent plus correctement à vos besoins.",
    icon: MousePointerClick,
  },
  {
    label: "Technique",
    title: "La base technique devient limitante",
    description:
      "Lorsque la structure existante complique les modifications ou les évolutions, certaines parties techniques peuvent également devoir être reprises.",
    icon: Wrench,
  },
];

export default function ProblemesRefonte() {
  return (
    <section className="section-light section-fade-light-soft section-spacing">
      <div className="site-container">

        {/* Introduction */}

        <div className="section-intro max-w-3xl">
          <p className="section-label">
            Votre site actuel
          </p>

          <h2>
            Qu’est-ce qui ne vous convient plus sur{" "}
            <span className="text-gradient-blue">
              votre site
            </span>
            {" "}?
          </h2>

          <p>
            Une refonte peut concerner une seule partie du site ou plusieurs
            éléments à la fois. L’objectif est d’identifier ce qui pose
            problème aujourd’hui et ce qui mérite réellement d’être repris.
          </p>
        </div>

        {/* Éléments */}

        <div
          className="
            mt-8
            grid
            grid-cols-2
            gap-x-4
            gap-y-8
            sm:grid-cols-3
          "
        >
          {problemes.map((probleme, index) => {
            const Icon = probleme.icon;
            const isLastColumn = (index + 1) % 3 === 0;

            return (
              <article
                key={probleme.title}
                className={`
                  group
                  min-w-0
                  border-b
                  border-sky-500/20
                  pb-5
                  sm:border-b-0
                  sm:pr-5
                  ${
                    !isLastColumn
                      ? "sm:border-r sm:border-sky-500/20"
                      : "sm:pr-0"
                  }
                `}
              >
                {/* Icône + label */}

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
                    {probleme.label}
                  </p>
                </div>

                {/* Titre */}

                <h3 className="mt-3 text-slate-950">
                  {probleme.title}
                </h3>

                {/* Description */}

                <p className="mt-3 text-slate-600">
                  {probleme.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Transition */}

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
              Un problème ne signifie pas forcément qu’il faut tout refaire.
            </strong>
            <br />
            L’état du site permet de déterminer le niveau de refonte réellement
            nécessaire.
          </p>
        </div>

      </div>
    </section>
  );
}