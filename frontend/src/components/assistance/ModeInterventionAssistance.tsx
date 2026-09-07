import {
  House,
  MapPin,
  MonitorSmartphone,
} from "lucide-react";
import { Link } from "react-router-dom";

const modes = [
  {
    label: "À distance",
    title: "Quand je peux vous aider sans me déplacer",
    description:
      "Pour certains réglages, dépannages ou besoins d’accompagnement, l’intervention peut être réalisée directement à distance.",
    price: "25 € / heure",
    icon: MonitorSmartphone,
  },
  {
    label: "À domicile",
    title: "Quand il faut intervenir directement sur place",
    description:
      "Pour une installation, un équipement à manipuler ou un problème qui nécessite d’être devant le matériel, je peux me déplacer selon votre localisation.",
    price: "25 € / heure",
    icon: House,
  },
];

export default function ModeInterventionAssistance() {
  return (
    <section
      className="
        section-dark
        section-fade-dark-soft
        section-spacing
      "
    >
      <div className="site-container">

        {/* Introduction */}

        <div className="section-intro max-w-3xl">
          <p className="section-label">
            Mode d’intervention
          </p>

          <h2>
            À distance ou{" "}
            <span className="text-gradient-blue">
              à domicile
            </span>
            {" "}?
          </h2>

          <p>
            Cela dépend surtout de ce qu’il faut faire.
            Certaines demandes peuvent être réglées à distance,
            tandis que d’autres nécessitent simplement d’être sur place.
          </p>
        </div>

        {/* Modes */}

        <div
          className="
            mt-10
            grid
            gap-8
            lg:grid-cols-2
            lg:gap-0
          "
        >
          {modes.map(
            ({ label, title, description, price, icon: Icon }, index) => (
              <article
                key={title}
                className={`
                  group
                  min-w-0
                  ${
                    index === 0
                      ? "lg:border-r lg:border-blue-500/20 lg:pr-10"
                      : "lg:pl-10"
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className="
                      h-8
                      w-8
                      shrink-0
                      text-blue-400
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                    aria-hidden="true"
                  />

                  <p className="section-label !m-0">
                    {label}
                  </p>
                </div>

                <h3 className="mt-4 text-white">
                  {title}
                </h3>

                <p className="!mt-3 text-slate-300">
                  {description}
                </p>

                <p className="!mt-5 font-bold !text-white">
                  {price}
                </p>
              </article>
            ),
          )}
        </div>

        {/* Zone d’intervention */}

        <div className="mx-auto mt-12 flex max-w-3xl items-start gap-3">
          <MapPin
            className="mt-1 h-5 w-5 shrink-0 text-blue-400"
            aria-hidden="true"
          />

          <p className="!m-0 text-slate-300">
            Les interventions à domicile dépendent de votre localisation
            et de la nature de la demande.{" "}
            <Link
              to="/localisation"
              className="font-semibold text-blue-400 hover:underline"
            >
              Voir la zone d’intervention
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
}