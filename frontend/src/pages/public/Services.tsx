import ServicesHero from "../../components/services/ServicesHero";
import ServicesChoisir from "../../components/services/ServicesChoisir";
import ServicesListe from "../../components/services/ServicesListe";
import ServicesDeroulementProjet from "../../components/services/ServicesDeroulementProjet";
import ServicesPourquoi from "../../components/services/ServicesPourquoi";
import GlobalCTA from "../../components/GlobalCTA";

import { createMeta } from "../../seo/createMeta";

export function meta() {
  return createMeta({
    title: "Services web : création, refonte et maintenance | Jess Tech",
    description:
      "Création de site internet, refonte, maintenance, développement sur mesure et assistance technique : des solutions web adaptées à chaque projet.",
    path: "/services",
  });
}

export default function Services() {
    return (
    <main className="relative overflow-hidden">
      <ServicesHero />
      <ServicesChoisir />
      <ServicesListe />
      <ServicesDeroulementProjet />
      <ServicesPourquoi />
      <GlobalCTA variant="services" />
    </main>
  );
}