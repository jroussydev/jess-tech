import {Coffee, BookText, MapPinned} from "lucide-react";
const AboutHero = () => {

const aboutValeurs = [
    {
      title: "Basée dans l'Aisne",
      description: "Axonnaise, près de Beaurieux",
      icon: MapPinned,
    },
    {
      title: "Mon objectif",
      description: "Toujours apprendre et créer des sites utiles avant d'être impressionnants",
      icon: BookText,

    },
    {
      title: "Toujours un cappuccino",
      description: "Les meilleures idées commencent souvent avec un café",
      icon: Coffee,
    },
  ]

  return (
    <section className="about-hero">
      <img
        src="/about/jesstech-mon-profil-hero-page-about.png"
        alt="Jessica, développeuse web chez Jess Tech, présentant son site internet"
        className="about-hero__image"
      />

      

<div className="site-container relative z-10 flex min-h-[calc(100svh-5rem)] items-center py-16 lg:py-24">
  <div className="flex max-w-3xl flex-col items-start gap-8 xl:max-w-4xl">

    <p className="section-label mb-2">
      À propos
    </p>

    <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
      Bonjour, <br/>
      moi c’est{" "}
      <span className="text-[#0D5BFF]">Jessica</span>
    </h1>

    <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg mt-5">
      Développeuse web freelance, j’ai créé Jess Tech pour proposer des
      solutions web claires, accessibles et adaptées aux besoins réels de
      chaque projet.
    </p>

    <blockquote className="max-w-xl border-l-2 border-blue-500 pl-5 text-base italic leading-8 text-slate-200 mt-5">
      Comprendre votre projet avant d’écrire la première ligne de code.
    </blockquote>
    
    <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {aboutValeurs.map((valeurs) => {
              const Icon = valeurs.icon;

              return (
                <a
                  key={valeurs.title}
                  className="card-dark group flex min-h-[200px] flex-col items-center text-center"
                >
                  <Icon
                    className="h-10 w-10 text-blue-500 transition duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />

                  <h3 className="mt-5">{valeurs.title}</h3>

                  <p className="break-words text-sm font-medium">
                    {valeurs.description}
                  </p>


                </a>
              );
            })}
            </div>
  </div>
</div>
    </section>
  );
};

export default AboutHero;