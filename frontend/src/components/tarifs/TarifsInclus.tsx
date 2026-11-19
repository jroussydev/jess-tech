import {
  GraduationCap,
  ListChecks,
  Rocket,
  Search,
  Smartphone,
  UserRound,
} from "lucide-react";

const inclus = [
  {
    icon: UserRound,
    title: "Une seule interlocutrice",
    description:
      "Vous échangez directement avec moi, du premier échange à la mise en ligne.",
  },
  {
    icon: Smartphone,
    title: "Un site adapté au mobile",
    description:
      "Votre site s’affiche correctement sur ordinateur, tablette et smartphone.",
  },
  {
    icon: Search,
    title: "Les bases du référencement",
    description:
      "La structure technique essentielle au référencement est intégrée dans chaque formule.",
  },
  {
    icon: ListChecks,
    title: "Des vérifications avant livraison",
    description:
      "Les éléments principaux sont contrôlés avant la mise en ligne de votre site.",
  },
  {
    icon: Rocket,
    title: "La mise en ligne comprise",
    description:
      "Je m’occupe de publier votre site : vous n’avez rien de technique à gérer.",
  },
  {
    icon: GraduationCap,
    title: "Une prise en main",
    description:
      "Un tutoriel ou une séance de prise en main pour être autonome sur votre site.",
  },
];

export default function TarifsInclus() {
  return (
    <section className="section-dark section-fade-dark-soft section-fade-dark-bottom section-spacing">
      <div className="site-container">

        {/* Introduction */}
        <div className="section-intro max-w-3xl">
          <p className="section-label">Toujours inclus</p>

          <h2>
            Ce que vous avez,{" "}
            <span className="text-gradient-blue">quelle que soit la formule</span>
          </h2>

          <p className="max-w-2xl text-slate-300">
            Le prix affiché comprend toujours ces éléments. Pas de mauvaise
            surprise à la fin du projet.
          </p>
        </div>

        {/* Éléments inclus */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-x-4
            gap-y-8

            sm:grid-cols-3
          "
        >
          {inclus.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="
                group
                min-w-0
                border-b
                border-sky-500/20
                pb-5

                sm:border-b-0
                sm:border-r
                sm:pr-5

                sm:[&:nth-child(3n)]:border-r-0
                sm:[&:nth-child(3n)]:pr-0
              "
            >
              {/* Icône + titre */}
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

                <h3 className="text-slate-200">{title}</h3>
              </div>

              {/* Description */}
              <p className="mt-3 text-slate-300">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}