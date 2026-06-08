import { Link } from "react-router-dom"
export default function ServicesPreview() {
  const services = [
    {
      title: "Sites vitrines",
      description:
        "Des sites clairs, responsive et bien structurés pour présenter votre activité.",
      tag: "Web",
    },
    {
      title: "Refonte",
      description:
        "Modernisation d’un site existant pour améliorer son image et sa lisibilité.",
      tag: "Design",
    },
    {
      title: "Maintenance",
      description:
        "Corrections, mises à jour, petites évolutions et suivi technique.",
      tag: "Suivi",
    },
    {
      title: "Assistance technique",
      description:
        "Accompagnement ponctuel pour débloquer, comprendre ou améliorer vos outils.",
      tag: "Support",
    },
  ]

  return (
    <section className="bg-white px-6 py-24">
      <div className="grid gap-8 lg:grid-cols-[20%_75%]">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 text-m font-semibold uppercase tracking-widest text-blue-400">
              Services
            </p>

            <h2 className="max-w-2xl text-3xl font-black leading-tight text-slate-900 md:text-4xl">
              Comment je peux vous aider
            </h2>
              <p className="max-w-md text-slate-400 leading-7">
                Des services clairs pour vous accompagner à chaque étape de votre projet. Chaque service est pensé pour rester compréhensible, utile et
            maintenable dans le temps.
              </p>

              <Link
                to="/services"
                className="mt-6 inline-flex rounded-xl bg-[#0D5BFF] px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Voir tous les services →
              </Link>

          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 self-center">
          {services.map((service) => (
            <article
              key={service.title}
              className="group min-h-[230px] rounded-2xl border border-blue-500/15 bg-gradient-to-br from-[#081120] to-[#0b1d35] p-6 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400/50"
            >
              <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-300">
                {service.tag}
              </span>

              <h3 className="mt-6 text-xl font-bold text-white">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {service.description}
              </p>

              <div className="mt-6 h-px bg-gradient-to-r from-blue-500/50 to-transparent" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}