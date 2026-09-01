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
    title: "Une erreur apparaît",
    description:
      "Un message d’erreur s’affiche ou une partie du site ne fonctionne plus comme auparavant.",
    icon: FileWarning,
  },
  {
    title: "Une page pose problème",
    description:
      "Une page ne s’affiche plus correctement ou certains de ses éléments réagissent de façon inhabituelle.",
    icon: Bug,
  },
  {
    title: "Un formulaire ne fonctionne plus",
    description:
      "L’envoi échoue, un message n’arrive pas ou le comportement du formulaire a changé.",
    icon: FormInput,
  },
  {
    title: "Le problème dépend de l’écran",
    description:
      "Le site fonctionne sur certains appareils mais rencontre un problème sur mobile, tablette ou ordinateur.",
    icon: MonitorSmartphone,
  },
  {
    title: "Le problème est apparu après un changement",
    description:
      "Une mise à jour, une modification ou une intervention récente semble avoir changé le fonctionnement du site.",
    icon: RefreshCcw,
  },
  {
    title: "Vous ne savez pas d’où vient le problème",
    description:
      "Vous constatez simplement que quelque chose ne fonctionne pas normalement sans pouvoir en identifier la cause.",
    icon: CircleHelp,
  },
];

export default function ProblemesDiagnostic() {
  return (
    <section
      id="problemes-diagnostic"
      className="section-light section-spacing"
    >
      <div className="site-container">
        <div className="section-intro">
          <p className="section-label">Le point de départ</p>
          <h2>Quel problème rencontrez-vous ?</h2>

          <p>
            Il n’est pas nécessaire de connaître l’origine du
            dysfonctionnement avant de demander un diagnostic. Ce que vous
            observez constitue déjà un point de départ.
          </p>
        </div>

        <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {problemes.map(({ title, description, icon: Icon }) => (
            <article key={title} className="flex gap-4">
              <Icon
                className="mt-1 h-7 w-7 shrink-0 text-blue-500"
                aria-hidden="true"
              />

              <div>
                <h3>{title}</h3>
                <p className="mt-2">{description}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-4xl font-semibold">
          Le symptôme visible n’indique pas toujours immédiatement son
          origine. Le diagnostic sert justement à examiner ce qui se passe
          avant d’engager une correction.
        </p>
      </div>
    </section>
  );
}