import { FileSearch, Check, Search, Wrench } from "lucide-react";

export default function TarifDiagnostic() {
  return (
    <section className="section-dark section-spacing">
      <div className="site-container">

{/* Diagnostic / Correction */}
<div>
  <p className="section-label">Le tarif</p>

  <div className="mt-6 grid gap-8 md:grid-cols-2">
    <div className="flex gap-4 pr-8">
      <Search
        className="mt-1 h-7 w-7 shrink-0 text-blue-400"
        aria-hidden="true"
      />

      <div>
        <h2 className="text-2xl">Le diagnostic</h2>

        <p className="mt-3">
          Il sert à examiner la situation, rechercher l’origine du
          problème et déterminer les suites possibles.
        </p>
      </div>
    </div>

    <div className="flex gap-4 pl-5">
      <Wrench
        className="mt-1 h-7 w-7 shrink-0 text-blue-400"
        aria-hidden="true"
      />

      <div>
        <h2 className="text-2xl">La correction</h2>

        <p className="mt-3">
          Si une intervention est nécessaire pour résoudre le problème,
          elle est étudiée séparément une fois le diagnostic réalisé.
        </p>
      </div>
    </div>
  </div>
</div>

        {/* Tarif */}
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="card-dark card-glow">
            <div className="flex items-start gap-4">
              <FileSearch
                className="mt-1 h-8 w-8 shrink-0 text-blue-400"
                aria-hidden="true"
              />

              <div>
                <p className="section-label">Audit technique</p>

                <h2 className="mt-2 text-2xl">
                  Examiner le problème avant de décider de l’intervention
                </h2>
              </div>
            </div>

            <p className="mt-5">
              L’audit technique permet d’examiner un site ou un problème
              technique afin d’identifier les points relevés et les
              interventions qui peuvent être envisagées.
            </p>

            <p className="mt-6 text-3xl font-bold text-white">
              À partir de 99 €
            </p>

            <div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {[
                "Examen de la situation",
                "Recherche des éléments concernés",
                "Identification des points relevés",
                "Détermination des suites envisageables",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <Check
                    className="mt-1 h-5 w-5 shrink-0 text-blue-400"
                    aria-hidden="true"
                  />

                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 border-t border-white/10 pt-5 text-sm text-white/65">
              Le périmètre de l’analyse dépend du problème rencontré et de
              l’environnement du site. La prestation est définie avant
              intervention.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}