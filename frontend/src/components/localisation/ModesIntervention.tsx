import {
  Check,
  House,
  Laptop,
} from "lucide-react";

const ModesIntervention = () => {
  const servicesLocaux = [
    "Assistance technique",
    "Dépannage informatique",
    "Accompagnement personnalisé",
    "Rendez-vous autour d’un projet",
  ];

  const servicesDistance = [
    "Création de site internet",
    "Refonte de site existant",
    "Maintenance de site web",
    "Développement sur mesure",
    "Audit et conseils",
  ];

  return (
    <section className="section-dark">
      <div className="site-container section-spacing">
        {/* Introduction */}
        <div className="section-intro">
          <p className="section-label">Organisation</p>

          <h2>Deux façons de vous accompagner</h2>

          <p>
            Certaines prestations peuvent nécessiter une intervention locale,
            tandis que la majorité des projets web peuvent être réalisés
            entièrement à distance.
          </p>
        </div>

        {/* Modes d’intervention */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Intervention locale */}
          <article className="card-dark">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
              <House className="h-7 w-7" aria-hidden="true" />
            </div>

            <h3 className="mt-6">Intervention locale</h3>

            <p>
              Pour les demandes nécessitant une présence sur place, Jess Tech
              peut intervenir autour de Beaurieux selon la nature du besoin et
              la distance.
            </p>

            <ul className="mt-6 space-y-4">
              {servicesLocaux.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-3 text-slate-300"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>

                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Accompagnement à distance */}
          <article className="card-dark">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
              <Laptop className="h-7 w-7" aria-hidden="true" />
            </div>

            <h3 className="mt-6">Accompagnement à distance</h3>

            <p>
              Les prestations de développement web peuvent être réalisées à
              distance, avec des échanges réguliers par téléphone,
              visioconférence ou e-mail.
            </p>

            <ul className="mt-6 space-y-4">
              {servicesDistance.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-3 text-slate-300"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>

                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ModesIntervention;