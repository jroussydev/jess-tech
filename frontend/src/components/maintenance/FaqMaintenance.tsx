import GlobalFaq from "../faq/GlobalFaq";
import { faqMaintenance } from "../../data/faq";

export default function FaqMaintenance() {
  return (
    <GlobalFaq
      variant="dark"
      title="Vos questions sur la"
      highlight="maintenance"
      description="Retrouvez les réponses aux principales questions avant de confier le suivi de votre site à Jess Tech."
      items={faqMaintenance}
    />
  );
}