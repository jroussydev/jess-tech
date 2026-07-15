import { Link } from "react-router-dom"

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
  ]

  return (
    <main className="relative overflow-hidden">
      <section className="bg-[#F5F7FA] py-16 md:py-20 lg:py-24">
        <div className="section-light mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-500">
            Services
          </h3>

          <h2 className="max-w-4xl text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
            Des solutions web adaptées à vos besoins.
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Jess Tech vous accompagne dans la création, l’évolution, la maintenance
            et la compréhension de vos projets web.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
    <Link
      key={service.title}
      to={service.link}
      className="group"
    >
      <article
        className="
          h-full
rounded-2xl
              border
              border-blue-500/15
              bg-gradient-to-br
              from-[#081120]
              to-[#0b1d35]
              p-6
              transition
              duration-300
              hover:border-blue-400/50
              hover:-translate-y-1
              hover:shadow-lg hover:shadow-blue-500/10
        "
      >
        <h2 className="text-2xl font-bold text-slate-200">
          {service.title}
        </h2>

        <p className="mt-4 leading-7 text-slate-400">
          {service.description}
        </p>

        <div className="mt-6 text-blue-500 font-semibold">
          En savoir plus →
        </div>
      </article>
    </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}