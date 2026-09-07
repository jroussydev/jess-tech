import {
  Bug,
  FileWarning,
  FormInput,
  MonitorSmartphone,
  RefreshCcw,
  CircleHelp,
} from "lucide-react";

const problemes = [
  {
    label: "Erreur",
    title: "Un message d’erreur apparaît",
    description:
      "Une erreur s’affiche ou une partie du site ne fonctionne plus comme avant.",
    icon: FileWarning,
  },
  {
    label: "Affichage",
    title: "Une page ne s’affiche plus correctement",
    description:
      "Certains éléments ont bougé, disparu ou réagissent de façon inhabituelle.",
    icon: Bug,
  },
  {
    label: "Formulaire",
    title: "Un formulaire ne fonctionne plus",
    description:
      "L’envoi échoue, les messages n’arrivent plus ou le comportement a changé.",
    icon: FormInput,
  },
  {
    label: "Responsive",
    title: "Le problème apparaît seulement sur certains écrans",
    description:
      "Tout semble fonctionner sur ordinateur, mais pas sur mobile ou tablette, ou l’inverse.",
    icon: MonitorSmartphone,
  },
  {
    label: "Changement récent",
    title: "Le problème est apparu après une modification",
    description:
      "Une mise à jour, une modification ou une intervention récente semble avoir changé quelque chose.",
    icon: RefreshCcw,
  },
  {
    label: "Origine inconnue",
    title: "Vous savez juste que quelque chose ne va pas",
    description:
      "Vous constatez un problème sans savoir d’où il vient. C’est justement là que le diagnostic devient utile.",
    icon: CircleHelp,
  },
];

export default function ProblemesDiagnostic() {
  return (
    <section
      id="problemes-diagnostic"
      className="section-light section-fade-light-soft section-spacing"
    >
      <div className="site-container">

        {/* Introduction */}

        <div className="section-intro max-w-3xl">
          <p className="section-label">
            Le point de départ
          </p>

          <h2>
            Quel problème rencontrez-vous sur{" "}
            <span className="text-gradient-blue">
              votre site
            </span>
            {" "}?
          </h2>

          <p>
            Vous n’avez pas besoin de savoir d’où vient le problème.
            Ce que vous voyez ou ce qui ne fonctionne plus suffit déjà
            pour commencer à regarder ce qui se passe.
          </p>
        </div>

        {/* Problèmes */}

        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-x-4
            gap-y-8
            sm:grid-cols-3
          "
        >
          {problemes.map(({ label, title, description, icon: Icon }, index) => (
            <article
              key={title}
              className={`
                group
                min-w-0
                border-b
                border-sky-500/20
                pb-5
                sm:border-b-0
                sm:pr-5
                ${
                  index % 3 !== 2
                    ? "sm:border-r sm:border-sky-500/20"
                    : "sm:pr-0"
                }
              `}
            >
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

                <p className="section-label !m-0">
                  {label}
                </p>
              </div>

              <h3 className="mt-3 text-slate-950">
                {title}
              </h3>

              <p className="mt-3 text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>

        {/* Précision */}

        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="!m-0">
            <strong>
              Le problème visible n’est pas toujours la vraie cause.
            </strong>
            <br />
            Le diagnostic sert justement à regarder ce qui se passe avant
            de prévoir une correction.
          </p>
        </div>

      </div>
    </section>
  );
}