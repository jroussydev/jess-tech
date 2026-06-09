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
      <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-[25%_5%_70%]">
        <div className="self-start pt-6">

  <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
    Dans les coulisses
  </p>

  <h2 className="text-4xl font-black text-white">
    Les projets techniques en cours
  </h2>

  <p className="mt-4 text-slate-400 leading-7">
    Outils internes, expérimentations et développements qui illustrent
    mon travail quotidien de développeuse.
  </p>
<button className="mt-8 rounded-xl bg-[#0D5BFF] px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
  Voir tous les projets →
</button>
</div>

<div className="hidden lg:flex flex-col items-center py-8">
  <div className="h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_16px_#0D5BFF]" />
  <div className="w-px flex-1 bg-blue-500/40" />
  <div className="h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_16px_#0D5BFF]" />
  <div className="w-px flex-1 bg-blue-500/40" />
  <div className="h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_16px_#0D5BFF]" />
</div>

<div className="grid gap-8 lg:grid-cols-[70%_30%]">
        <div className="space-y-4">
          {projects.map((project) => (
            <article
  key={project.title}
  className="
    group
    flex
    items-center
    justify-between
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
<div>

  <h3 className="text-xl font-bold text-white">
    {project.title}
  </h3>

  <p className="mt-2 text-slate-400">
    {project.description}
  </p>

</div>
<div className="text-2xl text-blue-400">
  →
</div>
            </article>
            
          ))}

        </div>
                  <div
  className="
    flex
    h-full
    items-center
    justify-center
    rounded-3xl
    border
    border-blue-500/15
    bg-gradient-to-br
    from-[#081120]
    to-[#0b1d35]
  "
>
  <span className="text-6xl text-blue-400">
    {"</>"}
  </span>
</div>
</div>

        
      </div>
    </section>
  )
}