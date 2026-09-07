import {
  DatabaseBackup,
  GraduationCap,
  Laptop,
  Network,
} from "lucide-react";

const besoins = [
  {
    title: "Ordinateur",
    items: "Installation · Logiciels · Nettoyage",
    icon: Laptop,
  },
  {
    title: "Données",
    items: "Sauvegarde · Récupération",
    icon: DatabaseBackup,
  },
  {
    title: "Matériel & réseau",
    items: "Imprimante · Réseau",
    icon: Network,
  },
  {
    title: "Accompagnement",
    items: "Prise en main · Logiciels · Formation",
    icon: GraduationCap,
  },
];

export default function BesoinsAssistance() {
  return (
    <section className="section-light section-spacing">
      <div className="site-container">
        <div className="section-intro">
          <p className="section-label">Votre besoin</p>
          <h2>De quoi avez-vous besoin ?</h2>

          <p>
            L’intervention peut concerner votre ordinateur, un logiciel,
            vos données ou un équipement à installer et configurer.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {besoins.map(({ title, items, icon: Icon }) => (
            <article key={title} className="card-light">
              <Icon
                className="h-8 w-8 text-blue-500"
                aria-hidden="true"
              />

              <h3 className="mt-5">{title}</h3>
              <p className="mt-3">{items}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-blue-500/20 p-5">
          <p>
            <strong>À savoir :</strong> l’assistance proposée par Jess Tech
            concerne l’utilisation et le fonctionnement de vos outils
            informatiques. Elle ne comprend pas la rédaction de courriers,
            d’e-mails ou l’accompagnement dans les démarches administratives
            en ligne.
          </p>
        </div>
      </div>
    </section>
  );
}