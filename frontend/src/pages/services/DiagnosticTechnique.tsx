import { FaqDiagnostic, HeroDiagnostic, ParcoursDiagnostic, PreparationDiagnostic, ProblemesDiagnostic, ResultatDiagnostic, TarifDiagnostic } from "../../components/diagnostic";
import GlobalCTA from "../../components/GlobalCTA";


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