import { Search, Wrench } from "lucide-react";

export default function DiagnosticVsCorrection() {
  return (
    <section className="section-light section-spacing">
      <div className="site-container">
        <div className="section-intro">
          <p className="section-label">Deux étapes différentes</p>

          <h2>Diagnostiquer ne signifie pas corriger automatiquement</h2>

          <p>
            Trouver l’origine d’un problème permet de savoir ce qu’il faut
            réellement prévoir pour le résoudre.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="card-light">
            <Search
              className="h-8 w-8 text-blue-500"
              aria-hidden="true"
            />

            <p className="section-label mt-5">Diagnostic</p>
            <h3 className="mt-2">Comprendre ce qui se passe</h3>

            <p className="mt-4">
              Examiner le problème, effectuer les vérifications nécessaires et
              identifier les éléments susceptibles d’en être à l’origine.
            </p>
          </article>

          <article className="card-light">
            <Wrench
              className="h-8 w-8 text-blue-500"
              aria-hidden="true"
            />

            <p className="section-label mt-5">Correction</p>
            <h3 className="mt-2">Intervenir sur le problème identifié</h3>

            <p className="mt-4">
              Une fois la situation comprise, une intervention peut être
              réalisée pour corriger le problème lorsque cela est possible.
            </p>
          </article>
        </div>

        <p className="mt-8 max-w-4xl">
          Lorsque la correction peut être réalisée par Jess Tech, elle peut
          faire l’objet d’une intervention distincte. Le diagnostic permet
          d’en déterminer le périmètre avant de l’engager.
        </p>
      </div>
    </section>
  );
}