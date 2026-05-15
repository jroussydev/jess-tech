export default function ProjectsPreview() {
  const projects = [
    {
      title: "Sunbanks Tool",
      description: "Dashboard fullstack React / Node.js / PostgreSQL.",
    },
    {
      title: "Projet en préparation",
      description: "Nouvelle expérimentation technique en cours de conception.",
    },
    {
      title: "Outils internes",
      description: "Développements techniques et solutions en cours de construction.",
    },
  ]

  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#0D5BFF]">
            Dans les coulisses
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#001A5A]">
            Les projets techniques en cours
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600 leading-7">
            Quelques outils, expérimentations et développements internes qui
            illustrent le travail technique en cours.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-[#001A5A]">
                {project.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}