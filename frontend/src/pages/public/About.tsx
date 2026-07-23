import {
  AboutHero,
  AboutValues,
  AboutStory,
  AboutWorkflow,
  AboutTechnologies,
} from "../../components/about";
import ContactCTA from "../../components/home/ContactCTA";

const About = () => {
  return (
    <>
      <AboutHero />
      <AboutValues />
      <AboutStory />
      <AboutWorkflow />
      <AboutTechnologies />
      <ContactCTA />
    </>
  );
};

export default About;