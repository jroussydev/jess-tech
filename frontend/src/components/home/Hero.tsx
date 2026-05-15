import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#0D5BFF]">
            Jess Tech
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#001A5A] leading-tight">
            Création de sites web & assistance technique
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-600 leading-8">
            J’accompagne particuliers, artisans, associations et petites
            entreprises dans leurs projets web et besoins techniques.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-[#0D5BFF] px-6 py-3 font-semibold text-white shadow-md transition duration-300 hover:bg-[#001A5A] hover:-translate-y-1"
            >
              Demander un devis
            </Link>

            <Link
              to="/services"
              className="rounded-full border border-[#0D5BFF] bg-white px-6 py-3 font-semibold text-[#0D5BFF] transition duration-300 hover:bg-[#0D5BFF] hover:text-white hover:-translate-y-1"
            >
              Découvrir mes services
            </Link>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-xl border border-slate-200">
          <h2 className="text-2xl font-bold text-[#001A5A]">
            Un accompagnement clair, humain et sur mesure.
          </h2>

          <p className="mt-4 text-slate-600 leading-7">
            Que ce soit pour créer un site vitrine, moderniser une présence en
            ligne ou débloquer une difficulté technique, l’objectif est de
            proposer une solution compréhensible et adaptée.
          </p>
        </div>
      </div>
    </section>
  )
}