export default function About() {
  return (
    <main className="relative overflow-hidden text-justify">
{/* Section 1 - Hero */}
<section className="relative bg-slate-50 pb-10 md:pb-12 lg:pb-16">
  {/* Bandeau accroché au header */}
  <div
    className="
      absolute
      left-0
      top-0
      h-32
      w-[42%]
      rounded-br-[90px]
      border-b
      border-r
      border-blue-500/50
      bg-[#020817]
      shadow-[0_0_35px_rgba(13,91,255,0.30)]
    "
  />

  <div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
    <div className="grid gap-12 pt-10 lg:grid-cols-[55%_45%] lg:items-center">
      {/* Bloc gauche */}
      <div>
        <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl">
          À propos de Jess Tech
        </h1>

        <h2 className="mt-20 max-w-3xl text-3xl font-black leading-tight text-slate-900">
          Une approche{" "}
          <span className="text-[#0D5BFF]">simple</span>
          <br />
          du développement web
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
          Des solutions web claires, accessibles et adaptées aux besoins réels.
        </p>
      </div>

      {/* Bloc droite */}
      <div className="
  mt-16
  lg:-translate-x-20
  rounded-3xl
  border
  border-blue-500/20
  bg-[#020817]
  p-6
  shadow-[0_0_50px_rgba(13,91,255,0.18)]
  backdrop-blur
  sm:p-8
  lg:max-w-xl
">
        <p className="text-sm uppercase tracking-wider text-blue-400">
          Jessica Roussy
        </p>

        <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          Développeuse web freelance
        </h3>

        <p className="mt-8 text-slate-400 italic">
          "La technique vient ensuite pour construire une solution adaptée,
          utile et durable."
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Section 2 - Une approche simple */}
      <section className="bg-slate-50 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[35%_65%]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-500">
                Une approche simple du développement web
              </p>

              <h2 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
                Comprendre le besoin avant de choisir la solution.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-600">
              <p>
                Jess Tech est née d'un projet simple : proposer des solutions web
                claires, accessibles et adaptées aux besoins réels de chaque client.
              </p>

              <p>
                Chaque projet est différent. Certains ont besoin d'un site internet
                pour présenter leur activité, d'autres recherchent une refonte, une
                maintenance ou un développement plus spécifique.
              </p>

              <p>
                Avant de parler fonctionnalités ou développement, l'objectif est
                d'abord de comprendre ce que le projet doit apporter.
              </p>

              <p>
                Les échanges se font simplement, sans jargon inutile, afin que chacun
                puisse comprendre son projet et participer aux décisions qui le
                concernent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Derrière Jess Tech */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[35%_65%]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
                Derrière Jess Tech
              </p>

              <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
                Une développeuse web à l'écoute des besoins concrets.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-300">
              <p>
                Je suis Jessica Roussy, développeuse web freelance et créatrice
                de Jess Tech.
              </p>

              <p>
                Après ma formation dans le développement web, j'ai choisi de créer
                Jess Tech afin de proposer des services de création de sites internet,
                de maintenance et d'assistance technique.
              </p>

              <p>
                Cette activité me permet de continuer à apprendre, à développer de
                nouveaux projets et à mettre mes compétences au service de besoins
                concrets.
              </p>

              <p>
                J'apprécie particulièrement les projets qui demandent de comprendre
                une situation, de trouver une solution adaptée et de l'accompagner
                jusqu'à sa mise en œuvre.
              </p>

              <p>
                Aujourd'hui, je continue à approfondir mes connaissances et à
                développer mes compétences afin de proposer des solutions toujours
                plus efficaces et adaptées aux besoins de mes clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Comment je travaille */}
      <section className="bg-slate-50 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[35%_65%]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-500">
                Comment je travaille
              </p>

              <h2 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
                Une méthode simple, transparente et progressive.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-600">
              <p>
                Je privilégie une approche simple et transparente. Chaque projet
                avance étape par étape, avec des échanges réguliers afin que chacun
                sache où il en est et puisse suivre son évolution.
              </p>

              <p>
                Lorsqu'une question se pose, je préfère prendre le temps de vérifier
                une information ou d'étudier une solution plutôt que de donner une
                réponse approximative.
              </p>

              <p>
                Le développement web évolue rapidement. C'est pourquoi je continue à
                me former et à développer de nouveaux projets afin d'enrichir mes
                compétences et d'améliorer les services que je propose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Technologies */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[35%_65%]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
                Technologies
              </p>

              <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
                Des outils choisis selon les besoins du projet.
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-slate-300">
                Chaque projet possède ses propres contraintes. Les outils sont donc
                choisis en fonction des besoins réels du projet et non l'inverse.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["WordPress", "React", "TypeScript", "Node.js", "PostgreSQL", "HTML", "CSS", "JavaScript"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-8 text-base leading-8 text-slate-300">
                L'objectif n'est pas d'utiliser la technologie la plus complexe,
                mais celle qui répond le mieux au besoin du projet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - CTA */}
      <section className="bg-slate-50 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-blue-500/15 bg-gradient-to-r from-[#081120] to-[#0b1d35] p-6 text-white sm:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Un projet en tête ?
                </h2>

                <p className="mt-2 text-slate-300">
                  Que vous ayez besoin d'un site internet, d'une évolution de votre site
                  actuel, d'une assistance technique ou d'un développement spécifique,
                  Jess Tech vous accompagne dans la réalisation de votre projet.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#0D5BFF] px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Me contacter →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}