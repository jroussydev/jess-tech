import { Code2, HeartHandshake, MapPin } from "lucide-react";

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
    <section className="section-dark section-spacing">
      <div className="site-container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Texte */}
          <div>
            <p className="section-label">
              Mon parcours
            </p>

            <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Revenir à l’informatique pour construire un projet qui me
              ressemble
            </h2>

            <div className="mt-7 flex max-w-2xl flex-col gap-5 text-base leading-8 text-slate-300 sm:text-lg text-justify">
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
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {storyHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="card-dark group flex flex-col gap-4 sm:h-full lg:flex-row lg:items-start"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400 transition duration-300 group-hover:bg-blue-500 group-hover:text-white">
                    <Icon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-400">
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

export default AboutStory;