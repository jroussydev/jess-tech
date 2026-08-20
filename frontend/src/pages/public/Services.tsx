import ServicesHero from "../../components/services/ServicesHero";
import ServicesChoisir from "../../components/services/ServicesChoisir";
import ServicesListe from "../../components/services/ServicesListe";
import ServicesDeroulementProjet from "../../components/services/ServicesDeroulementProjet";
import ServicesPourquoi from "../../components/services/ServicesPourquoi";
import GlobalCTA from "../../components/GlobalCTA";

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