import {
  AboutHero,
  AboutValues,
  AboutStory,
  AboutWorkflow,
  AboutTechnologies,
} from "../../components/about";
import GlobalCTA from "../../components/GlobalCTA";

const About = () => {
  return (
    <>
      <AboutHero />
      <AboutValues />
      <AboutStory />
      <AboutWorkflow />
      <AboutTechnologies />
      <GlobalCTA variant="about" />
    </>
  );
};

export default About;