import GlobalFaq from "../faq/GlobalFaq";
import { faqRefonte } from "../../data/faq";

export default function FaqRefonte() {
  return (
    <GlobalFaq
      variant="light"
      title="Vos questions sur la"
      highlight="refonte"
      description="Retrouvez les réponses aux principales questions avant de faire évoluer votre site existant."
      items={faqRefonte}
    />
  );
}