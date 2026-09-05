import {
  Palette,
  PanelsTopLeft,
  MonitorSmartphone,
  FileText,
  MousePointerClick,
  Wrench,
} from "lucide-react";

const elementsRefonte = [
  {
    title: "L’apparence du site",
    description:
      "Couleurs, typographies, mise en page, visuels et présentation générale peuvent être retravaillés lorsque le site ne correspond plus à l’image que vous souhaitez présenter.",
    icon: Palette,
  },
  {
    title: "L’organisation des pages",
    description:
      "Certains contenus peuvent être déplacés, regroupés ou séparés pour retrouver une structure plus cohérente avec ce que vous proposez aujourd’hui.",
    icon: PanelsTopLeft,
  },
  {
    title: "L’affichage mobile et tablette",
    description:
      "Les pages peuvent être reprises lorsqu’elles s’affichent mal sur les petits écrans ou que certains éléments deviennent difficiles à utiliser.",
    icon: MonitorSmartphone,
  },
  {
    title: "Les contenus existants",
    description:
      "Textes, images, services, coordonnées ou informations devenues obsolètes peuvent être remplacés ou réorganisés selon les besoins de la refonte.",
    icon: FileText,
  },
  {
    title: "La navigation et les fonctionnalités",
    description:
      "Menus, formulaires, liens ou autres éléments du site peuvent être revus lorsqu’ils ne remplissent plus correctement leur rôle.",
    icon: MousePointerClick,
  },
  {
    title: "La base technique si nécessaire",
    description:
      "Lorsque la refonte l’impose, certaines parties techniques peuvent devoir être modifiées pour permettre la réalisation correcte de la nouvelle version.",
    icon: Wrench,
  },
];

export default function ElementsRefonte() {
  return (
    <section
      id="elements-refonte"
      className="section-light section-spacing"
    >
      <div className="site-container">
        {/* Introduction */}
        <div className="section-intro">
          <p className="section-label">
            La refonte
          </p>

          <h2>
            Qu’est-ce qu’on peut reprendre sur votre site ?
          </h2>

          <p>
            Une refonte peut toucher une seule partie du site comme plusieurs
            éléments à la fois. Tout dépend de ce qui existe déjà, de ce que
            vous souhaitez conserver et des changements nécessaires.
          </p>
        </div>

        {/* Éléments pouvant être retravaillés */}
        <div
          className="
            mt-12
            grid
            md:grid-cols-2
            md:gap-x-12
          "
        >
          {elementsRefonte.map(
            ({ title, description, icon: Icon }) => (
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
                {/* Icône */}
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

                {/* Contenu */}
                <div>
                  <h3 className="!mt-0">
                    {title}
                  </h3>

                  <p>
                    {description}
                  </p>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}