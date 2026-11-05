import { type RouteConfig, index, route } from "@react-router/dev/routes"

export default [
  index("pages/public/Home.tsx"),

  route("services", "pages/public/Services.tsx"),
  route("services/creation-site-internet", "pages/services/CreationSiteInternet.tsx"),
  route("services/refonte-site", "pages/services/RefonteSite.tsx"),
  route("services/maintenance-site-web", "pages/services/MaintenanceSiteWeb.tsx"),
  route("services/developpement-sur-mesure", "pages/services/DeveloppementSurMesure.tsx"),
  route("services/assistance-technique", "pages/services/AssistanceTechnique.tsx"),
  route("services/diagnostic-technique", "pages/services/DiagnosticTechnique.tsx"),

  route("tarifs", "pages/public/TarifsTransparents.tsx"),
  route("realisations", "pages/public/Realisations.tsx"),
  route("a-propos", "pages/public/About.tsx"),
  route("dans-les-coulisses", "pages/public/DansLesCoulisses.tsx"),
  route("contact", "pages/public/Contact.tsx"),

  route("localisation", "pages/public/Localisation.tsx"),
  route("localisation/:ville", "pages/public/CityPage.tsx"),

  route("mentions-legales", "pages/legal/MentionLegal.tsx"),
  route("politique-de-confidentialite", "pages/legal/PolitiqueDeConfidentialite.tsx"),
  route("cgv", "pages/legal/Cgv.tsx"),

  route("*", "pages/public/NotFound.tsx"),
] satisfies RouteConfig