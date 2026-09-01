import {
  House,
  MapPin,
  MonitorSmartphone,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ModeInterventionAssistance() {
  return (
    <section className="section-light section-spacing">
      <div className="site-container">
        <div className="section-intro">
          <p className="section-label">Intervention</p>
          <h2>À distance ou à domicile ?</h2>

          <p>
            Le mode d’intervention dépend surtout de ce qu’il faut faire et
            de la nécessité, ou non, d’accéder physiquement au matériel.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="card-light">
            <MonitorSmartphone
              className="h-8 w-8 text-blue-500"
              aria-hidden="true"
            />

            <p className="section-label mt-5">À distance</p>
            <h3 className="mt-2">
              Lorsque le matériel n’a pas besoin d’être manipulé
            </h3>

            <p className="mt-4">
              Certaines configurations, certains dépannages ou un
              accompagnement dans l’utilisation d’un logiciel peuvent être
              réalisés à distance.
            </p>
          </article>

          <article className="card-light">
            <House
              className="h-8 w-8 text-blue-500"
              aria-hidden="true"
            />

            <p className="section-label mt-5">À domicile</p>
            <h3 className="mt-2">
              Lorsque l’intervention nécessite d’être sur place
            </h3>

            <p className="mt-4">
              L’installation d’un ordinateur, d’une imprimante ou certaines
              interventions sur le réseau peuvent nécessiter une intervention
              directement à votre domicile.
            </p>
          </article>
        </div>

        <div className="mt-8 flex items-start gap-3">
          <MapPin
            className="mt-1 h-5 w-5 shrink-0 text-blue-500"
            aria-hidden="true"
          />

          <p>
            Les interventions à domicile dépendent de votre localisation et
            de la nature de la demande.{" "}
            <Link
              to="/localisation"
              className="font-semibold text-blue-500 hover:underline"
            >
              Consulter la zone d’intervention
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}