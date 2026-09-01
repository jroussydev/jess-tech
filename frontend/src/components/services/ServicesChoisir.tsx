import {
  Activity,
  CodeXml,
  LifeBuoy,
  Monitor,
  RefreshCw,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import { Link } from "react-router-dom";
import AnimatedCardBorder from "../decorations/AnimatedCardBorder";

type Besoin = {
  title: string;
  description: string;
  service: string;
  image: string;
  link: string;
  icon: LucideIcon;
};

const besoins: Besoin[] = [
  {
    title: "Je n’ai pas encore de site internet.",
    description:
      "Créer un site clair et professionnel pour présenter mon activité et être visible en ligne.",
    service: "Création de site internet",
    image: "/services/creation-de-site.png",
    link: "/CreationSiteInternet",
    icon: Monitor,
  },
  {
    title: "Mon site existe déjà, mais ne me convient plus.",
    description:
      "Moderniser son apparence, améliorer sa structure ou l’adapter aux usages actuels.",
    service: "Refonte de site internet",
    image: "/services/refonte-de-site.png",
    link: "/RefonteSite",
    icon: RefreshCw,
  },
  {
    title: "J’ai besoin d’une fonctionnalité particulière.",
    description:
      "Développer une application, un espace utilisateur ou un outil adapté à mon projet.",
    service: "Développement web sur mesure",
    image: "/services/developpement-sur-mesure.png",
    link: "/DeveloppementWebSurMesure",
    icon: CodeXml,
  },
  {
    title: "Je souhaite confier le suivi de mon site.",
    description:
      "Assurer les mises à jour, les sauvegardes, les corrections et son bon fonctionnement.",
    service: "Maintenance de site web",
    image: "/services/maintenance-de-site.png",
    link: "/MaintenanceSiteWeb",
    icon: Wrench,
  },
  {
    title: "Mon site rencontre un problème.",
    description:
      "Identifier l’origine d’un dysfonctionnement avant de choisir la solution adaptée.",
    service: "Diagnostic technique",
    image: "/services/diagnostic-technique.png",
    link: "/DiagnosticTechnique",
    icon: Activity,
  },
  {
    title: "J’ai besoin d’un accompagnement ponctuel.",
    description:
      "Être aidé pour comprendre, configurer ou débloquer un outil lié à mon activité.",
    service: "Assistance technique",
    image: "/services/assistance-technique.png",
    link: "/AssistanceTechnique",
    icon: LifeBuoy,
  },
];

export default function ServicesChoisir() {
  return (
    <section
      id="choisir-service"
      className="section-light section-fade-hero section-spacing scroll-mt-20"
    >
      <div className="site-container">
        {/* Introduction */}
        <div className="section-intro max-w-3xl">
          <p className="section-label">
            Trouver la bonne solution
          </p>

          <h2>
            Quel est votre{" "}
            <span className="text-gradient-blue">
              besoin
            </span>{" "}
            ?
          </h2>

          <p>
            Vous n’avez pas besoin de connaître le nom exact de la prestation.
            Choisissez simplement la situation qui se rapproche le plus de
            votre projet.
          </p>
        </div>

        {/* Services */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
          {besoins.map(
            ({
              title,
              description,
              service,
              image,
              link,
              icon: Icon,
            }) => (
              <Link
  key={service}
  to={link}
  className="
    card-glow
    group
    relative
    block
    h-[230px]
    min-w-0
    overflow-hidden
    rounded-2xl
    md:h-[250px]
    lg:h-[260px]
  "
>
                <AnimatedCardBorder />

                {/* Image de fond */}
                <img
                  src={image}
                  alt=""
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />

                {/* Fondu sombre */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-b
                    from-[#020817]/20
                    via-[#020817]/55
                    to-[#020817]
                  "
                  aria-hidden="true"
                />

                {/* Contenu */}
                <div className="absolute inset-0 z-10 p-4 lg:p-5">
                  {/* Nom de la prestation en haut */}
                  <span
                    className="
                      block
                      rounded-full
                      bg-sky-600/60
                      backdrop-blur-sm
                      px-3
                      py-1
                      text-lg
                      font-semibold
                      text-slate-200
                    "
                  >
                    {service}
                  </span>

                  {/* Bloc ancré en bas */}
                  <div
                    className="
                      absolute
                      bottom-3
                      left-4
                      right-4
                      lg:left-5
                      lg:right-5
                    "
                  >
                    {/* Icône + titre */}
                    <div className="flex items-start gap-3">
                      <Icon
                        className="
                          mt-1
                          h-7
                          w-7
                          shrink-0
                          text-sky-500
                          transition-transform
                          duration-300
                          group-hover:scale-110
                        "
                        aria-hidden="true"
                      />

                      <h3 className="text-slate-200">
                        {title}
                      </h3>
                    </div>

                    {/* Description + flèche */}
                    <div className="mt-2 flex items-end gap-3">
                      <p className="min-w-0 flex-1 text-slate-300">
                        {description}
                      </p>

                      <img
                        src="/decorations/fleche.png"
                        alt=""
                        aria-hidden="true"
                        className="
                          h-9
                          w-20
                          shrink-0
                          object-contain
                          transition-transform
                          duration-300
                          group-hover:translate-x-2
                        "
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ),
          )}
        </div>
      </div>
    </section>
  );
}