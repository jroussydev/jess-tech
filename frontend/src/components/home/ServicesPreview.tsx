export default function ServicesPreview() {
  const services = [
    {
      title: "Sites vitrines",
      description:
        "Création de sites clairs, professionnels et adaptés pour présenter votre activité.",
    },
    {
      title: "Refonte de site",
      description:
        "Modernisation d’un site existant pour améliorer son apparence, sa lisibilité et son efficacité.",
    },
    {
      title: "Maintenance",
      description:
        "Corrections, mises à jour, petites évolutions et suivi technique.",
    },
    {
      title: "Assistance technique",
      description:
        "Aide ponctuelle, accompagnement technique et assistance informatique selon vos besoins.",
    },
  ]

  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#0D5BFF]">
            Services
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#001A5A]">
            Des services simples, utiles et adaptés
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-[#001A5A]">
                {service.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}