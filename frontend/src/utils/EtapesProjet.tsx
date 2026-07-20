import {
  Code2,
  FileText,
  Headphones,
  MessageCircle,
  Rocket,
  SearchCheck,
  WalletCards,
} from "lucide-react";

const EtapesProjet = () => {
  const etapes = [
    {
      numero: "01",
      titre: "Premier échange",
      description:
        "Nous discutons de votre projet, de vos besoins et de vos objectifs.",
      icon: MessageCircle,
    },
    {
      numero: "02",
      titre: "Étude du besoin",
      description:
        "J’analyse votre demande afin de vous proposer une solution adaptée.",
      icon: SearchCheck,
    },
    {
      numero: "03",
      titre: "Devis personnalisé",
      description:
        "Vous recevez une proposition claire et détaillée avant le démarrage.",
      icon: WalletCards,
    },
    {
      numero: "04",
      titre: "Développement",
      description:
        "Je conçois votre solution en respectant les éléments définis ensemble.",
      icon: Code2,
    },
    {
      numero: "05",
      titre: "Validation",
      description:
        "Vous suivez l’avancement et validez les différentes étapes du projet.",
      icon: FileText,
    },
    {
      numero: "06",
      titre: "Mise en ligne",
      description:
        "Votre site est finalisé, configuré et rendu accessible à vos visiteurs.",
      icon: Rocket,
    },
    {
      numero: "07",
      titre: "Suivi et support",
      description:
        "Je reste disponible après la livraison selon les besoins convenus.",
      icon: Headphones,
    },
  ];

  return (
    <section className="section-light">
      <div className="site-container section-spacing">
        {/* Introduction */}
        <div className="section-intro mx-auto max-w-3xl text-center">
          <p className="section-label">Comment se déroule un projet ?</p>

          <h2>Un accompagnement clair et transparent</h2>

          <p>
            Chaque projet avance étape par étape, avec des échanges réguliers et
            une organisation définie dès le départ.
          </p>
        </div>

        {/* Étapes */}
        <div className="relative mt-14">
          {/* Ligne horizontale — desktop */}
          <div
            className="absolute left-0 right-0 top-6 hidden border-t border-dashed border-blue-200 lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-7 lg:gap-4">
            {etapes.map(
              ({ numero, titre, description, icon: Icon }, index) => (
                <article
                  key={numero}
                  className="group relative flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:hover:shadow-none"
                >
                  {/* Numéro */}
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-md shadow-blue-500/20">
                    {index + 1}
                  </div>

                  {/* Icône */}
                  <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon
                      className="h-7 w-7 stroke-[1.6]"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-5 text-base font-bold text-slate-900">
                    {titre}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </article>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EtapesProjet;