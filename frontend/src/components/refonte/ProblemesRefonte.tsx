import {
  MonitorCog,
  Smartphone,
  RefreshCcw,
  ListTree,
  CircleOff,
  Blocks,
  SearchCheck,
} from "lucide-react";

const problemes = [
  {
    title: "Le design a vieilli",
    description:
      "L’apparence du site ne correspond plus à l’image que vous souhaitez donner aujourd’hui.",
    icon: MonitorCog,
  },
  {
    title: "Le mobile pose problème",
    description:
      "Certains contenus sont difficiles à lire, des éléments débordent ou la navigation devient compliquée sur les petits écrans.",
    icon: Smartphone,
  },
  {
    title: "Votre activité a changé",
    description:
      "Vos services, vos contenus ou votre organisation ont évolué, mais votre site présente encore une ancienne version de votre activité.",
    icon: RefreshCcw,
  },
  {
    title: "Les informations sont difficiles à trouver",
    description:
      "Les pages se sont accumulées ou leur organisation ne permet plus d’accéder facilement aux contenus importants.",
    icon: ListTree,
  },
  {
    title: "Certaines parties ne fonctionnent plus",
    description:
      "Formulaires, liens, affichage ou autres éléments du site peuvent nécessiter une reprise.",
    icon: CircleOff,
  },
  {
    title: "Le site est difficile à faire évoluer",
    description:
      "Ajouter du contenu ou modifier certaines parties est devenu compliqué à cause de sa structure ou des choix techniques existants.",
    icon: Blocks,
  },
];

export default function ProblemesRefonte() {
  return (
    <section className="section-light section-spacing">
      <div className="site-container">
        {/* Introduction */}
        <div className="section-intro">
          <p className="section-label">
            Votre site actuel
          </p>

          <h2>
            Qu’est-ce qui ne vous convient plus sur votre site ?
          </h2>

          <p>
            Un site peut continuer à fonctionner tout en ne correspondant plus
            vraiment à votre activité. Parfois, quelques éléments posent
            problème. Dans d’autres cas, plusieurs parties du site ont besoin
            d’être reprises.
          </p>
        </div>

        {/* Situations */}
        <div
          className="
            mt-12
            grid
            md:grid-cols-2
            lg:gap-x-12
          "
        >
          {problemes.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="
                group
                grid
                grid-cols-[auto_1fr]
                gap-4
                border-b
                border-slate-200
                py-7
                md:gap-5
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-blue-500/20
                  bg-blue-500/5
                  text-blue-500
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              >
                <Icon
                  className="h-6 w-6"
                  aria-hidden="true"
                />
              </div>

              <div>
                <h3 className="!mt-0">
                  {title}
                </h3>

                <p>
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Transition */}
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
          <SearchCheck
            className="mt-1 h-6 w-6 shrink-0 text-blue-500"
            aria-hidden="true"
          />

          <p className="!mt-0">
            <strong>
              Un de ces problèmes ne signifie pas forcément qu’il faut refaire
              tout le site.
            </strong>{" "}
            La première étape consiste justement à identifier ce qui peut être
            conservé et ce qui mérite d’être repris.
          </p>
        </div>
      </div>
    </section>
  );
}