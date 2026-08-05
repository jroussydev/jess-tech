import {
  Activity,
  ArrowRight,
  CodeXml,
  LifeBuoy,
  Monitor,
  RefreshCw,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

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
    link: "/RefonteSiteInternet",
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
      className="section-light section-spacing scroll-mt-20"
    >
      <div className="site-container">
        {/* Introduction */}
        <div className="section-intro max-w-3xl">
          <p className="section-label">Trouver la bonne solution</p>

          <h2>Quel est votre besoin ?</h2>

          <p>
            Vous n’avez pas besoin de connaître le nom exact de la prestation.
            Choisissez simplement la situation qui se rapproche le plus de
            votre projet.
          </p>
        </div>

        {/* Services */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
                  card-dark
                  card-compact
                  group
                  relative
                  block
                  h-full
                  min-h-[210px]
                  min-w-0
                  overflow-visible
                  hover:z-50
                "
              >
                {/* Image décorative au survol */}
                <img
                  src={image}
                  alt=""
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    right-[4%]
                    top-1/2
                    z-50
                    hidden
                    h-[105%]
                    w-[52%]
                    -translate-y-1/2
                    rounded-xl
                    object-cover
                    opacity-0
                    shadow-2xl
                    shadow-blue-950/50
                    transition-all
                    duration-700
                    ease-out
                    group-hover:right-[-12%]
                    group-hover:translate-x-4
                    group-hover:opacity-100
                    xl:block
                  "
                  style={{
                    maskImage:
                      "linear-gradient(to right, transparent 0%, black 32%, black 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to right, transparent 0%, black 32%, black 100%)",
                  }}
                />

                <div className="relative z-30 flex h-full flex-col">
                  {/* Nom de la prestation */}
                  <span className="text-lg font-semibold leading-6 text-blue-500">
                    {service}
                  </span>

                  {/* Icône et besoin */}
                  <div className="mt-3 flex items-start gap-4">
                    <Icon
                      className="
                        mt-1
                        h-8
                        w-8
                        shrink-0
                        text-blue-500
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                      aria-hidden="true"
                    />

                    <h3 className="text-xl leading-snug">{title}</h3>
                  </div>

                  {/* Description */}
                  <p className="mt-3 max-w-[88%] text-base leading-7">
                    {description}
                  </p>

                  {/* Séparateur et flèche */}
                  <div className="mt-auto flex items-end justify-between pt-4">
                    <div
                      className="h-px flex-1 bg-gradient-to-r from-blue-500/40 to-transparent"
                      aria-hidden="true"
                    />

                    <ArrowRight
                      className="
                        ml-4
                        h-5
                        w-5
                        shrink-0
                        text-blue-500
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                      aria-hidden="true"
                    />
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