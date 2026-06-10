import { Link } from "react-router-dom"

export default function ContactCTA() {
  return (
    <section className="bg-white px-6 pb-20">
      <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-r from-[#081120] to-[#0b1d35] px-8 py-8 text-white">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/30 text-3xl text-blue-400">
              💬
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Un projet en tête ?
              </h2>

              <p className="text-slate-300">
                Discutons-en simplement.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex rounded-xl bg-[#0D5BFF] px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Me contacter →
          </Link>
        </div>
      </div>
    </section>
  )
}