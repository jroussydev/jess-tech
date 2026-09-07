import {
  FileSearch,
  Search,
  Wrench,
  Check,
} from "lucide-react";

export default function TarifDiagnostic() {
  return (
    <section
      className="
        section-light
        section-fade-light-soft
        section-spacing
      "
    >
      <div className="site-container">

        {/* Introduction */}

        <div className="section-intro max-w-3xl">
          <p className="section-label">
            Le tarif
          </p>

          <h2>
            Le diagnostic technique à partir de{" "}
            <span className="text-gradient-blue">
              99 €
            </span>
          </h2>

          <p>
            Le diagnostic sert à comprendre ce qui se passe sur votre site
            avant de prévoir une éventuelle correction.
          </p>
        </div>

        {/* Tarif */}

        <div
          className="
            mt-10
            grid
            gap-10
            lg:grid-cols-[320px_1fr]
            lg:items-start
            lg:gap-14
          "
        >
          {/* Bloc prix */}

          <div className="card-dark card-glow !p-6">
            <div className="flex items-center gap-3">
              <FileSearch
                className="h-7 w-7 text-blue-400"
                aria-hidden="true"
              />

              <span className="badge badge-primary">
                Diagnostic technique
              </span>
            </div>

            <p className="!mt-5 text-3xl font-bold !text-white sm:text-4xl">
              À partir de 99 €
            </p>

            <p className="!mt-4 text-slate-300">
              Le périmètre est défini selon le problème rencontré et les
              vérifications nécessaires.
            </p>
          </div>

          {/* Ce que comprend le diagnostic */}

          <div>
            <p className="section-label !mt-0">
              Ce qui est compris
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                "Examen du problème rencontré",
                "Vérifications des éléments concernés",
                "Recherche de l’origine ou des pistes possibles",
                "Retour sur les suites envisageables",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <Check
                    className="mt-1 h-5 w-5 shrink-0 text-blue-500"
                    aria-hidden="true"
                  />

                  <span className="font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Diagnostic / Correction */}

        <div className="mt-14 border-t border-slate-200 pt-10">
          <div className="grid gap-10 md:grid-cols-2">

            {/* Diagnostic */}

            <div className="flex gap-4">
              <Search
                className="mt-1 h-7 w-7 shrink-0 text-blue-500"
                aria-hidden="true"
              />

              <div>
                <h3 className="!m-0 text-slate-950">
                  Le diagnostic
                </h3>

                <p className="mt-3">
                  Il sert à comprendre le problème et à savoir ce qu’il faut
                  faire ensuite.
                </p>
              </div>
            </div>

            {/* Correction */}

            <div className="flex gap-4">
              <Wrench
                className="mt-1 h-7 w-7 shrink-0 text-blue-500"
                aria-hidden="true"
              />

              <div>
                <h3 className="!m-0 text-slate-950">
                  La correction
                </h3>

                <p className="mt-3">
                  Si une intervention est nécessaire, elle est étudiée
                  séparément une fois le diagnostic terminé.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Précision */}

        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="!m-0">
            <strong>
              Le diagnostic ne vous engage pas à faire réaliser la correction.
            </strong>
            <br />
            Il permet d’abord de savoir clairement ce qu’il se passe.
          </p>
        </div>

      </div>
    </section>
  );
}