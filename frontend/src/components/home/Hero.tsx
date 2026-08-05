import { Headset, MessageCircle, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const qualities = [
  {
    title: "À l’écoute",
    description: "Vos besoins compris et expliqués clairement.",
    icon: Headset,
  },
  {
    title: "Sérieuse & fiable",
    description: "Des solutions claires, durables et maintenables.",
    icon: Shield,
  },
  {
    title: "Transparente",
    description: "Une communication simple, sans jargon inutile.",
    icon: MessageCircle,
  },
];

export default function Hero() {
  return (
    <section className="section-dark section-spacing relative overflow-hidden">
      {/* Image décorative visible uniquement sur ordinateur */}
      <img
        src="/home/profil2.webp"
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -top-21
          left-[38%]
          hidden
          h-[1080px]
          w-auto
          max-w-none
          select-none
          lg:block
        "
      />

      <div className="site-container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="badge badge-primary px-4 py-2 text-xs uppercase tracking-wide sm:text-sm">
              Jess Tech
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-slate-100 sm:text-5xl lg:text-6xl">
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

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 sm:mt-8">
              Développeuse freelance, j&apos;accompagne particuliers, artisans,
              associations et petites entreprises dans la{" "}
              <Link
                to="/CreationSiteInternet"
                className="font-semibold text-blue-400 transition-colors duration-300 hover:text-blue-300"
              >
                création de sites web
              </Link>{" "}
              et leurs besoins techniques.
            </p>

            {/* Actions principales */}
            <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row">
              <Link
                to="/contact"
                className="btn-primary w-full sm:w-auto"
              >
                Demander un devis
              </Link>

              <Link
                to="/services"
                className="btn-secondary w-full sm:w-auto"
              >
                Découvrir mes services
              </Link>
            </div>

{/* Qualités mises en avant */}
            <div
  className="
    mt-10
    grid
    gap-x-6
    gap-y-6
    sm:mt-12
    md:grid-cols-3
    lg:grid-cols-[0.9fr_1.2fr_0.9fr]
  "
>
              {qualities.map(({ title, description, icon: Icon }) => (
                <article key={title} className="min-w-0">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/30 text-[#0D5BFF]">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>

                    <h2 className="whitespace-nowrap text-base font-semibold leading-snug text-white lg:text-lg">
                      {title}
                    </h2>
                  </div>

                  <p className="text-base leading-7 text-slate-400">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}