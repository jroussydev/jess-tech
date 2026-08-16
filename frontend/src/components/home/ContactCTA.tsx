import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="section-light rounded-b-2xl pb-16 pt-20 md:pb-20 lg:pb-24">
      <div className="site-container max-w-[1200px]">
        <div
          className="
            card-glow
            relative
            overflow-hidden
            rounded-3xl
            bg-gradient-to-r
            from-[#081120]
            to-[#0b1d35]
            p-6
            sm:p-8
          "
        >
          {/* Décoration */}
<img
  src="/decorations/vagues/02.png"
  alt=""
  aria-hidden="true"
  className="
    pointer-events-none
    absolute
    -bottom-7
    left-75
    w-64
    -translate-x-1/2
    opacity-60

    sm:-bottom-6
    sm:w-52

    md:-bottom-10
    md:w-64

    lg:-bottom-1/2
    lg:left-[65%]
    lg:w-80
    lg:opacity-80
  "
/>

          <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            {/* Introduction */}
            <div className="flex items-center gap-5">
              <div
  className="
    flex
    h-16
    w-16
    shrink-0
    items-center
    justify-center
    sm:h-20
    sm:w-20
  "
>
  <img
    src="/decorations/bulle-de-message.png"
    alt=""
    aria-hidden="true"
    className="h-full w-full object-contain"
  />
</div>

              <div>
                <h2 className="text-slate-200">
                  Un projet en tête ?
                </h2>

                <p className="mt-1 text-slate-300">
                  Discutons-en simplement.
                </p>
              </div>
            </div>

            {/* Action */}
            <Link
              to="/contact"
              className="btn-primary w-full sm:w-auto md:min-w-[180px]"
            >
              Me contacter →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}