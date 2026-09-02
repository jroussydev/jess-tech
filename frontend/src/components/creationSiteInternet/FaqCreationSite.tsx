import GlobalFaq from "../faq/GlobalFaq";
import { faqCreationSite } from "../../data/faq";

export default function FaqCreationSite() {
  return (
    <GlobalFaq
      title="Vos questions sur la"
      highlight="création de site"
      description="Retrouvez les réponses aux principales questions avant de démarrer votre projet."
      items={faqCreationSite}
    />
  );
}