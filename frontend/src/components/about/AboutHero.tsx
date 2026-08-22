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
    image: "/about/representation-de-aisne.png",
  },
  {
    title: "Mon objectif",
    description:
      "Toujours apprendre et créer des sites utiles avant d’être impressionnants",
    icon: BookText,
    image: "/about/representation-apprentissage.png",
  },
  {
    title: "Toujours un cappuccino",
    description:
      "Les meilleures idées commencent souvent avec un café",
    icon: Coffee,
    image: "/about/representation-capuccino.png",
  },
];

export default function AboutHero() {
  return (
    <section className="hero">
      {/* =====================================================
          VISUEL MOBILE / TABLETTE
          Image à définir plus tard
      ====================================================== */}

      {/*
      <div className="hero__visual-mobile">
        <div className="hero__visual-mobile-mask">
          <img
            src="/images/..."
            alt=""
            aria-hidden="true"
            className="hero__visual-mobile-image"
          />
        </div>
      </div>
      */}

      {/* =====================================================
          VISUEL DESKTOP
          Image à définir plus tard
      ====================================================== */}

      {/*
      <div className="hero__visual">
        <div className="hero__visual-mask">
          <img
            src="/images/..."
            alt=""
            aria-hidden="true"
            className="hero__visual-image"
          />
        </div>
      </div>
      */}

      {/* =====================================================
          CONTENU
      ====================================================== */}

      <div className="hero__container">
        <div className="hero__layout">
          <div className="hero__content">
            {/* Introduction */}
            <p className="hero__label">
              À propos
            </p>

            <h1 className="hero__title">
              Bonjour,
              <br />
              moi c’est{" "}
              <span className="text-gradient-blue">
                Jessica
              </span>
            </h1>

            <p className="hero__description text-slate-300">
              Développeuse web freelance, j’ai créé Jess Tech pour proposer des
              solutions web claires, accessibles et adaptées aux besoins réels
              de chaque projet.
            </p>

            {/* Citation */}
            <blockquote
              className="
                mt-5
                max-w-xl
                border-l-2
                border-sky-500
                pl-5
                italic
                text-slate-200
              "
            >
              Comprendre votre projet avant d’écrire la première ligne de code.
            </blockquote>

            {/* Informations rapides */}
            <div
              className="
                hero__cards
                grid-cols-3
                max-w-[700px]
              "
            >
              {aboutValeurs.map(({ title, description, icon: Icon, image}) => (
                <article
  key={title}
  className="
    about-value-card
    card-dark
    card-glow
    group
    relative
    flex
    min-w-0
    flex-col
    items-center
    justify-start
    overflow-hidden
    text-center
    !p-3
    sm:!p-4
  "
>
  {/* Image de fond */}
  <img
    src={image}
    alt=""
    aria-hidden="true"
    className="
      about-value-card__image
      absolute
      inset-0
      h-full
      w-full
      object-cover
      opacity-25
      transition-transform
      duration-500
      group-hover:scale-110
    "
  />

  {/* Icône */}
  <Icon
    className="
      about-value-card__icon
      relative
      z-10
      h-6
      w-6
      shrink-0
      text-sky-500
      transition-transform
      duration-300
      group-hover:scale-110
      sm:h-7
      sm:w-7
    "
    aria-hidden="true"
  />

  {/* Titre */}
  <h3
    className="
      about-value-card__title
      relative
      z-10
      mt-2
      text-slate-200
      sm:!text-base
    "
  >
    {title}
  </h3>

  {/* Description */}
  <p
    className="
      about-value-card__description
      relative
      z-10
      !mt-2
      text-slate-300
      sm:!text-sm
    "
  >
    {description}
  </p>
</article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          VAGUE BASSE
      ====================================================== */}
{/* Décoration droite */}
<img
  src="/decorations/vagues/19.png"
  alt=""
  aria-hidden="true"
  className="
    pointer-events-none
    absolute
    right-5
    -bottom-20
    z-30
    hidden
    h-auto
    origin-right
      scale-x-[1.2]
    object-contain

    lg:block
    lg:w-[48%]
    xl:w-[52%]
    2xl:w-[85%]
  "
/>
    </section>
  );
}