import { Link } from "react-router-dom";

export default function ServicesCta() {
  return (
    <section className="section-light rounded-b-2xl pb-16 pt-20 md:pb-20 lg:pb-24">
      <div className="site-container max-w-[1200px]">
        <div className="relative overflow-hidden rounded-3xl border border-blue-500/15 bg-gradient-to-r from-[#081120] to-[#0b1d35] p-6 sm:p-8">
          {/* Décoration */}
          <img
            src="/decorations/vagueLumineuse2.png"
            alt=""
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-100
              hidden
              h-[900px]
              w-auto
              -translate-x-1/2
              -translate-y-1/2
              opacity-80
              lg:block
            "
          />

          <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            {/* Texte */}
            <div className="flex min-w-0 items-start gap-4 sm:gap-5">
              <div
                className="
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center
                  text-2xl
                  text-blue-400
                  sm:h-16
                  sm:w-16
                  sm:text-3xl
                "
                aria-hidden="true"
              >
                💬
              </div>

              <div className="min-w-0">
                <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Vous ne savez pas quel service choisir ?
                </h2>

                <p className="mt-2 max-w-3xl text-lg leading-8 text-slate-300">
                  Décrivez simplement votre projet, votre besoin ou la difficulté
                  rencontrée. Je vous aiderai à identifier la solution la plus
                  adaptée, sans vous demander de connaître les termes
                  techniques.
                </p>
              </div>
            </div>

            {/* Action */}
            <Link
              to="/contact"
              className="btn-primary w-full shrink-0 px-8 py-4 sm:w-auto md:min-w-[190px]"
            >
              Expliquer mon besoin →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}