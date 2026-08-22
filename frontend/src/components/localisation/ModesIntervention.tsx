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
    <section
      className="
        section-light
        section-fade-light-soft
        section-spacing
      "
    >
      <div className="site-container">

        {/* Introduction */}
        <div className="section-intro max-w-3xl">
          <p className="section-label">
            Organisation
          </p>

          <h2>
            Deux façons de vous{" "}
            <span className="text-gradient-blue">
              accompagner
            </span>
          </h2>

          <p>
            Certaines prestations peuvent nécessiter une intervention locale,
            tandis que la majorité des projets web peuvent être réalisés
            entièrement à distance.
          </p>
        </div>

        {/* Modes d’intervention */}
        <div className="mt-8 grid gap-4 grid-cols-1 lg:grid-cols-2">

          {/* Intervention locale */}
          <article
            className="
              card-dark
              card-glow
              group
              flex
              h-full
              flex-col
            "
          >
            {/* Icône + titre */}
            <div className="flex items-center gap-3">
              <House
                className="
                  h-8
                  w-8
                  shrink-0
                  text-sky-500
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
                aria-hidden="true"
              />

              <h3 className="text-slate-100">
                Intervention locale
              </h3>
            </div>

            {/* Description */}
            <p className="mt-4 text-slate-300">
              Pour les demandes nécessitant une présence sur place, Jess Tech
              peut intervenir autour de Beaurieux selon la nature du besoin et
              la distance.
            </p>

            {/* Prestations */}
            <ul className="mt-5 space-y-3">
              {servicesLocaux.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-3 text-slate-300"
                >
                  <Check
                    className="
                      mt-1
                      h-4
                      w-4
                      shrink-0
                      text-sky-500
                    "
                    aria-hidden="true"
                  />

                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Accompagnement à distance */}
          <article
            className="
              card-dark
              card-glow
              group
              flex
              h-full
              flex-col
            "
          >
            {/* Icône + titre */}
            <div className="flex items-center gap-3">
              <Laptop
                className="
                  h-8
                  w-8
                  shrink-0
                  text-sky-500
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
                aria-hidden="true"
              />

              <h3 className="text-slate-100">
                Accompagnement à distance
              </h3>
            </div>

            {/* Description */}
            <p className="mt-4 text-slate-300">
              Les prestations de développement web peuvent être réalisées à
              distance, avec des échanges réguliers par téléphone,
              visioconférence ou e-mail.
            </p>

            {/* Prestations */}
            <ul className="mt-5 space-y-3">
              {servicesDistance.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-3 text-slate-300"
                >
                  <Check
                    className="
                      mt-1
                      h-4
                      w-4
                      shrink-0
                      text-sky-500
                    "
                    aria-hidden="true"
                  />

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