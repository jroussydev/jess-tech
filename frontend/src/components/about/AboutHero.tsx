import {
  BookText,
  Coffee,
  MapPinned,
} from "lucide-react";

const aboutValeurs = [
  {
    title: "Basée dans l’Aisne",
    description: "Axonaise, près de Beaurieux",
    icon: MapPinned,
  },
  {
    title: "Mon objectif",
    description:
      "Toujours apprendre et créer des sites utiles avant d’être impressionnants",
    icon: BookText,
  },
  {
    title: "Toujours un cappuccino",
    description:
      "Les meilleures idées commencent souvent avec un café",
    icon: Coffee,
  },
];

export default function AboutHero() {
  return (
    <section className="about-hero">
      {/* Photo principale */}
      <img
        src="/about/jesstech-mon-profil-hero-page-about.webp"
        alt="Jessica, développeuse web chez Jess Tech, présentant son site internet"
        className="about-hero__image"
      />

      {/* Contenu */}
      <div className="site-container relative z-10 flex min-h-[calc(100svh-5rem)] items-center py-16 lg:py-24">
        <div className="flex max-w-3xl flex-col items-start gap-6 xl:max-w-4xl">
          {/* Introduction */}
          <p className="section-label mb-2">
            À propos
          </p>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl xl:text-6xl">
            Bonjour,
            <br />
            moi c’est{" "}
            <span className="text-[#0D5BFF]">
              Jessica
            </span>
          </h1>

          <p className="mt-3 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Développeuse web freelance, j’ai créé Jess Tech pour proposer des
            solutions web claires, accessibles et adaptées aux besoins réels de
            chaque projet.
          </p>

          <blockquote className="mt-2 ml-15 max-w-xl border-l-2 border-blue-500 pl-5 text-base italic leading-8 text-slate-200">
            Comprendre votre projet avant d’écrire la première ligne de code.
          </blockquote>

          {/* Informations rapides */}
          <div className="mt-5 mx-auto grid max-w-[700px] gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {aboutValeurs.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="
                  card-dark
                  group
                  flex
                  min-h-[125px]
                  flex-col
                  items-center
                  justify-start
                  !p-4
                  text-center
                "
              >
                <Icon
                  className="
                    h-7
                    w-7
                    text-blue-500
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                  aria-hidden="true"
                />

                <h3 className="mt-3 !text-base leading-tight">
                  {title}
                </h3>

                <p className="!mt-3 !text-base !leading-5">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}