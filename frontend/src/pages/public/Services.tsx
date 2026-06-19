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
        link: "/DeveloppementSurMesure",
    },
    {
      title: "Maintenance de site web",
      description:
        "Mises à jour, corrections, petites évolutions et suivi technique de votre site.",
        link: "/Maintenance",
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
      <section className="bg-slate-50 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-500">
            Services
          </p>

          <h1 className="max-w-4xl text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
            Des solutions web adaptées à vos besoins.
          </h1>

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
          rounded-3xl
          border
          border-blue-500/15
          bg-white
          p-8
          shadow-sm
          transition
          duration-300
          hover:-translate-y-1
          hover:border-blue-500/40
          hover:shadow-lg
        "
      >
        <h2 className="text-2xl font-bold text-slate-900">
          {service.title}
        </h2>

        <p className="mt-4 leading-7 text-slate-600">
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