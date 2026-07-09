import { Link } from "react-router-dom"

export default function ContactCTA() {
  return (
    <section className="bg-slate-50 pb-16 md:pb-20 lg:pb-24 rounded-br-2xl rounded-bl-2xl">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-blue-500/15 bg-gradient-to-r from-[#081120] to-[#0b1d35] p-6 sm:p-8">
          
{/* Design ligne bleu */}
  <img
    src="/decorations/vagueLumineuse.png"
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
    pointer-events-none
  "
  />

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 text-2xl text-blue-400 sm:h-16 sm:w-16 sm:text-3xl">
                💬
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Un projet en tête ?
                </h2>

                <p className="mt-1 text-slate-300">
                  Discutons-en simplement.
                </p>
              </div>



            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#0D5BFF] px-8 py-4 font-semibold text-white transition hover:bg-blue-700 md:min-w-[180px]"
            >
              Me contacter →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}