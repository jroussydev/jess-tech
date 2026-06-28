import {
  User,
  FileText,
  Pencil,
  Clock,
  Users,
  Shield,
  Database,
  Mail,
} from "lucide-react";

export default function Cgv() {
const sections = [
  {
    icon: User,
    title: "1. Présentation de l'entreprise",
    content: (
      <>
        <p><strong>Jess Tech</strong></p>
        <p>Entreprise individuelle</p>

        <p className="mt-4">
          <strong>SIREN :</strong> XXX XXX XXX
        </p>

        <p>Beaurieux, France</p>
        <p>contact@jesstech.fr</p>
        <p>07 67 87 63 16</p>
      </>
    ),
  },

  {
    icon: FileText,
    title: "2. Objet",
    content: (
      <>
        <p>
          Les présentes Conditions Générales de Vente définissent les
          conditions dans lesquelles Jess Tech réalise ses prestations.
        </p>

        <ul className="mt-4 ml-6 list-disc space-y-2">
          <li>Création de sites internet</li>
          <li>Refonte</li>
          <li>Maintenance</li>
          <li>Développement sur mesure</li>
          <li>Assistance technique</li>
          <li>Conseil</li>
        </ul>
      </>
    ),
  },

  {
    icon: Pencil,
    title: "3. Devis et acceptation",
    content: (
      <>
        <p>
          Toute prestation fait l'objet d'un devis préalable.
        </p>

        <p className="mt-4">
          La commande est validée après signature du devis ou acceptation
          écrite du client.
        </p>
      </>
    ),
  },

  {
    icon: Database,
    title: "4. Tarifs et paiement",
    content: (
      <>
        <p>
          Les tarifs applicables sont ceux figurant sur le devis accepté.
        </p>

        <p className="mt-4">
          Un acompte de 50 % est demandé avant le début de la prestation.
        </p>

        <p className="mt-4">
          Le solde est payable avant la livraison ou la mise en ligne.
        </p>
      </>
    ),
  },

  {
    icon: Clock,
    title: "5. Délais de réalisation",
    content: (
      <>
        <p>
          Les délais sont donnés à titre indicatif.
        </p>

        <p className="mt-4">
          Ils peuvent évoluer selon la transmission des contenus, les
          validations du client ou tout événement indépendant de Jess Tech.
        </p>
      </>
    ),
  },

  {
    icon: Users,
    title: "6. Obligations du client",
    content: (
      <>
        <p>
          Le client s'engage à fournir les contenus nécessaires à la réalisation
          du projet.
        </p>

        <p className="mt-4">
          Il garantit disposer des droits sur les éléments transmis.
        </p>
      </>
    ),
  },

  {
    icon: Database,
    title: "7. Communication et suivi",
    content: (
      <>
        <p>
          Le client s'engage à répondre aux demandes d'informations et de
          validation dans des délais raisonnables.
        </p>

        <p className="mt-4">
          En cas d'absence prolongée, Jess Tech pourra reporter la prestation.
        </p>
      </>
    ),
  },

  {
    icon: Pencil,
    title: "8. Validation et modifications",
    content: (
      <>
        <p>
          Une phase de validation est prévue avant la livraison.
        </p>

        <p className="mt-4">
          Les demandes supplémentaires pourront faire l'objet d'un devis
          complémentaire.
        </p>
      </>
    ),
  },

  {
    icon: Shield,
    title: "9. Livraison et garantie",
    content: (
      <>
        <p>
          La livraison intervient après validation du client et règlement des
          sommes dues.
        </p>

        <p className="mt-4">
          Les anomalies signalées dans les 30 jours seront corrigées sans frais.
        </p>
      </>
    ),
  },

  {
    icon: Database,
    title: "10. Maintenance",
    content: (
      <>
        <p>
          Les prestations de maintenance font l'objet d'un contrat ou d'un
          devis distinct.
        </p>
      </>
    ),
  },

  {
    icon: Database,
    title: "11. Hébergement et nom de domaine",
    content: (
      <>
        <p>
          Jess Tech peut accompagner le client dans le choix de son hébergement
          et de son nom de domaine.
        </p>

        <p className="mt-4">
          Ces services restent la propriété du client.
        </p>
      </>
    ),
  },

  {
    icon: Database,
    title: "12. Sauvegarde des fichiers",
    content: (
      <>
        <p>
          Le client est invité à conserver une copie des fichiers remis.
        </p>
      </>
    ),
  },

  {
    icon: FileText,
    title: "13. Présentation des réalisations",
    content: (
      <>
        <p>
          Jess Tech peut présenter les réalisations effectuées comme références,
          sauf demande contraire du client.
        </p>
      </>
    ),
  },

  {
    icon: Clock,
    title: "14. Suspension ou abandon du projet",
    content: (
      <>
        <p>
          En cas d'absence prolongée de réponse, le projet pourra être
          suspendu.
        </p>
      </>
    ),
  },

  {
    icon: Shield,
    title: "15. Responsabilité",
    content: (
      <>
        <p>
          Jess Tech met en œuvre tous les moyens raisonnables pour réaliser les
          prestations confiées.
        </p>
      </>
    ),
  },

  {
    icon: Users,
    title: "16. Résolution amiable",
    content: (
      <>
        <p>
          Jess Tech privilégiera toujours une solution amiable avant toute
          procédure.
        </p>
      </>
    ),
  },

  {
    icon: Shield,
    title: "17. Droit applicable",
    content: (
      <>
        <p>
          Les présentes CGV sont soumises au droit français.
        </p>
      </>
    ),
  },

  {
    icon: Mail,
    title: "18. Contact",
    content: (
      <>
        <p><strong>Jess Tech</strong></p>

        <p>Beaurieux, France</p>

        <p>07 67 87 63 16</p>

        <p>contact@jesstech.fr</p>
      </>
    ),
  },
];

return (
  <main className="relative overflow-hidden">
    {/* Hero */}
    <section className="bg-slate-950 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h1 className="text-4xl font-black text-white sm:text-5xl">
          Conditions Générales de Vente
        </h1>

        <p className="mt-6 text-sm text-slate-300">
          Accueil <span className="mx-2 text-slate-500">›</span>
          <span className="text-blue-400">CGV</span>
        </p>
      </div>
    </section>

    {/* Contenu */}
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="space-y-10">
          {sections.map((section, index) => {
            const Icon = section.icon;

            return (
              <div key={section.title}>
                <div className="grid gap-8 md:grid-cols-[80px_1fr]">
                  <div className="flex justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
                      <Icon className="h-7 w-7 text-blue-600" />
                    </div>
                  </div>

                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-slate-900">
                      {section.title}
                    </h2>

                    <div className="space-y-4 leading-8 text-slate-600">
                      {section.content}
                    </div>
                  </div>
                </div>

                {index !== sections.length - 1 && (
                  <hr className="mt-10 border-slate-200" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  </main>
);

}

