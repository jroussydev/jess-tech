import { Link } from "react-router-dom"

export default function ContactCTA() {
  return (
    <section className="bg-white px-6 pb-20">
      <div
        className="
          mx-auto
          max-w-7xl
          rounded-3xl
          border
          border-blue-500/15
          bg-gradient-to-r
          from-[#081120]
          to-[#0b1d35]
          p-8
        "
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          
          <div className="flex items-center gap-5">
            
            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                border
                border-blue-500/20
                text-3xl
                text-blue-400
              "
            >
              💬
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">
                Un projet en tête ?
              </h2>

              <p className="mt-1 text-slate-300">
                Discutons-en simplement.
              </p>
            </div>

          </div>

          <Link
            to="/contact"
            className="
              inline-flex
              items-center
              justify-center
              rounded-xl
              bg-[#0D5BFF]
              px-8
              py-4
              font-semibold
              text-white
              transition
              hover:bg-blue-700
            "
          >
            Me contacter →
          </Link>

        </div>
      </div>
    </section>
  )
}