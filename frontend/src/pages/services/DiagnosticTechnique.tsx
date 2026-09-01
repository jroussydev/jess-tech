import { DiagnosticVsCorrection, ElementsDiagnostic, FaqDiagnostic, HeroDiagnostic, ParcoursDiagnostic, PreparationDiagnostic, ProblemesDiagnostic, ResultatDiagnostic, TarifDiagnostic } from "../../components/diagnostic";
import GlobalCTA from "../../components/GlobalCTA";


export default function DiagnosticTechnique() {
  return (
    <>
      <HeroDiagnostic />
      <ProblemesDiagnostic />
      <ParcoursDiagnostic />
      <ElementsDiagnostic />
      <TarifDiagnostic />
      <DiagnosticVsCorrection />
      <PreparationDiagnostic />
      <ResultatDiagnostic />
      <FaqDiagnostic />

      <GlobalCTA variant="services" />
    </>
  );
}