import {
  CheckCircle2,
  FileText,
  MessageSquareText,
  Rocket,
  Search,
} from "lucide-react";

export default function ServicesDeroulementProjet() {
  const etapes = [
    {
      numero: "01",
      titre: "Premier échange",
      description:
        "Vous m’expliquez votre besoin, votre situation et les objectifs de votre projet.",
      icon: MessageSquareText,
    },
    {
      numero: "02",
      titre: "Analyse du besoin",
      description:
        "J’étudie les informations reçues afin d’identifier la solution la plus adaptée.",
      icon: Search,
    },
    {
      numero: "03",
      titre: "Proposition et devis",
      description:
        "Vous recevez une proposition claire avec les prestations prévues, le tarif et les délais.",
      icon: FileText,
    },
    {
      numero: "04",
      titre: "Réalisation",
      description:
        "Le projet est réalisé selon les éléments définis, avec des échanges aux étapes importantes.",
      icon: Rocket,
    },
    {
      numero: "05",
      titre: "Validation et suivi",
      description:
        "Le résultat est vérifié avec vous avant la livraison, puis je reste disponible si nécessaire.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="section-light section-spacing">
      <div className="site-container">
        <div className="section-intro max-w-3xl">
          <p className="section-label">Un accompagnement clair</p>

          <h2>Comment se déroule un projet ?</h2>

          <p>
            Chaque prestation possède ses particularités, mais l’organisation
            générale reste simple. Vous savez où en est votre projet et ce qui
            est prévu à chaque étape.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {etapes.map(({ numero, titre, description, icon: Icon }) => (
            <article
              key={numero}
              className="card-light relative flex h-full flex-col"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-3xl font-black text-blue-500">
                  {numero}
                </span>

                <Icon
                  className="h-7 w-7 text-blue-500"
                  aria-hidden="true"
                />
              </div>

              <h3 className="mt-6">{titre}</h3>

              <p>{description}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-4xl leading-7 text-slate-600">
          Selon la prestation choisie, certaines étapes peuvent être plus
          rapides ou adaptées. Une assistance ponctuelle ne suit naturellement
          pas le même rythme qu’une création complète de site internet.
        </p>
      </div>
    </section>
  );
}