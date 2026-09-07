import {
  DatabaseBackup,
  FileSearch,
  GraduationCap,
  HardDrive,
  Laptop,
  Network,
  Printer,
  Settings,
  ShieldCheck,
  Info,
} from "lucide-react";

const interventions = [
  {
    title: "Installation d’un ordinateur",
    description:
      "Mise en service de votre ordinateur et premiers réglages pour qu’il soit prêt à être utilisé.",
    price: "À partir de 49 €",
    icon: Laptop,
  },
  {
    title: "Installation de logiciels",
    description:
      "Installation et configuration des logiciels dont vous avez besoin.",
    price: "À partir de 29 €",
    icon: Settings,
  },
  {
    title: "Nettoyage et optimisation",
    description:
      "Vérification et nettoyage d’un ordinateur devenu lent, encombré ou moins agréable à utiliser.",
    price: "À partir de 49 €",
    icon: HardDrive,
  },
  {
    title: "Sauvegarde de données",
    description:
      "Mise en place ou réalisation d’une sauvegarde de vos fichiers selon vos besoins et le matériel disponible.",
    price: "À partir de 79 €",
    icon: DatabaseBackup,
  },
  {
    title: "Récupération de données",
    description:
      "Recherche des possibilités de récupération lorsque des fichiers ne sont plus accessibles.",
    price: "25 € / heure",
    icon: FileSearch,
  },
  {
    title: "Configuration réseau",
    description:
      "Aide à la configuration de votre réseau ou des équipements qui doivent s’y connecter.",
    price: "À partir de 79 €",
    icon: Network,
  },
  {
    title: "Installation d’une imprimante",
    description:
      "Installation, connexion et configuration de votre imprimante sur les appareils concernés.",
    price: "À partir de 29 €",
    icon: Printer,
  },
  {
    title: "Formation informatique",
    description:
      "Un accompagnement adapté à votre niveau pour apprendre à utiliser un ordinateur, un logiciel ou un outil numérique.",
    price: "25 € / heure",
    icon: GraduationCap,
  },
];

export default function InterventionsAssistance() {
  return (
    <section
      id="interventions-assistance"
      className="section-light section-fade-light-soft section-spacing"
    >
      <div className="site-container">

        {/* Introduction */}

        <div className="section-intro max-w-3xl">
          <p className="section-label">
            Les interventions
          </p>

          <h2>
            De quoi avez-vous{" "}
            <span className="text-gradient-blue">
              besoin
            </span>
            {" "}?
          </h2>

          <p>
            Installation, dépannage, données ou prise en main :
            voici les principales interventions que je peux réaliser.
          </p>
        </div>

        {/* Prestations */}

        <div
          className="
            mt-10
            grid
            gap-5
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {interventions.map(
            ({ title, description, price, icon: Icon }) => (
              <article
                key={title}
                className="
                  card-dark
                  card-glow
                  group
                  flex
                  h-full
                  flex-col
                  !p-5
                "
              >
                <Icon
                  className="
                    h-7
                    w-7
                    text-blue-400
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                  aria-hidden="true"
                />

                <h3 className="mt-4 text-white">
                  {title}
                </h3>

                <p className="!mt-3 text-slate-300">
                  {description}
                </p>

                <p className="!mt-auto pt-6 font-bold !text-white">
                  {price}
                </p>
              </article>
            ),
          )}
        </div>

        {/* Informations utiles */}

        <div
          className="
            mt-12
            grid
            gap-8
            border-t
            border-slate-200
            pt-10
            md:grid-cols-2
            md:gap-12
          "
        >
          {/* Données */}

          <div className="flex gap-4">
            <ShieldCheck
              className="mt-1 h-7 w-7 shrink-0 text-blue-500"
              aria-hidden="true"
            />

            <div>
              <h3 className="!m-0 text-slate-950">
                À propos de vos données
              </h3>

              <p className="mt-3">
                Lorsque c’est possible, mieux vaut conserver une copie des
                fichiers importants avant une intervention qui pourrait les
                affecter. Une récupération peut être tentée selon l’état du
                support, mais son résultat ne peut pas être garanti.
              </p>
            </div>
          </div>

          {/* Limites */}

          <div className="flex gap-4">
            <Info
              className="mt-1 h-7 w-7 shrink-0 text-blue-500"
              aria-hidden="true"
            />

            <div>
              <h3 className="!m-0 text-slate-950">
                Ce que l’assistance ne comprend pas
              </h3>

              <p className="mt-3">
                Je peux vous aider à utiliser vos outils numériques, mais je
                ne rédige pas vos courriers ou e-mails et je ne réalise pas
                vos démarches administratives à votre place.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}