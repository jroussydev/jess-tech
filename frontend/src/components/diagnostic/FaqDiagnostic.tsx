import GlobalFaq from "../faq/GlobalFaq";
import { faqDiagnostic } from "../../data/faq";

export default function FaqDiagnostic() {
  return (
    <GlobalFaq
      variant="dark"
      title="Vos questions sur le"
      highlight="diagnostic technique"
      description="Quelques réponses utiles avant de faire examiner un problème sur votre site."
      items={faqDiagnostic}
    />
  );
}