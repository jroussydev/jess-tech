import {
  PencilRuler,
  RefreshCw,
  PanelsTopLeft,
  SearchCheck,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

const niveauxRefonte = [
  {
    number: "01",
    label: "Reprendre",
    title: "Une reprise ciblée",
    description:
      "Certaines parties du site ne conviennent plus, mais l’ensemble reste exploitable. Une ou plusieurs pages, l’affichage mobile, certains contenus ou éléments visuels peuvent être retravaillés sans reconstruire tout le site.",
    icon: PencilRuler,
  },
  {
    number: "02",
    label: "Remanier",
    title: "Une refonte plus importante",
    description:
      "La base du site peut être conservée, mais son apparence, son organisation ou plusieurs de ses pages ont besoin d’être reprises. La refonte permet alors de revoir l’ensemble tout en récupérant les éléments encore utiles.",
    icon: RefreshCw,
  },
  {
    number: "03",
    label: "Reconstruire",
    title: "Repartir sur une nouvelle base",
    description:
      "Lorsque la structure existante est trop limitée, trop ancienne ou ne permet plus de réaliser correctement les évolutions souhaitées, reconstruire le site peut devenir plus pertinent que multiplier les corrections.",
    icon: PanelsTopLeft,
  },
];

export default function NiveauRefonte() {
  return (
    <section className="section-dark section-spacing">
      <div className="site-container">
        {/* Introduction */}
        <div className="section-intro">
          <p className="section-label">
            L’ampleur de la refonte
          </p>

          <h2>
            Jusqu’où faut-il refaire votre site ?
          </h2>

          <p>
            Tous les projets de refonte ne nécessitent pas le même niveau
            d’intervention. L’état du site et les changements souhaités
            permettent de déterminer jusqu’où il est utile d’aller.
          </p>
        </div>

        {/* Parcours */}
        <div
          className="
            mt-14
            grid
            gap-6
            lg:grid-cols-[1fr_auto_1fr_auto_1fr]
            lg:items-center
          "
        >
          {niveauxRefonte.map((niveau, index) => {
            const Icon = niveau.icon;

            return (
              <div
                key={niveau.number}
                className="contents"
              >
                <article className="group">
                  {/* Numéro + icône */}
                  <div className="flex items-center gap-4">
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-blue-500/30
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

                    <span className="font-semibold text-blue-400/70">
                      {niveau.number}
                    </span>
                  </div>

                  {/* Niveau */}
                  <p
                    className="
                      mt-6
                      font-semibold
                      uppercase
                      tracking-widest
                      text-blue-400
                    "
                  >
                    {niveau.label}
                  </p>

                  <h3 className="mt-2">
                    {niveau.title}
                  </h3>

                  <p className="text-slate-300">
                    {niveau.description}
                  </p>
                </article>

                {/* Flèches */}
                {index < niveauxRefonte.length - 1 && (
                  <>
                    {/* Mobile / tablette */}
                    <div
                      className="
                        flex
                        justify-center
                        py-2
                        text-blue-400
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
                        px-4
                        text-blue-400
                        lg:block
                      "
                      aria-hidden="true"
                    >
                      <ArrowRight className="h-9 w-9" />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Conclusion */}
        <div
          className="
            mt-14
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
            className="mt-1 h-6 w-6 shrink-0 text-blue-400"
            aria-hidden="true"
          />

          <p className="!mt-0 text-slate-300">
            <strong className="text-white">
              Le niveau de refonte n’est pas décidé avant d’avoir regardé
              votre site.
            </strong>{" "}
            L’existant permet de déterminer ce qui peut être gardé, amélioré
            ou doit être remplacé.
          </p>
        </div>
      </div>
    </section>
  );
}