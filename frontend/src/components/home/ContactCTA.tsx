import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="section-light pb-16 pt-20 md:pb-20 lg:pb-24">
      <div className="site-container max-w-[1200px]">
        {/* Wrapper extérieur : autorise la vague mobile à dépasser */}
        <div className="relative">

          {/* Vague mobile qui peut sortir du CTA */}
          <img
            src="/decorations/vagues/06.png"
            alt=""
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-3
              -left-7
              z-20
              h-40
              w-45
              scale-x-[-1]
              sm:hidden
              opacity-80
            "
          />

          {/* CTA */}
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
            {/* Vague tablette / desktop */}
            <img
              src="/decorations/vagues/02.png"
              alt=""
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-7
                left-75
                hidden
                w-64
                -translate-x-1/2
                opacity-60

                sm:-bottom-6
                sm:w-52

                md:block
                md:-bottom-10
                md:w-64

                lg:-bottom-1/2
                lg:left-[45%]
                lg:w-80
                lg:opacity-80
              "
            />

            <div className="relative z-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-8">
              {/* Introduction */}
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center sm:h-20 sm:w-20">
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
  className="
    group
    relative
    ml-auto
    block
    h-14
    w-56
    shrink-0

    md:ml-0
    md:h-20
    md:w-55
  "
>
  {/* Dessin enveloppe */}
  <img
    src="/decorations/message-envoyer.png"
    alt=""
    aria-hidden="true"
    className="
      pointer-events-none
      absolute
      bottom-0
      right-0
      h-14
      w-52
      object-contain

      md:left-0
      md:right-auto
      md:h-15
      md:w-55
    "
  />

  {/* Texte */}
  <span
    className="
      btn-cta
      absolute
      right-18
      top-0
      z-20
      whitespace-nowrap

      md:left-0
      md:right-auto
      md:top-4
    "
  >
    Me contacter
  </span>
</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}