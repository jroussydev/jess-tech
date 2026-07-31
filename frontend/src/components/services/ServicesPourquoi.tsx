import { Check } from "lucide-react";

export default function ServicesPourquoi() {
  const engagements = [
    "Des explications claires, sans jargon technique inutile",
    "Une solution adaptée à votre besoin réel",
    "Un devis détaillé avant le début du projet",
    "Une seule interlocutrice du premier échange à la livraison",
    "Un accompagnement local dans l’Aisne ou à distance",
  ];

  return (
    <section className="section-dark section-spacing">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.15fr] lg:items-center">
          {/* Bloc de gauche */}
          <div className="section-intro">
            <p className="section-label">Pourquoi Jess Tech ?</p>

            <h2>Un accompagnement clair, humain et adapté</h2>

            <p className="max-w-xl text-justify">
              L’objectif n’est pas de vous imposer une solution toute faite,
              mais de comprendre votre besoin et de vous proposer un
              accompagnement cohérent, utile et compréhensible.
            </p>

            <p className="max-w-xl text-justify">
              Chaque projet est suivi avec attention, du premier échange
              jusqu’à la livraison, avec des explications simples et des choix
              techniques adaptés à votre situation.
            </p>
          </div>

          {/* Liste à cocher */}
          <div className=" !pl-70 !pt-18 md:p-8">
            <ul className="space-y-5">
              {engagements.map((engagement) => (
                <li
                  key={engagement}
                  className="flex items-start gap-4 text-base leading-7 text-slate-300 text-xl"
                >
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10">
                    <Check
                      className="h-4 w-4 text-blue-400"
                      aria-hidden="true"
                    />
                  </span>

                  <span>{engagement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}