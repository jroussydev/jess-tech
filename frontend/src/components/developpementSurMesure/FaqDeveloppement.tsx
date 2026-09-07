import GlobalFaq from "../faq/GlobalFaq";
import { faqDeveloppement } from "../../data/faq";

export default function FaqDeveloppement() {
  return (
    <GlobalFaq
      variant="light"
      title="Vos questions sur le"
      highlight="développement sur mesure"
      description="Retrouvez les réponses aux principales questions avant de démarrer un projet sur mesure."
      items={faqDeveloppement}
    />
  );
}