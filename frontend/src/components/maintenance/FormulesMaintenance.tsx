import {
  Check,
  HeartHandshake,
  ShieldCheck,
  Zap,
} from "lucide-react";

const formules = [
  {
    name: "Essentielle",
    price: "49 €",
    icon: ShieldCheck,
    description:
      "Pour assurer l’entretien courant du site et disposer d’un suivi régulier.",
    includes: [
      "Mises à jour",
      "Surveillance",
      "Sauvegardes",
      "Vérification du fonctionnement",
    ],
    note: "Les ajouts de fonctionnalités ne sont pas inclus.",
  },
  {
    name: "Sérénité",
    price: "89 €",
    icon: HeartHandshake,
    description:
      "Pour aller au-delà de l’entretien courant et bénéficier d’une prise en charge plus complète.",
    includes: [
      "Tout ce qui est compris dans Essentielle",
      "Petites corrections",
      "Assistance prioritaire",
    ],
    note: "Les évolutions importantes sont facturées séparément.",
  },
  {
    name: "Prioritaire",
    price: "149 €",
    icon: Zap,
    description:
      "Pour les activités qui dépendent davantage de leur site et souhaitent un niveau de priorité supérieur.",
    includes: [
      "Tout ce qui est compris dans Sérénité",
      "Priorité maximale",
      "Accompagnement renforcé",
    ],
    note: "Une formule destinée aux activités dépendantes de leur site.",
  },
];

export default function FormulesMaintenance() {
  return (
    <section
      id="formules-maintenance"
      className="section-dark section-spacing"
    >
      <div className="site-container">
        <div className="section-intro">
          <p className="section-label">Maintenance régulière</p>
          <h2>Les 3 formules de maintenance</h2>

          <p>
            Trois niveaux de suivi selon la place qu’occupe votre site dans
            votre activité et le niveau d’accompagnement recherché.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {formules.map(
            ({ name, price, icon: Icon, description, includes, note }) => (
              <article
                key={name}
                className="card-dark card-glow flex h-full flex-col"
              >
                <Icon
                  className="h-8 w-8 text-blue-400"
                  aria-hidden="true"
                />

                <h3 className="mt-5">{name}</h3>
                <p className="mt-3">{description}</p>

                <p className="mt-6 text-3xl font-bold text-white">
                  {price}
                  <span className="text-lg font-normal text-white/70">
                    {" "}
                    / mois
                  </span>
                </p>

                <ul className="mt-6 space-y-3">
                  {includes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check
                        className="mt-1 h-5 w-5 shrink-0 text-blue-400"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-auto pt-6 text-sm text-white/65">
                  {note}
                </p>
              </article>
            ),
          )}
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 p-5">
          <p>
            <strong>
              Besoin d’ajouter une page, une fonctionnalité ou de faire évoluer
              plus largement le site ?
            </strong>{" "}
            Ces demandes peuvent être réalisées séparément lorsqu’elles ne font
            pas partie de la maintenance prévue.
          </p>
        </div>
      </div>
    </section>
  );
}