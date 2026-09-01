import {
  Activity,
  Eye,
  RefreshCw,
  Save,
} from "lucide-react";

const elements = [
  {
    title: "Les mises à jour",
    description:
      "Les composants techniques d’un site évoluent avec le temps. Les maintenir à jour permet de conserver un environnement correctement entretenu.",
    icon: RefreshCw,
  },
  {
    title: "Les sauvegardes",
    description:
      "Elles permettent de disposer d’une copie du site pouvant servir de point de retour lorsqu’une restauration devient nécessaire.",
    icon: Save,
  },
  {
    title: "Le fonctionnement",
    description:
      "Les principales parties du site peuvent être vérifiées afin de repérer un problème apparu depuis la dernière intervention.",
    icon: Activity,
  },
  {
    title: "La surveillance",
    description:
      "Selon la formule choisie, le site bénéficie du niveau de suivi prévu dans la prestation.",
    icon: Eye,
  },
];

export default function EntretienMaintenance() {
  return (
    <section className="section-light section-spacing">
      <div className="site-container">
        <div className="section-intro">
          <p className="section-label">Dans le temps</p>
          <h2>Ce qui continue de vivre après la mise en ligne</h2>
        </div>

        <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {elements.map(({ title, description, icon: Icon }) => (
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
      </div>
    </section>
  );
}