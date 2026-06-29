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
        <p>
            Le devis précise notamment la nature de la prestation, son contenu, son tarif, les délais estimés ainsi que les éventuelles conditions particulières.
        </p>

        <p className="mt-4">
          La commande est considérée comme acceptée à compter de la signature du devis ou de son acceptation écrite par le client.
        </p>
      </>
    ),
  },

    {
    icon: Pencil,
    title: "4. Droit de rétractation",
    content: (
      <>
        <p>
            Conformément aux dispositions du Code de la consommation, le client consommateur dispose d'un délai de quatorze (14) jours à compter de 
            la conclusion du contrat pour exercer son droit de rétractation, lorsque celui-ci est applicable.        
        </p>
        <p>
            Toutefois, si le client demande expressément le début de l'exécution de la prestation avant la fin de ce délai, il reconnaît que Jess Tech 
            pourra commencer les travaux à sa demande.        
        </p>

        <p className="mt-4">
            Lorsque la prestation est entièrement réalisée avant l'expiration du délai de rétractation, avec l'accord exprès du client, celui-ci ne pourra
            plus exercer son droit de rétractation.        
        </p>
        <p>
            Si le client exerce son droit de rétractation après le début de l'exécution de la prestation, il restera redevable du montant correspondant
            aux travaux déjà réalisés, conformément aux dispositions légales en vigueur.
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
            Les tarifs applicables sont ceux indiqués sur le devis accepté par le client.
        </p>
        <p>
            Les prix affichés sur le site internet sont donnés à titre indicatif et peuvent évoluer. Seul le devis accepté fait foi.
        </p>
        <p>
            Sauf mention contraire figurant sur le devis, un acompte de 50 % est demandé avant le démarrage de la prestation.
        </p>

        <p className="mt-4">
            Le solde est exigible avant la mise en ligne du site ou à la livraison de la prestation, selon la nature du projet.        </p>

        <p className="mt-4">
          En cas de retard de paiement, Jess Tech se réserve le droit de suspendre toute prestation en cours jusqu'à régularisation de la situation.
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
          Le client s'engage à fournir les informations, contenus et documents nécessaires à la réalisation du projet.
        </p>

        <p className="mt-4">
          Il garantit disposer des droits nécessaires sur les textes, images, logos, vidéos et autres contenus transmis.
        </p>
        <p>
           Le client demeure seul responsable des contenus fournis à Jess Tech. 
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
          Le client s'engage à répondre aux demandes d'informations, de validation ou de transmission de contenus dans des délais 
          raisonnables afin de permettre le bon déroulement du projet.
        </p>

        <p className="mt-4">
          En cas d'absence de réponse prolongée ou de non-transmission des éléments nécessaires, Jess Tech pourra reporter la 
          réalisation de la prestation selon ses disponibilités.
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
          Le nombre de modifications incluses est précisé dans le devis ou dans l'offre commerciale retenue.
        </p>
        <p>
          Les demandes supplémentaires ou les modifications entraînant une évolution importante du projet pourront faire l'objet 
          d'un devis complémentaire.  
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
          La mise en ligne ou la livraison de la prestation intervient après validation du client et règlement des sommes restant dues.
        </p>

        <p className="mt-4">
          Les anomalies directement liées à la prestation réalisée et signalées dans un délai de 30 jours suivant la livraison seront corrigées sans frais.
        </p>
        <p>
            Les demandes d'évolution, d'ajout de fonctionnalités, de modification du contenu ou toute intervention ne relevant pas d'une anomalie feront 
            l'objet d'un devis complémentaire ou d'une prestation de maintenance.
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
          Les prestations de maintenance font l'objet d'un contrat, d'un devis ou d'une proposition distincte.
        </p>
        <p>
           Sauf mention contraire, la livraison d'un site internet n'inclut pas automatiquement une prestation de maintenance ou de suivi dans le temps. 
        </p>
        <p>
           Les modalités des prestations de maintenance sont définies dans le document correspondant. 
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
          Jess Tech peut accompagner le client dans le choix, l'achat et la configuration de son hébergement, de son nom de domaine 
          ou d'autres services nécessaires au projet.
        </p>

        <p className="mt-4">
          Sauf accord contraire, ces services restent la propriété du client, qui en assure la gestion et la responsabilité.
        </p>
        <p>
          Jess Tech ne saurait être tenue responsable des interruptions, dysfonctionnements ou modifications liés aux prestataires tiers.  
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
          Après la livraison de la prestation, le client est invité à conserver une copie des fichiers et éléments remis.
        </p>
        <p>
            Sauf disposition contraire prévue dans une prestation de maintenance ou un contrat spécifique, Jess Tech ne garantit pas 
            la conservation des fichiers au-delà d'un délai raisonnable.
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
          Sauf demande contraire du client, Jess Tech se réserve la possibilité de présenter les réalisations effectuées dans le cadre 
          de son activité comme références.
        </p>
        <p>
            Cette présentation peut notamment inclure une description du projet, des captures d'écran, des photographies, le nom de 
            l'entreprise ou un lien vers le site internet réalisé.
        </p>
        <p>
           Le client peut demander à ne pas apparaître dans les références de Jess Tech avant la livraison du projet. 
        </p>
        <p>
           Il dispose également d'un délai de 30 jours suivant la livraison pour demander le retrait ou la non-publication 
           de son projet. Cette demande sera respectée. 
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
          En cas d'absence prolongée de réponse du client ou de non-transmission des éléments nécessaires à la réalisation 
          de la prestation, le projet pourra être considéré comme suspendu.
        </p>
        <p>
            La reprise des travaux sera effectuée selon les disponibilités de Jess Tech et pourra, si nécessaire, faire l'objet d'un nouveau devis.
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
          Jess Tech s'engage à mettre en œuvre tous les moyens raisonnables afin de réaliser les prestations confiées.
        </p>
        <p>
            La responsabilité de Jess Tech ne saurait être engagée en cas de dommages indirects, de perte d'exploitation, de perte de données ou 
            de dysfonctionnements résultant de services tiers ou d'informations fournies par le client.
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
          En cas de difficulté concernant l'exécution d'une prestation, Jess Tech privilégiera autant que possible le dialogue et la recherche d'une 
          solution amiable avec le client avant toute autre démarche.
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
          Les présentes Conditions Générales de Vente sont soumises au droit français.
        </p>
        <p>
            Tout litige relatif à leur interprétation ou à leur exécution sera soumis aux juridictions compétentes.
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

