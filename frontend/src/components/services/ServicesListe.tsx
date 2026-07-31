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
      prix: "À partir de 490 €",
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
      link: "/RefonteSiteInternet",
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
      prix: "À partir de 499 €",
      link: "/DeveloppementWebSurMesure",
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
      prix: "À partir de 49 €",
      link: "/AssistanceTechnique",
      icon: LifeBuoy,
    },
  ];

  return (
    <section className="section-dark section-spacing">
      <div className="site-container">
        <div className="section-intro max-w-3xl">
          <p className="section-label">Les prestations Jess Tech</p>

          <h2>Des services adaptés à chaque étape de votre projet</h2>

          <p>
            Chaque catégorie regroupe plusieurs prestations. Vous pouvez ainsi
            choisir un accompagnement complet ou demander une intervention
            ponctuelle selon votre situation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServicesCarte key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}