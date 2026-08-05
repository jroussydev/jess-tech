import { Check } from "lucide-react";

const engagements = [
  "Des explications claires, sans jargon technique inutile",
  "Une solution adaptée à votre besoin réel",
  "Un devis détaillé avant le début du projet",
  "Une seule interlocutrice du premier échange à la livraison",
  "Un accompagnement local dans l’Aisne ou à distance",
];

export default function ServicesPourquoi() {
  return (
    <section className="section-dark section-spacing">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center xl:gap-16">
          {/* Présentation */}
          <div className="section-intro max-w-2xl">
            <p className="section-label">Pourquoi Jess Tech ?</p>

            <h2>Un accompagnement clair, humain et adapté</h2>

            <p>
              L’objectif n’est pas de vous imposer une solution toute faite,
              mais de comprendre votre besoin et de vous proposer un
              accompagnement cohérent, utile et compréhensible.
            </p>

            <p>
              Chaque projet est suivi avec attention, du premier échange
              jusqu’à la livraison, avec des explications simples et des choix
              techniques adaptés à votre situation.
            </p>
          </div>

          {/* Engagements */}
          <div className="lg:pl-8 xl:pl-14">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {engagements.map((engagement) => (
                <li
                  key={engagement}
                  className="
                    flex
                    items-start
                    gap-4
                    rounded-xl
                    
                    border-blue-500/15
                    bg-blue-500/5
                    p-4
                    text-base
                    leading-7
                    text-slate-300
                    sm:text-lg
                  "
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10">
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