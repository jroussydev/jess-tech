import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24">

      {/* Design Halo lumiere */}
      <div className="absolute inset-0">
        <div className="absolute left-1/3 top-0 h-full w-96 bg-blue-600/20 blur-[120px]" />
      </div>
{/* Design Courbe bleu */}
<div className="absolute left-1/3 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
<div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex rounded-full border border-blue-500/30 px-4 py-2 text-sm text-blue-400">
            JESS TECH
          </span>

          <h1 className="mt-6 text-5xl font-black leading-tight">
            Des solutions web
            <br />
            propres,
            <span className="text-[#0D5BFF]"> utiles </span>
            et
            <span className="text-[#0D5BFF]">
              {" "}
              bien construites.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
            Développeuse freelance, j'accompagne particuliers,
            artisans, associations et petites entreprises dans la
            création de sites web et leurs besoins techniques.
          </p>

          <div className="mt-10 flex gap-4">
            <Link
              to="/contact"
              className="rounded-xl bg-[#0D5BFF] px-6 py-3 font-semibold transition hover:bg-blue-700"
            >
              Demander un devis
            </Link>

            <Link
              to="/services"
              className="rounded-xl border border-blue-500/30 px-6 py-3 font-semibold transition hover:border-blue-500"
            >
              Découvrir mes services
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
  <div>
    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/30 text-[#0D5BFF]">
      ○
    </div>

    <h3 className="font-semibold text-white">
      À l’écoute
    </h3>

    <p className="mt-2 text-sm leading-6 text-slate-400">
      Vos besoins compris et expliqués clairement.
    </p>
  </div>

  <div>
    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/30 text-[#0D5BFF]">
      ✓
    </div>

    <h3 className="font-semibold text-white">
      Sérieuse & fiable
    </h3>

    <p className="mt-2 text-sm leading-6 text-slate-400">
      Des solutions claires, durables et maintenables.
    </p>
  </div>

  <div>
    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/30 text-[#0D5BFF]">
      ◇
    </div>

    <h3 className="font-semibold text-white">
      Transparente
    </h3>

    <p className="mt-2 text-sm leading-6 text-slate-400">
      Une communication simple, sans jargon inutile.
    </p>
  </div>
</div>
        </div>

        <div className="rounded-3xl border border-blue-500/20 bg-slate-950/80 p-8 shadow-2xl backdrop-blur">
          <div className="space-y-6">

  <div>
    <p className="text-sm uppercase tracking-wider text-blue-400">
      Nouveau projet
    </p>

    <h3 className="mt-2 text-3xl font-bold">
      Site vitrine
    </h3>

    <p className="text-slate-400">
      Client local
    </p>
  </div>

  <div className="space-y-3">
<div className="flex flex-wrap gap-2">
  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400 border border-blue-500/20">
    Responsive
  </span>

  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400 border border-blue-500/20">
    SEO
  </span>

  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400 border border-blue-500/20">
    Contact
  </span>

  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400 border border-blue-500/20">
    Maintenance
  </span>
</div>
  </div>

  <div>
    <div className="border-t border-blue-500/20 pt-4"></div>
<p className="text-sm text-slate-400">
  Statut
</p>

<span className="inline-block mt-2 rounded-full bg-green-500/20 px-4 py-2 text-green-400">
  Prêt à construire
</span>
  </div>

</div>
        </div>
      </div>
    </section>
  )
}