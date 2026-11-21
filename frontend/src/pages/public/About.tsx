import {
  AboutHero,
  AboutValues,
  AboutStory,
  AboutWorkflow,
  AboutTechnologies,
} from "../../components/about";
import GlobalCTA from "../../components/GlobalCTA";
import { createMeta } from "../../seo/createMeta";
import AvecVague from "../../components/decorations/AvecVague";

export function meta() {
  return createMeta({
    title: "À propos de Jessica Roussy, développeuse web | Jess Tech",
    description:
      "Développeuse web freelance basée dans l'Aisne, j'ai créé Jess Tech pour proposer des solutions web claires, accessibles et adaptées à chaque projet.",
    path: "/a-propos",
  });
}

const About = () => {
  return (
    <>
      <AboutHero />
      <AboutValues />
      <AvecVague cote="droite">
        <AboutStory />
      </AvecVague>
      <AvecVague cote="gauche">
        <AboutWorkflow />
      </AvecVague>
      <AvecVague cote="droite">
        <AboutTechnologies />
      </AvecVague>
      <AvecVague cote="gauche">
        <GlobalCTA variant="about" />
      </AvecVague>
    </>
  );
};

export default About;