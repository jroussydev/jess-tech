import GlobalFaq from "../faq/GlobalFaq";
import { faqAssistance } from "../../data/faq";

export default function FaqAssistance() {
  return (
    <GlobalFaq
      variant="dark"
      title="Vos questions sur"
      highlight="l’assistance technique"
      description="Quelques réponses utiles avant de demander une intervention."
      items={faqAssistance}
    />
  );
}