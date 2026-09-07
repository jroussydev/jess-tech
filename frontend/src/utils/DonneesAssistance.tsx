import {
  DatabaseBackup,
  HardDrive,
  ShieldCheck,
} from "lucide-react";

export default function DonneesAssistance() {
  return (
    <section className="section-light section-spacing">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="section-label">Vos fichiers</p>

            <h2>Avant une intervention sur vos données</h2>

            <p className="mt-5">
              Certaines opérations peuvent concerner vos documents, photos ou
              autres fichiers personnels et professionnels. Lorsque l’état du
              matériel le permet, disposer d’une sauvegarde des données
              importantes reste préférable avant une intervention susceptible
              de les affecter.
            </p>
          </div>

          <div className="space-y-5">
            <article className="flex gap-4">
              <DatabaseBackup
                className="mt-1 h-7 w-7 shrink-0 text-blue-500"
                aria-hidden="true"
              />

              <div>
                <h3>Sauvegarder lorsque c’est possible</h3>
                <p className="mt-2">
                  Une copie des fichiers importants permet de disposer d’un
                  point de sécurité avant certaines opérations.
                </p>
              </div>
            </article>

            <article className="flex gap-4">
              <HardDrive
                className="mt-1 h-7 w-7 shrink-0 text-blue-500"
                aria-hidden="true"
              />

              <div>
                <h3>La récupération dépend du support</h3>
                <p className="mt-2">
                  Lorsqu’un fichier n’est plus accessible, les possibilités de
                  récupération dépendent notamment de l’état du matériel et de
                  la situation rencontrée.
                </p>
              </div>
            </article>

            <article className="flex gap-4">
              <ShieldCheck
                className="mt-1 h-7 w-7 shrink-0 text-blue-500"
                aria-hidden="true"
              />

              <div>
                <h3>Pas de promesse de récupération</h3>
                <p className="mt-2">
                  Une intervention peut rechercher les possibilités de
                  récupération, mais le résultat ne peut pas être garanti à
                  l’avance.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}