import {
  Activity,
  CodeXml,
  LifeBuoy,
  Monitor,
  RefreshCw,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicesChoisir() {
  const besoins = [
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

  return (
    <section
      id="choisir-service"
      className="section-light section-spacing scroll-mt-20"
    >
      <div className="site-container">
        <div className="section-intro max-w-3xl">
          <p className="section-label">Trouver la bonne solution</p>

          <h2>Quel est votre besoin ?</h2>

          <p>
            Vous n’avez pas besoin de connaître le nom exact de la prestation.
            Choisissez simplement la situation qui se rapproche le plus de
            votre projet.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {besoins.map(({ title, description, service, image, link, icon: Icon }) => (
            <Link
  key={service}
  to={link}
  className="
    group
    relative
    rounded-2xl
    transition
    duration-300
    hover:z-50
    focus-visible:ring-2
    focus-visible:ring-blue-400
  "
>
  <article className="card-dark relative h-full overflow-visible">
    {/* Image qui sort de la carte */}
    <img
      src={image}
      alt=""
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        right-[5%]
        top-1/2
        z-50
        hidden
        h-[115%]
        w-[46%]
        -translate-y-1/2
        translate-x-0
        rounded-xl
        object-cover
        opacity-0
        shadow-2xl
        shadow-blue-950/50
        transition-all
        duration-700
        ease-out
        group-hover:right-[-18%]
        group-hover:translate-x-6
        group-hover:opacity-500
        lg:block
      "
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 30%, black 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 30%, black 100%)",
      }}
    />

    {/* Contenu */}
    <div className="relative z-30 flex h-full items-center gap-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center">
        <Icon
          className="
            h-10
            w-10
            text-blue-500
            transition-transform
            duration-300
            group-hover:scale-110
            
          "
          aria-hidden="true"
        />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-xl font-semibold !text-blue-500">
          {service}
        </p>

        <h3 className="mt-2 !text-2xl">
          {title}
        </h3>

        <p className="max-w-[80%]">
          {description}
        </p>

        <div
          className="
            mt-6
            h-px
            rounded-full
            bg-gradient-to-r
            from-blue-500/50
            to-transparent
          "
          aria-hidden="true"
        />
      </div>

      <ArrowRight
  className="
    relative
    z-30
    h-7
    w-7
    shrink-0
    text-blue-500
    transition-all
    duration-300
    group-hover:translate-x-3
    group-hover:opacity-0
  "
  aria-hidden="true"
/>
    </div>
  </article>
</Link>
          ))}
        </div>
      </div>
    </section>
  );
}