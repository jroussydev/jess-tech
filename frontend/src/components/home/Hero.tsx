import { Link } from "react-router-dom"

import {
    Headset,
    Shield,
    MessageCircle,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-24">

<img
  src="/decorations/vagueLumineuse.png"
  alt=""
  aria-hidden="true"
  className="hidden
    lg:block pointer-events-none absolute -top-5 left-[30%] hidden h-[1080px] w-auto lg:block"
/>

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-blue-500/30 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-400 sm:text-sm">
              JESS TECH
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Des solutions web
              <br />
              propres,
              <span className="text-[#0D5BFF]"> utiles </span>
              et
              <span className="text-[#0D5BFF]"> bien construites.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:mt-8 sm:text-lg sm:leading-8">
              Développeuse freelance, j'accompagne particuliers,
              artisans, associations et petites entreprises dans la
              création de sites web et leurs besoins techniques.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#0D5BFF] px-6 py-3 font-semibold transition hover:bg-blue-700"
              >
                Demander un devis
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-xl border border-blue-500/30 px-6 py-3 font-semibold transition hover:border-blue-500"
              >
                Découvrir mes services
              </Link>
            </div>

            <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-3">
              <div>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/30 text-[#0D5BFF]">
                  <Headset/>
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
                  <Shield/>
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
                  <MessageCircle/>
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

          <div className="rounded-3xl border border-blue-500/20 bg-slate-950/80 p-6 shadow-[0_0_50px_rgba(13,91,255,0.18)] backdrop-blur sm:p-8 lg:justify-self-end lg:w-full lg:max-w-xl">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-wider text-blue-400">
                  Nouveau projet
                </p>

                <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                  Site vitrine
                </h3>

                <p className="text-slate-400">
                  Client local
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                  Responsive
                </span>

                <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                  SEO
                </span>

                <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                  Contact
                </span>

                <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                  Maintenance
                </span>
              </div>

              <div>
                <div className="border-t border-blue-500/20 pt-4" />

                <p className="text-sm text-slate-400">
                  Statut
                </p>

                <span className="mt-2 inline-block rounded-full bg-green-500/20 px-4 py-2 text-green-400">
                  Prêt à construire
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}