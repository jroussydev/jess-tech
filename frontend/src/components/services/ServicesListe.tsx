import {
  Activity,
  CodeXml,
  LifeBuoy,
  Monitor,
  RefreshCw,
  Wrench,
} from "lucide-react";

import ServicesCarte from "./ServicesCarte";

export default function ServicesListe() {
  const services = [
    {
      title: "Création de site internet",
      description:
        "Création de sites vitrines clairs et adaptés à votre activité, du site One Page au projet personnalisé.",
      prestations: [
        "Site One Page ou multi-pages",
        "Affichage responsive",
        "Formulaires de contact",
        "Référencement technique de base",
      ],
      prix: "À partir de 299 €",
      link: "/CreationSiteInternet",
      icon: Monitor,
    },
    {
      title: "Refonte de site internet",
      description:
        "Modernisation d’un site existant pour améliorer son apparence, sa structure, son fonctionnement et son adaptation aux usages actuels.",
      prestations: [
        "Modernisation visuelle",
        "Réorganisation des contenus",
        "Amélioration mobile",
        "Migration ou optimisation technique",
      ],
      prix: "Sur devis",
      link: "/RefonteSite",
      icon: RefreshCw,
    },
    {
      title: "Développement web sur mesure",
      description:
        "Création de sites, applications et fonctionnalités adaptées à des besoins qui dépassent le cadre d’un site vitrine classique.",
      prestations: [
        "Site React sur mesure",
        "Application web",
        "Espace privé ou portail client",
        "Outil métier, intranet ou extranet",
      ],
      prix: "À partir de 749 €",
      link: "/DeveloppementSurMesure",
      icon: CodeXml,
    },
    {
      title: "Maintenance de site web",
      description:
        "Suivi régulier ou intervention ponctuelle pour préserver le bon fonctionnement, la sécurité et les performances de votre site.",
      prestations: [
        "Mises à jour techniques",
        "Sauvegardes et surveillance",
        "Corrections de bugs",
        "Restauration après incident",
      ],
      prix: "À partir de 49 €/mois",
      link: "/MaintenanceSiteWeb",
      icon: Wrench,
    },
    {
      title: "Diagnostic technique",
      description:
        "Analyse d’un site ou d’un dysfonctionnement afin d’identifier son origine avant d’engager une correction ou une évolution.",
      prestations: [
        "Analyse des erreurs",
        "Contrôle de l’hébergement et du domaine",
        "Vérification sécurité et performances",
        "Rapport et recommandations",
      ],
      prix: "À partir de 99 €",
      link: "/DiagnosticTechnique",
      icon: Activity,
    },
    {
      title: "Assistance technique",
      description:
        "Accompagnement ponctuel pour installer, configurer, comprendre ou débloquer un outil lié à votre activité.",
      prestations: [
        "Assistance à distance ou à domicile",
        "Nom de domaine et hébergement",
        "Messagerie professionnelle",
        "Configuration et prise en main",
      ],
      prix: "À partir de 25 €",
      link: "/AssistanceTechnique",
      icon: LifeBuoy,
    },
  ];

  return (
    <section className="section-dark section-fade-dark-soft section-spacing mb-15">
  <div className="site-container relative z-10">
    <div className="section-intro max-w-3xl">
      <p className="section-label">Les prestations Jess Tech</p>

      <h2>
        Des services adaptés à chaque étape de votre{" "}
        <span className="text-gradient-blue">
          projet
        </span>
      </h2>

      <p>
        Chaque catégorie regroupe plusieurs prestations. Vous pouvez ainsi
        choisir un accompagnement complet ou demander une intervention
        ponctuelle selon votre situation.
      </p>
    </div>

    {/* Zone cartes + décorations */}
    <div className="relative mt-10">
      {/* Vague haut droite */}
      <img
        src="/decorations/vagues/15.png"
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-20
          -top-28
          z-0
          hidden
          h-auto
          w-72

          lg:block
          xl:-right-28
          xl:w-80
          2xl:-right-36
          2xl:w-96
        "
      />

      {/* Vague bas gauche */}
      <img
        src="/decorations/vagues/16.png"
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-28
          -left-20
          z-0
          hidden
          h-auto
          w-72

          lg:block
          xl:-left-28
          xl:w-80
          2xl:-left-36
          2xl:w-96
        "
      />

      {/* Cartes */}
      <div className="relative z-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServicesCarte
            key={service.title}
            {...service}
          />
        ))}
      </div>
    </div>
  </div>
</section>
  );
}