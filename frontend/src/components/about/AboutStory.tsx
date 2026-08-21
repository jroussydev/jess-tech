import {
  Code2,
  HeartHandshake,
  MapPin,
} from "lucide-react";

const storyHighlights = [
  {
    icon: Code2,
    title: "Développeuse web",
    text: "Création de sites internet, maintenance et solutions sur mesure.",
  },
  {
    icon: MapPin,
    title: "Basée dans l’Aisne",
    text: "Un accompagnement local autour de Beaurieux et à distance partout en France.",
  },
  {
    icon: HeartHandshake,
    title: "Une approche humaine",
    text: "Des échanges simples, transparents et adaptés à chaque projet.",
  },
];

const AboutStory = () => {
  return (
    <section
      className="
        section-dark
        section-fade-dark-soft
        section-spacing
      "
    >
      <div className="site-container">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

          {/* Texte */}
          <div className="section-intro">
            <p className="section-label">
              Mon parcours
            </p>

            <h2 className="max-w-2xl">
              Revenir à l’informatique pour construire un projet qui me{" "}
              <span className="text-gradient-blue">
                ressemble
              </span>
            </h2>

            <div className="mt-6 flex max-w-2xl flex-col gap-5 text-slate-300">
              <p>
                Après plusieurs années dans d’autres domaines, j’ai choisi de
                revenir vers l’informatique et le développement web afin de
                créer Jess Tech.
              </p>

              <p>
                Cette activité me permet aujourd’hui de réunir la technique,
                la créativité et le contact humain autour de projets concrets
                et utiles.
              </p>

              <p>
                J’accompagne les particuliers, artisans, commerçants,
                associations et petites entreprises dans la création et
                l’évolution de leurs outils numériques.
              </p>
            </div>
          </div>

          {/* Informations clés */}
          <div className="flex flex-col gap-8 pt-14">
            {storyHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    border-b
                    border-sky-500/20
                    pb-6
                    last:border-b-0
                    last:pb-0
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

                    <h3 className="text-slate-200">
                      {item.title}
                    </h3>
                  </div>

                  {/* Texte */}
                  <p className="mt-2 max-w-xl text-slate-300">
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

export default AboutStory;