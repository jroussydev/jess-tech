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
      className="section-light section-spacing scroll-mt-24"
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
          <div className="flex flex-col">
            {valuesItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="mt-3 group flex items-start gap-4 text-justify rounded-2xl  transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon
                      className="h-7 w-7"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <div className="flex items-baseline gap-3">


                      <h3 className="text-2xl font-semibold text-slate-950">
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;