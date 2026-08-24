import {
  BriefcaseBusiness,
  Images,
  PanelsTopLeft,
  MessageSquareText,
  CircleHelp,
} from "lucide-react";

const possibilites = [
  {
    title: "Présenter votre activité",
    description:
      "Qui vous êtes, ce que vous proposez, votre façon de travailler, vos coordonnées ou votre zone d’intervention.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Montrer votre travail",
    description:
      "Photos, réalisations, projets, galerie, témoignages ou avis clients.",
    icon: Images,
  },
  {
    title: "Présenter vos services",
    description:
      "Une vue d’ensemble ou des pages dédiées pour expliquer ce que vous proposez.",
    icon: PanelsTopLeft,
  },
  {
    title: "Faciliter le contact",
    description:
      "Formulaire, coordonnées, horaires, carte ou liens vers vos réseaux sociaux.",
    icon: MessageSquareText,
  },
  {
    title: "Répondre aux questions",
    description:
      "FAQ, informations pratiques ou éléments importants à connaître avant de vous contacter.",
    icon: CircleHelp,
  },
];

export default function PossibilitesCreationSite() {
  return (
    <section className="section-light section-spacing">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Introduction */}
          <div className="section-intro lg:sticky lg:top-28 lg:self-start">
            <p className="section-label">
              Votre site
            </p>

            <h2>
              Que souhaitez-vous montrer à vos visiteurs ?
            </h2>

            <p>
              Selon votre activité, votre site peut présenter vos services,
              vos réalisations, vos coordonnées ou permettre à vos visiteurs
              de vous envoyer directement une demande.
            </p>

            <p className="mt-5 !text-sm text-slate-500">
              Les éléments disponibles dépendent de la formule choisie et des
              éventuelles options ajoutées au projet.
            </p>
          </div>

          {/* Possibilités */}
          <div className="divide-y divide-slate-200">
            {possibilites.map(({ title, description, icon: Icon }, index) => (
              <article
                key={title}
                className="
                  group
                  grid
                  gap-4
                  py-7
                  first:pt-0
                  last:pb-0
                  sm:grid-cols-[auto_1fr]
                  sm:gap-6
                "
              >
                {/* Numéro + icône */}
                <div className="flex items-center gap-4 sm:items-start">
                  <span
                    className="
                      min-w-7
                      font-semibold
                      text-blue-500/60
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

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
                </div>

                {/* Texte */}
                <div>
                  <h3>
                    {title}
                  </h3>

                  <p>
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}