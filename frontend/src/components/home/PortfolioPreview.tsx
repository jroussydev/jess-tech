import { Link } from "react-router-dom"

export default function PortfolioPreview() {
  return (
<section className="bg-white py-16 md:py-20 lg:py-24">
  <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
    <div className="grid gap-10 lg:grid-cols-[30%_70%] lg:items-center">
{/* Bloc de gauche */}
    <div className="self-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#0D5BFF]">
        Réalisations
      </p>

      <h2 className="text-4xl font-black text-[#001A5A]">
        Des projets concrets,
        des résultats utiles
      </h2>

      <p className="mt-4 leading-7 text-slate-600">
        Découvrez prochainement une sélection
        de sites et projets réalisés pour des clients
        de différents secteurs.
      </p>

<Link
  to="/realisations"
  className="
    mt-8
    inline-flex
    rounded-xl
    bg-[#0D5BFF]
    px-6
    py-3
    font-semibold
    text-white
    transition
    hover:bg-blue-700
  "
>
  Voir les réalisations →
</Link>
    </div>
{/* Bloc de droite */}
    <div
      className="
        rounded-3xl
        bg-gradient-to-r
        from-[#081120]
        to-[#0b1d35]
        p-10
        text-white
      "
      >
        <div className="grid items-center gap-10 lg:grid-cols-2">

  {/* Maquette 
  <img
  src="/images/mairie-preview.webp"
  alt="Site mairie"
  />
*/}
<div className="rounded-2xl border border-blue-400/30 bg-gradient-to-br from-[#0b1730] to-[#123c8a]/60 p-4 shadow-[0_0_35px_rgba(13,91,255,0.25)]">
  <div className="mb-4 flex gap-2">
  <div className="h-3 w-3 rounded-full bg-slate-300" />
  <div className="h-3 w-3 rounded-full bg-slate-300" />
  <div className="h-3 w-3 rounded-full bg-slate-300" />
</div>

  <div className="rounded-xl border border-blue-300/20 bg-blue-500/20 p-5">
    <div className="h-20 rounded-lg bg-blue-400/25" />

    <div className="mt-5 space-y-2">
      <div className="h-3 w-5/6 rounded bg-blue-100/60" />
      <div className="h-3 w-full rounded bg-blue-100/30" />
      <div className="h-3 w-2/3 rounded bg-blue-100/30" />
    </div>

    <div className="mt-5 grid grid-cols-3 gap-3">
      <div className="h-10 rounded-lg bg-blue-300/20" />
      <div className="h-10 rounded-lg bg-blue-300/20" />
      <div className="h-10 rounded-lg bg-blue-300/20" />
    </div>
  </div>
</div>
<div>

  <h3 className="text-4xl font-bold">
    Les premières réalisations arrivent bientôt.
  </h3>

  <p className="mt-4 text-slate-300">
    Chaque projet est unique et pensé
    sur mesure selon vos objectifs.
  </p>

  <div className="mt-8 flex flex-wrap gap-8 text-sm">

    <span>✓ Design soigné</span>

    <span>✓ Code propre</span>

    <span>✓ Optimisé</span>

  </div>

</div>
        </div>
      </div>
      </div>
      </div>
    </section>
  )
}