import {
  DatabaseBackup,
  FileSearch,
  GraduationCap,
  HardDrive,
  Laptop,
  Network,
  Printer,
  Settings,
  Wrench,
  Wifi,
} from "lucide-react";

const interventions = [
  {
    title: "Assistance à distance",
    description:
      "Aide, dépannage et accompagnement lorsqu’une intervention peut être réalisée à distance.",
    price: "25 € / heure",
    icon: Wifi,
  },
  {
    title: "Assistance à domicile",
    description:
      "Intervention directement sur place lorsque le besoin nécessite une présence physique.",
    price: "25 € / heure",
    icon: Wrench,
  },
  {
    title: "Installation d’un ordinateur",
    description:
      "Mise en service et premiers réglages d’un nouvel ordinateur.",
    price: "À partir de 49 €",
    icon: Laptop,
  },
  {
    title: "Installation de logiciels",
    description:
      "Installation et configuration des logiciels nécessaires.",
    price: "À partir de 29 €",
    icon: Settings,
  },
  {
    title: "Nettoyage et optimisation",
    description:
      "Vérification et optimisation d’un ordinateur devenu lent ou encombré.",
    price: "À partir de 49 €",
    icon: HardDrive,
  },
  {
    title: "Sauvegarde de données",
    description:
      "Mise en place ou réalisation d’une sauvegarde selon les données et le support disponibles.",
    price: "À partir de 79 €",
    icon: DatabaseBackup,
  },
  {
    title: "Récupération de données",
    description:
      "Recherche des possibilités de récupération selon la situation et l’état du support.",
    price: "Base : 25 € / heure",
    icon: FileSearch,
  },
  {
    title: "Configuration réseau",
    description:
      "Aide à la configuration d’un réseau ou de ses équipements.",
    price: "À partir de 79 €",
    icon: Network,
  },
  {
    title: "Installation d’une imprimante",
    description:
      "Installation, connexion et configuration de l’imprimante.",
    price: "À partir de 29 €",
    icon: Printer,
  },
  {
    title: "Formation informatique",
    description:
      "Accompagnement personnalisé pour apprendre à utiliser un ordinateur, un logiciel ou un outil numérique.",
    price: "25 € / heure",
    icon: GraduationCap,
  },
];

export default function InterventionsAssistance() {
  return (
    <section
      id="interventions-assistance"
      className="section-dark section-spacing"
    >
      <div className="site-container">
        <div className="section-intro">
          <p className="section-label">Prestations</p>
          <h2>Les interventions proposées</h2>

          <p>
            Une intervention peut être réalisée seule ou combinée à d’autres
            opérations lorsque votre demande le nécessite.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {interventions.map(
            ({ title, description, price, icon: Icon }) => (
              <article
                key={title}
                className="card-dark card-glow flex h-full flex-col"
              >
                <Icon
                  className="h-7 w-7 text-blue-400"
                  aria-hidden="true"
                />

                <h3 className="mt-4">{title}</h3>
                <p className="mt-3">{description}</p>

                <p className="mt-auto pt-6 font-bold text-white">
                  {price}
                </p>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}