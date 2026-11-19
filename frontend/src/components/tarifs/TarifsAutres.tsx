import { Link } from "react-router";
import {
  Activity,
  CodeXml,
  LifeBuoy,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";
import { autresPrestations } from "../../data/tarifs";

// Icône et page de chaque prestation, retrouvées par leur nom
const details: Record<string, { icon: LucideIcon; link: string }> = {
  "Audit technique et SEO": { icon: Activity, link: "/services/diagnostic-technique" },
  "Assistance technique": { icon: LifeBuoy, link: "/services/assistance-technique" },
  "Refonte de site": { icon: RefreshCw, link: "/services/refonte-site" },
  "Développement sur mesure": { icon: CodeXml, link: "/services/developpement-sur-mesure" },
};

export default function TarifsAutres() {
  return (
    <section className="section-light section-fade-soft-bottom section-spacing">
      <div className="site-container relative z-10">
        <div className="section-intro max-w-3xl">
          <p className="section-label">Autres prestations</p>
          <h2>
            Pour un besoin{" "}
            <span className="text-gradient-blue">plus ponctuel</span>
          </h2>
          <p>
            Un audit, un coup de main ou un projet particulier : chaque
            prestation a un prix clair ou se chiffre sur devis, au taux unique
            de 45 €/h.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {autresPrestations.map((prestation) => {
            const { icon: Icon, link } = details[prestation.name];

            return (
              <Link
                key={prestation.name}
                to={link}
                className="card-dark card-glow group flex flex-col !p-5 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className="h-6 w-6 shrink-0 text-blue-400 transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />
                  <h3 className="!m-0 !text-lg text-white">{prestation.name}</h3>
                  <span className="ml-auto shrink-0 text-lg font-semibold text-blue-400">
                    {prestation.price}
                  </span>
                </div>

                {prestation.note && (
                  <p className="!mt-3 text-sm text-slate-300">{prestation.note}</p>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}