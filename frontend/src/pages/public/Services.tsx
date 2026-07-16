import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Création de site internet",
      description:
        "Création de sites vitrines clairs, modernes et adaptés à votre activité.",
      link: "/CreationSiteInternet",
    },
    {
      title: "Développement web sur mesure",
      description:
        "Développement de fonctionnalités spécifiques selon les besoins de votre projet.",
      link: "/DeveloppementWebSurMesure",
    },
    {
      title: "Maintenance de site web",
      description:
        "Mises à jour, corrections, petites évolutions et suivi technique de votre site.",
      link: "/MaintenanceSiteWeb",
    },
    {
      title: "Assistance technique",
      description:
        "Aide ponctuelle pour comprendre, débloquer ou améliorer vos outils numériques.",
      link: "/AssistanceTechnique",
    },
  ];

  return (
    <main className="relative overflow-hidden">
      <section className="section-light section-spacing">
        <div className="site-container">
          {/* Introduction */}
          <div className="section-intro">
            <p className="section-label">
              Services
            </p>

            <h1 className="max-w-4xl sm:text-5xl">
              Des solutions web adaptées à vos besoins.
            </h1>

            <p className="max-w-3xl sm:text-lg sm:leading-8">
              Jess Tech vous accompagne dans la création, l’évolution, la
              maintenance et la compréhension de vos projets web.
            </p>
          </div>

          {/* Liste des services */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="group"
              >
                <article className="card-dark h-full">
                  <h2>
                    {service.title}
                  </h2>

                  <p>
                    {service.description}
                  </p>

                  <div className="mt-6 font-semibold text-blue-500">
                    En savoir plus →
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}