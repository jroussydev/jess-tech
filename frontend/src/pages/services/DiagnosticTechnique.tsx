import { FaqDiagnostic, HeroDiagnostic, ParcoursDiagnostic, PreparationDiagnostic, ProblemesDiagnostic, ResultatDiagnostic, TarifDiagnostic } from "../../components/diagnostic";
import GlobalCTA from "../../components/GlobalCTA";
import { createMeta } from "../../seo/createMeta";


export function meta() {
  return createMeta({
    title: "Diagnostic technique de site internet | Jess Tech",
    description:
      "Erreur, problème d'affichage ou formulaire en panne : un diagnostic pour comprendre ce qui ne va pas sur votre site avant d'intervenir.",
    path: "/services/diagnostic-technique",
  });
}

export default function DiagnosticTechnique() {
  return (
    <>
      <HeroDiagnostic />
      <ProblemesDiagnostic />
      <PreparationDiagnostic />
      <ParcoursDiagnostic />
      <ResultatDiagnostic />
      <TarifDiagnostic />
      <FaqDiagnostic />

      <GlobalCTA variant="services" />
    </>
  );
}