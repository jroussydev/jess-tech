import ServicesHero from "../../components/services/ServicesHero";
import ServicesChoisir from "../../components/services/ServicesChoisir";
import ServicesListe from "../../components/services/ServicesListe";
import ServicesDeroulementProjet from "../../components/services/ServicesDeroulementProjet";
import ServicesPourquoi from "../../components/services/ServicesPourquoi";
import ServicesCta from "../../components/services/ServicesCta";

export default function Services() {
    return (
    <main className="relative overflow-hidden">
      <ServicesHero />
      <ServicesChoisir />
      <ServicesListe />
      <ServicesDeroulementProjet />
      <ServicesPourquoi />
      <ServicesCta />
    </main>
  );
}