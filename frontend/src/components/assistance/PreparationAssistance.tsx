import {
  KeyRound,
  Laptop,
  MessageSquareText,
  MonitorSmartphone,
} from "lucide-react";

const etapes = [
  {
    numero: "01",
    title: "Votre besoin",
    description:
      "Expliquez ce qui ne fonctionne pas, ce que vous souhaitez installer ou ce que vous aimeriez apprendre à utiliser.",
    icon: MessageSquareText,
  },
  {
    numero: "02",
    title: "Votre matériel",
    description:
      "Ordinateur, imprimante, équipement réseau ou autre matériel concerné : quelques informations permettent de mieux préparer l’intervention.",
    icon: Laptop,
  },
  {
    numero: "03",
    title: "Les accès nécessaires",
    description:
      "Certains comptes, logiciels ou paramètres peuvent nécessiter un accès pendant l’intervention. Ils sont demandés uniquement lorsqu’ils sont utiles.",
    icon: KeyRound,
  },
  {
    numero: "04",
    title: "Le mode d’intervention",
    description:
      "Selon la demande, l’intervention peut être réalisée à distance ou nécessiter une présence sur place.",
    icon: MonitorSmartphone,
  },
];

export default function PreparationAssistance() {
  return (
    <section className="section-dark section-spacing">
      <div className="site-container">
        <div className="section-intro">
          <p className="section-label">Avant l’intervention</p>
          <h2>Quelques informations pour commencer</h2>

          <p>
            Vous n’avez pas besoin de connaître l’origine du problème.
            Décrire ce que vous constatez et le matériel concerné permet déjà
            de commencer.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {etapes.map(
            ({ numero, title, description, icon: Icon }) => (
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

                <h3 className="mt-5">{title}</h3>
                <p className="mt-3">{description}</p>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}