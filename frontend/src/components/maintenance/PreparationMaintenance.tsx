import {
  KeyRound,
  MonitorCog,
  SearchCheck,
  SlidersHorizontal,
} from "lucide-react";

const etapes = [
  {
    numero: "01",
    title: "Les accès nécessaires",
    subtitle: "Accéder au site et à son environnement",
    description:
      "Les accès nécessaires à l’administration du site, à l’hébergement ou aux outils concernés doivent pouvoir être fournis selon les interventions à réaliser.",
    icon: KeyRound,
  },
  {
    numero: "02",
    title: "L’environnement du site",
    subtitle: "Identifier les outils utilisés",
    description:
      "CMS, extensions, thème, hébergement ou développement spécifique : connaître l’environnement permet de déterminer dans quelles conditions le site peut être suivi.",
    icon: MonitorCog,
  },
  {
    numero: "03",
    title: "L’état actuel",
    subtitle: "Vérifier la situation avant de commencer",
    description:
      "Lorsqu’un site existe déjà, son état peut nécessiter une première vérification avant la mise en place d’une maintenance régulière.",
    icon: SearchCheck,
  },
  {
    numero: "04",
    title: "Le besoin de suivi",
    subtitle: "Déterminer ce qui doit être pris en charge",
    description:
      "Un entretien régulier, quelques interventions dans l’année ou un besoin ponctuel ne demandent pas le même type de suivi.",
    icon: SlidersHorizontal,
  },
];

export default function PreparationMaintenance() {
  return (
    <section className="section-dark section-spacing">
      <div className="site-container">
        <div className="section-intro">
          <p className="section-label">Avant de commencer</p>
          <h2>Avant de prendre en charge votre site</h2>

          <p>
            Un site existant doit d’abord être regardé dans son environnement
            actuel afin de déterminer comment sa maintenance peut être mise en
            place.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {etapes.map(
            ({
              numero,
              title,
              subtitle,
              description,
              icon: Icon,
            }) => (
              <article key={numero} className="card-dark">
                <div className="flex items-start justify-between gap-4">
                  <Icon
                    className="h-8 w-8 text-blue-400"
                    aria-hidden="true"
                  />

                  <span className="text-2xl font-bold text-white/20">
                    {numero}
                  </span>
                </div>

                <p className="section-label mt-5">{title}</p>
                <h3 className="mt-2">{subtitle}</h3>
                <p className="mt-3">{description}</p>
              </article>
            ),
          )}
        </div>

        <div className="mt-8 rounded-2xl border border-blue-400/25 p-5">
          <p>
            <strong>Votre site n’a pas été créé par Jess Tech ?</strong>{" "}
            Ce n’est pas forcément un problème. Sa prise en charge dépend de
            son environnement technique et de son état au moment de
            l’intervention.
          </p>
        </div>
      </div>
    </section>
  );
}