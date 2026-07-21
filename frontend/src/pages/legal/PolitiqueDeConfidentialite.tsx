import {
  User,
  
  Database,
  Target,
  Scale,
  Clock,
  Users,
  Shield,
  UserCheck,
  Cookie,
  Pencil,
  Mail,
} from "lucide-react";

export default function PolitiqueConfidentialite() {
  const sections = [
    {
      icon: User,
      title: "1. Introduction",
      content: (
        <>
          <p>
            La présente politique de confidentialité a pour objectif d'informer
            les utilisateurs du site Jess Tech sur la collecte et
            l'utilisation de leurs données personnelles.
          </p>

          <p className="mt-4">
            Jess Tech s'engage à respecter la vie privée des utilisateurs et à
            traiter les données personnelles conformément à la réglementation en
            vigueur, notamment le Règlement Général sur la Protection des
            Données (RGPD).
          </p>
        </>
      ),
    },

    {
      icon: Database,
      title: "2. Responsable du traitement",
      content: (
        <>
          <p>Jess Tech - Entreprise individuelle</p>
          <p>Localisation : Beaurieux, France</p>
          <p>E-mail : contact@jesstech.fr</p>
          <p>Téléphone : 07 67 87 63 16</p>
        </>
      ),
    },

    {
      icon: Database,
      title: "3. Données collectées",
      content: (
        <>
          <p>Lors de l'utilisation du formulaire de contact :</p>

          <ul className="mt-4 ml-6 list-disc space-y-2">
            <li>Nom</li>
            <li>Entreprise (facultatif)</li>
            <li>Adresse e-mail</li>
            <li>Téléphone (facultatif)</li>
            <li>Type de projet</li>
            <li>Message</li>
          </ul>
        </>
      ),
    },

    {
      icon: Target,
      title: "4. Finalité de la collecte",
      content: (
        <ul className="ml-6 list-disc space-y-2">
          <li>Répondre aux demandes de contact</li>
          <li>Échanger autour d'un projet</li>
          <li>Assurer le suivi des échanges</li>
          <li>Établir un devis lorsque cela est demandé</li>
        </ul>
      ),
    },

    {
      icon: Scale,
      title: "5. Base légale du traitement",
      content: (
        <p>
          Les données sont collectées sur la base du consentement de
          l'utilisateur lorsqu'il remplit volontairement le formulaire de
          contact.
        </p>
      ),
    },

    {
      icon: Clock,
      title: "6. Durée de conservation",
      content: (
        <p>
          Les données sont conservées uniquement pendant la durée nécessaire au
          traitement de votre demande ou selon les obligations légales.
        </p>
      ),
    },

    {
      icon: Users,
      title: "7. Destinataires des données",
      content: (
        <p>
          Les données sont destinées exclusivement à Jess Tech et ne sont jamais
          revendues ni communiquées à des tiers, sauf obligation légale.
        </p>
      ),
    },

    {
      icon: Shield,
      title: "8. Sécurité des données",
      content: (
        <p>
          Des mesures techniques et organisationnelles raisonnables sont mises en œuvre afin de protéger les données personnelles contre tout accès non autorisé, 
          toute perte, altération ou divulgation.<br/>Le formulaire de contact intègre également des dispositifs destinés à limiter les envois automatisés et les 
          usages abusifs, afin de préserver la sécurité du service.
        </p>
      ),
    },

    {
      icon: Users,
      title: "9. Transfert des données",
      content: (
        <p>
          Les données personnelles sont hébergées par des prestataires techniques sélectionnés par Jess Tech.<br/>
          Certains de ces prestataires peuvent être situés en dehors de l'Union européenne. Dans ce cas, ils 
          mettent en œuvre des garanties appropriées afin d'assurer un niveau de protection conforme à la réglementation applicable.
        </p>
      ),
    },

    {
      icon: UserCheck,
      title: "10. Vos droits",
      content: (
        <>
          <ul className="ml-6 list-disc space-y-2">
            <li>Droit d'accès</li>
            <li>Droit de rectification</li>
            <li>Droit d'effacement</li>
            <li>Droit d'opposition</li>
            <li>Droit à la limitation du traitement</li>
          </ul>

          <p className="mt-4">
            Contact : contact@jesstech.fr
          </p>
        </>
      ),
    },

    {
      icon: Cookie,
      title: "11. Cookies",
      content: (
        <p>
          À ce jour, le site n'utilise aucun cookie publicitaire ni aucun outil de mesure d'audience.<br/>
          Seuls les cookies strictement nécessaires au fonctionnement technique du site peuvent être utilisés.<br/>
          Si des services de mesure d'audience ou d'autres cookies nécessitant le consentement de l'utilisateur sont 
          ajoutés à l'avenir, la présente politique sera mise à jour et un mécanisme de recueil du consentement sera mis en place.
        </p>
      ),
    },

    {
      icon: Pencil,
      title: "12. Modification de la politique",
      content: (
        <>
          <p>
            Cette politique peut évoluer afin de refléter les changements du
            site ou de la réglementation.
          </p>

          <p className="mt-4">
            Dernière mise à jour : XX / XX / 2026
          </p>
        </>
      ),
    },

    {
      icon: Mail,
      title: "13. Contact",
      content: (
        <>
          <p>Jess Tech</p>
          <p>Beaurieux, France</p>
          <p>contact@jesstech.fr</p>
          <p>07 67 87 63 16</p>
        </>
      ),
    },
  ];

  return (
    <main>
      {/* Hero identique aux Mentions légales */}

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