import { Link } from "react-router-dom"

export default function ProjectsPreview() {
  const projects = [
    {
      title: "Jess Tech",
      description: "Site fullstack React / Node.js / PostgreSQL.",
    },
    {
      title: "Jess-Tech Edu Studio",
      description: "Nouvelle expérimentation technique en cours de conception.",
    },
    {
      title: "Outils internes",
      description: "Développements techniques et solutions en cours de construction.",
    },
  ]

  return (
<section className="relative overflow-hidden py-16 md:py-20 lg:py-24">



{/* Bloc de section en 3 parties */}
  <div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
    <div className="grid gap-28 lg:grid-cols-[25%_75%]">

{/* Bloc gauche */}
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
          <Link to="/DansLesCoulisses">
          <button className="mt-10 rounded-xl bg-[#0D5BFF] px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
             Voir tous les projets →
          </button></Link>
        </div>

{/* Design ligne bleu 
        <div className="hidden lg:flex flex-col items-center py-8">
          <div className="h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_16px_#0D5BFF]" />
          <div className="w-px flex-1 bg-blue-500/40" />
          <div className="h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_16px_#0D5BFF]" />
          <div className="w-px flex-1 bg-blue-500/40" />
          <div className="h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_16px_#0D5BFF]" />
        </div>*/}
{/* Vague bleu */}
{/* Design ligne bleu */}
  <img
    src="/decorations/vagueLumineuse2.png"
  alt=""
  aria-hidden="true"
  className="
    hidden
    lg:block
    absolute
    left-[13%]
    top-1/2
    -translate-y-1/2
    h-[900px]
    w-auto
    opacity-80
    -z-10
    pointer-events-none
  "
  />

{/* Bloc droite */}
        <div className="relative grid gap-8 lg:grid-cols-[65%_35%]">

{/* Bloc secondaire Projets */}
        <div className="space-y-4">
          {projects.map((project) => (
            <article
            key={project.title}
            className="
              group
flex
flex-col
gap-4
sm:flex-row
sm:items-center
sm:justify-between
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
{/* Design image */}

          <img
  src="/decorations/IconDevCircuit.png"
  alt=""
  aria-hidden="true"
  className="
    hidden
    lg:block
    absolute
    right-[-80px]
    top-1/2
    -translate-y-1/2
    w-[260px]
    xl:w-[340px]
    2xl:w-[420px]
    opacity-90
    pointer-events-none
  "
/>
          
        </div>    
      </div>
      </div>
    </section>
  )
}