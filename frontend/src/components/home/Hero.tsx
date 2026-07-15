import { Link } from "react-router-dom";
import {
  Headset,
  Shield,
  MessageCircle,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="section-dark section-spacing relative overflow-hidden">
      {/* Décoration */}
      <img
        src="/decorations/vagueLumineuse.png"
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -top-5
          left-[30%]
          hidden
          h-[1080px]
          w-auto
          lg:block
        "
      />

      <div className="site-container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Partie gauche */}
          <div>
            <span className="badge badge-primary px-4 py-2 text-xs uppercase tracking-wide sm:text-sm">
              Jess Tech
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
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

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:mt-8 sm:text-lg sm:leading-8">
              Développeuse freelance, j&apos;accompagne particuliers,
              artisans, associations et petites entreprises dans la
              création de sites web et leurs besoins techniques.
            </p>

            {/* Boutons */}
            <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Demander un devis
              </Link>

              <Link to="/services" className="btn-secondary">
                Découvrir mes services
              </Link>
            </div>

            {/* Qualités */}
            <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-3">

              <div>
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/30 text-[#0D5BFF]">
                    <Headset />
                  </div>

                  <h3 className="font-semibold text-white">
                    À l’écoute
                  </h3>
                </div>

                <p className="text-sm leading-6 text-slate-400">
                  Vos besoins compris et expliqués clairement.
                </p>
              </div>

              <div>
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/30 text-[#0D5BFF]">
                    <Shield />
                  </div>

                  <h3 className="font-semibold text-white">
                    Sérieuse & fiable
                  </h3>
                </div>

                <p className="text-sm leading-6 text-slate-400">
                  Des solutions claires, durables et maintenables.
                </p>
              </div>

              <div>
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/30 text-[#0D5BFF]">
                    <MessageCircle />
                  </div>

                  <h3 className="font-semibold text-white">
                    Transparente
                  </h3>
                </div>

                <p className="text-sm leading-6 text-slate-400">
                  Une communication simple, sans jargon inutile.
                </p>
              </div>
            </div>
          </div>

          {/* Carte de droite */}
          <div
            className="
              rounded-3xl
              border
              border-blue-500/20
              bg-slate-950/80
              p-6
              shadow-[0_0_50px_rgba(13,91,255,0.18)]
              backdrop-blur
              sm:p-8
              lg:w-full
              lg:max-w-xl
              lg:justify-self-end
            "
          >
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
                <span className="badge badge-primary">
                  Responsive
                </span>

                <span className="badge badge-primary">
                  SEO
                </span>

                <span className="badge badge-primary">
                  Contact
                </span>

                <span className="badge badge-primary">
                  Maintenance
                </span>
              </div>

              <div>
                <div className="border-t border-blue-500/20 pt-4" />

                <p className="text-sm text-slate-400">
                  Statut
                </p>

                <span className="badge badge-success mt-2 px-4 py-2">
                  Prêt à construire
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}