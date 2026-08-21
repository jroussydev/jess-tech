import {
  Check,
  FileCheck2,
  MonitorSmartphone,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

const inclus = [
  {
    icon: FileCheck2,
    title: "Un périmètre défini",
    description:
      "Les prestations prévues sont détaillées dans le devis afin que vous sachiez précisément ce qui est compris.",
  },
  {
    icon: MonitorSmartphone,
    title: "Un affichage responsive",
    description:
      "Le site est pensé pour fonctionner correctement sur ordinateur, tablette et smartphone.",
  },
  {
    icon: SearchCheck,
    title: "Les bases du référencement",
    description:
      "La structure technique essentielle au référencement naturel est intégrée lorsque la prestation le prévoit.",
  },
  {
    icon: ShieldCheck,
    title: "Les vérifications avant livraison",
    description:
      "Les éléments principaux sont contrôlés avant la mise en ligne ou la remise du projet.",
  },
];

export default function PrestationsIncluses() {
  return (
    <section
      className="
        section-dark
        section-fade-dark-soft
        section-spacing
      "
    >
      <div className="site-container">
        <div
          className="
            grid
            items-start
            gap-10

            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-16
          "
        >
          {/* Introduction */}
          <div className="section-intro">
            <p className="section-label">
              Ce qui est inclus
            </p>

            <h2>
              Une prestation{" "}
              <span className="text-gradient-blue">
                claire
              </span>{" "}
              dès le départ
            </h2>

            <p className="max-w-xl text-slate-300">
              Le contenu exact dépend de la prestation choisie, mais chaque
              devis précise ce qui est prévu afin d’éviter les zones floues.
            </p>

            {/* Information complémentaire */}
            <div className="mt-6 flex items-start gap-3 text-slate-300">
              <Check
                className="
                  mt-1
                  h-5
                  w-5
                  shrink-0
                  text-sky-500
                "
                aria-hidden="true"
              />

              <span>
                Les éventuelles options supplémentaires sont toujours chiffrées
                avant leur réalisation.
              </span>
            </div>
          </div>

          {/* Éléments inclus */}
          <div className="flex flex-col">
            {inclus.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`
                    group
                    py-5
                    ${
                      index !== inclus.length - 1
                        ? "border-b border-sky-500/20"
                        : ""
                    }
                  `}
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

                    <h3 className="text-slate-100">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-2 max-w-2xl text-slate-300">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}