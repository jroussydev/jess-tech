import { Lightbulb, MessageCircle, Target } from "lucide-react";

const valuesItems = [
  {
    icon: MessageCircle,
    title: "Échanger",
    text: "Chaque projet commence par une discussion afin de comprendre votre activité, vos besoins et vos attentes.",
  },
  {
    icon: Target,
    title: "Définir",
    text: "Nous identifions ensemble les priorités et la solution la plus cohérente avec votre projet.",
  },
  {
    icon: Lightbulb,
    title: "Construire",
    text: "Je transforme ensuite vos idées en une solution claire, utile et pensée pour évoluer.",
  },
];

const AboutValues = () => {
  return (
    <section
      id="mon-approche"
      className="section-light section-fade-hero section-spacing"
    >
      <div className="site-container">
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Introduction */}
          <div className="section-intro">
            <p className="section-label">
              Mon approche
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Comprendre avant de développer
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg text-justify">
              Je ne commence pas un projet par la technique. Je prends d’abord
              le temps de comprendre votre activité, vos objectifs et les
              personnes auxquelles votre site s’adresse.
            </p>
          </div>

          {/* Étapes */}
<div
  className="
    grid
    grid-cols-3
    gap-2
    pt-8

    sm:flex
    sm:flex-col
    sm:gap-8
    sm:pt-12
  "
>
  {valuesItems.map((item) => {
    const Icon = item.icon;

    return (
      <div
        key={item.title}
        className="
          group
          min-w-0
          text-center

          sm:border-b
          sm:border-sky-500/20
          sm:pb-6
          sm:text-left
          sm:last:border-b-0
          sm:last:pb-0
        "
      >
        {/* Icône + titre */}
        <div
          className="
            flex
            flex-col
            items-center
            gap-2

            sm:flex-row
            sm:gap-3
          "
        >
          <Icon
            className="
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

          <h3 className="text-slate-950 !text-sm sm:!text-lg">
            {item.title}
          </h3>
        </div>

        {/* Texte */}
        <p
          className="
            mt-2
            text-slate-600
            !text-xs
            !leading-5

            sm:max-w-2xl
            sm:!text-base
            sm:!leading-7
          "
        >
          {item.text}
        </p>
      </div>
    );
  })}
</div>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;