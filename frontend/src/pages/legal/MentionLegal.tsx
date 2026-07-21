import {
  User,
  Server,
  Globe,
  Pencil,
  Shield,
  Link,
  Scale,
  Mail,
} from "lucide-react";

export default function MentionLegal() {
  const sections = [
    {
      icon: User,
      title: "1. Éditeur du site",
      content: (
        <>
          <p>
            <strong>Jess Tech</strong>
          </p>
          <p>Entreprise individuelle</p>

          <p className="mt-4">
            <strong>SIREN :</strong> XXX XXX XXX
          </p>

          <p>Localisation : Beaurieux, France</p>
          <p>Téléphone : 07 67 87 63 16</p>
          <p>E-mail : contact@jesstech.fr</p>

          <p className="mt-4">
            Directrice de la publication : Jessica Roussy
          </p>
        </>
      ),
    },
    {
      icon: Server,
      title: "2. Hébergement",
      content: (
        <>
          <p>
            <strong>Vercel Inc.</strong>
          </p>

          <p>340 S Lemon Ave #4133</p>
          <p>Walnut, CA 91789</p>
          <p>États-Unis</p>

          <p className="mt-4">Site : vercel.com</p>
        </>
      ),
    },
    {
      icon: Globe,
      title: "3. Nom de domaine",
      content: (
        <>
          <p>
            <strong>OVHcloud</strong>
          </p>

          <p>2 rue Kellermann</p>
          <p>59100 Roubaix</p>
          <p>France</p>

          <p className="mt-4">Site : ovhcloud.com</p>
        </>
      ),
    },
    {
      icon: Pencil,
      title: "4. Propriété intellectuelle",
      content: (
        <>
          <p>
            L'ensemble des contenus présents sur ce site est protégé par le Code
            de la propriété intellectuelle.
          </p>

          <p className="mt-4">
            Toute reproduction, représentation ou modification est interdite sans
            autorisation écrite préalable.
          </p>

          <p className="mt-4">
            Les réalisations présentées restent la propriété de leurs auteurs ou
            de leurs propriétaires respectifs.
          </p>
        </>
      ),
    },
    {
      icon: Shield,
      title: "5. Responsabilité",
      content: (
        <>
          <p>
            Jess Tech s'efforce de maintenir les informations du site à jour.
          </p>

          <p className="mt-4">
            Malgré le soin apporté à leur rédaction, elles sont fournies à titre
            indicatif et peuvent évoluer sans préavis.
          </p>
        </>
      ),
    },
    {
      icon: Link,
      title: "6. Liens externes",
      content: (
        <>
          <p>Le site peut contenir des liens vers des sites internet externes.</p>

          <p className="mt-4">
            Jess Tech ne peut être tenue responsable du contenu ou des pratiques
            de ces sites tiers.
          </p>
        </>
      ),
    },

// -----------------------------------------------------------------------------
// TODO - Google Analytics
//
// Charger Google Analytics uniquement après le consentement explicite
// de l'utilisateur.
//
// Prévoir une intégration avec le gestionnaire de cookies afin de respecter
// les recommandations de la CNIL.
//
// À activer uniquement lorsque la bannière de consentement sera en place.
// -----------------------------------------------------------------------------

    {
      icon: Scale,
      title: "7. Droit applicable",
      content: (
        <>
          <p>Le présent site est soumis au droit français.</p>

          <p className="mt-4">
            En cas de litige, les juridictions françaises seront seules
            compétentes, sauf disposition légale contraire.
          </p>
        </>
      ),
    },
    {
      icon: Mail,
      title: "8. Contact",
      content: (
        <>
          <p>
            <strong>Jess Tech</strong>
          </p>

          <p>Beaurieux, France</p>
          <p>Téléphone : 07 67 87 63 16</p>
          <p>E-mail : contact@jesstech.fr</p>
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
            Mentions légales
          </h1>

          <p className="mt-6 text-sm text-slate-300">
            Accueil <span className="mx-2 text-slate-500">›</span>
            <span className="text-blue-400">Mentions légales</span>
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