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
    <section className="section-light section-fade-light-soft section-spacing">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

          {/* Introduction */}
          <div className="section-intro lg:sticky lg:top-28 lg:self-start">
            <p className="section-label">
              Votre site
            </p>

            <h2>
              Que souhaitez-vous montrer à{" "}
              <span className="text-gradient-blue">
                vos visiteurs ?
              </span>
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
            {possibilites.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="
                  group
                  flex
                  items-start
                  gap-4
                  py-6
                  first:pt-0
                  last:pb-0
                "
              >
                {/* Icône */}
                <Icon
                  className="
                    mt-1
                    h-6
                    w-6
                    shrink-0
                    text-blue-500
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:text-blue-600
                  "
                  aria-hidden="true"
                />

                {/* Texte */}
                <div className="min-w-0">
                  <h3>
                    {title}
                  </h3>

                  <p className="!mt-2">
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