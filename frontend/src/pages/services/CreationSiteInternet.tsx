import GlobalCTA from "../../components/GlobalCTA";


export default function CreationSiteInternet() {
  return (
    <main className="relative overflow-hidden">
      <section className="bg-slate-50 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-500">
            Création de site internet
          </p>

          <h1 className="max-w-4xl text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
            Un site internet adapté à votre activité.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Aujourd'hui, un site internet est souvent le premier point de contact
            entre une activité et ses futurs clients.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[35%_65%]">
            <div>
              <h2 className="text-3xl font-black text-white">
                Pourquoi créer un site internet ?
              </h2>
            </div>

            <div className="space-y-4 text-slate-300">
              <p>Présenter votre activité</p>
              <p>Mettre en avant vos services</p>
              <p>Faciliter la prise de contact</p>
              <p>Gagner en visibilité sur internet</p>
              <p>Centraliser vos informations importantes</p>
              <p>Renforcer votre crédibilité auprès de vos clients</p>
            </div>
          </div>
        </div>
      </section>
      {/* Section 3 - Ce qui peut être inclus */}
<section className="bg-slate-50 py-16 md:py-20 lg:py-24">
  <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">

    <div className="grid gap-12 lg:grid-cols-[35%_65%]">

      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-500">
          Ce qui peut être inclus
        </p>

        <h2 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
          Des fonctionnalités choisies selon vos besoins.
        </h2>

        <p className="mt-6 text-slate-600 leading-8">
          Chaque projet est différent. Les éléments ci-dessous sont donnés à
          titre d'exemple et sont sélectionnés en fonction de votre activité.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">

        {[
          "Une ou plusieurs pages de présentation",
          "Formulaire de contact",
          "Carte Google Maps",
          "Liens vers les réseaux sociaux",
          "Galerie photo",
          "Présentation des services",
          "Section réalisations",
          "Foire aux questions",
          "SEO de base",
        ].map((feature) => (
          <div
            key={feature}
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-5
              text-slate-700
              shadow-sm
            "
          >
            ✓ {feature}
          </div>
        ))}

      </div>

    </div>

  </div>
</section>
{/* Section 4 - Déroulement du projet */}
<section className="py-16 md:py-20 lg:py-24">
  <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">

    <div className="mb-16">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
        Comment se déroule un projet ?
      </p>

      <h2 className="text-3xl font-black text-white sm:text-4xl">
        Un accompagnement étape par étape.
      </h2>
    </div>

    <div className="grid gap-6 lg:grid-cols-5">

      <article className="rounded-2xl border border-blue-500/15 bg-[#081120] p-6">
        <p className="text-4xl font-black text-blue-500">01</p>
        <h3 className="mt-4 text-xl font-bold text-white">
          Échange autour du projet
        </h3>
        <p className="mt-3 text-slate-400">
          Nous discutons de votre activité, de vos besoins et de vos objectifs.
        </p>
      </article>

      <article className="rounded-2xl border border-blue-500/15 bg-[#081120] p-6">
        <p className="text-4xl font-black text-blue-500">02</p>
        <h3 className="mt-4 text-xl font-bold text-white">
          Préparation des contenus
        </h3>
        <p className="mt-3 text-slate-400">
          Textes, photos, coordonnées et éléments nécessaires sont regroupés.
        </p>
      </article>

      <article className="rounded-2xl border border-blue-500/15 bg-[#081120] p-6">
        <p className="text-4xl font-black text-blue-500">03</p>
        <h3 className="mt-4 text-xl font-bold text-white">
          Création du site
        </h3>
        <p className="mt-3 text-slate-400">
          Le site est réalisé selon les éléments définis ensemble.
        </p>
      </article>

      <article className="rounded-2xl border border-blue-500/15 bg-[#081120] p-6">
        <p className="text-4xl font-black text-blue-500">04</p>
        <h3 className="mt-4 text-xl font-bold text-white">
          Validation
        </h3>
        <p className="mt-3 text-slate-400">
          Vous consultez le résultat et demandez les ajustements prévus.
        </p>
      </article>

      <article className="rounded-2xl border border-blue-500/15 bg-[#081120] p-6">
        <p className="text-4xl font-black text-blue-500">05</p>
        <h3 className="mt-4 text-xl font-bold text-white">
          Mise en ligne
        </h3>
        <p className="mt-3 text-slate-400">
          Le site est publié et accessible à vos visiteurs.
        </p>
      </article>

    </div>

  </div>
</section>
{/* Section 5 - FAQ */}
<section className="bg-slate-50 py-16 md:py-20 lg:py-24">
  <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">

    <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-500">
      Foire aux questions
    </p>

    <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">
      Questions fréquentes
    </h2>

    <div className="mt-12 space-y-6">

      <article className="rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="font-bold text-slate-900">
          Je ne sais pas exactement ce dont j'ai besoin, est-ce un problème ?
        </h3>

        <p className="mt-3 text-slate-600">
          Non. Beaucoup de projets commencent simplement par une idée ou un besoin.
          Un premier échange permet de faire le point sur votre situation.
        </p>
      </article>

      <article className="rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="font-bold text-slate-900">
          J'ai déjà un site internet, pouvez-vous intervenir dessus ?
        </h3>

        <p className="mt-3 text-slate-600">
          Oui. Selon les besoins, il est possible d'intervenir sur un site existant
          pour une maintenance, une correction ou une refonte.
        </p>
      </article>

      <article className="rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="font-bold text-slate-900">
          Dois-je déjà avoir un hébergement et un nom de domaine ?
        </h3>

        <p className="mt-3 text-slate-600">
          Non. Un accompagnement peut être proposé afin de vous aider dans ces démarches.
        </p>
      </article>

      <article className="rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="font-bold text-slate-900">
          Puis-je vous contacter même si mon projet n'est pas encore défini ?
        </h3>

        <p className="mt-3 text-slate-600">
          Bien sûr. Un échange permet souvent de clarifier les besoins et les possibilités.
        </p>
      </article>

      <article className="rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="font-bold text-slate-900">
          Mon site pourra-t-il évoluer plus tard ?
        </h3>

        <p className="mt-3 text-slate-600">
          Oui. Un site internet peut être complété, modifié ou amélioré au fil du temps.
        </p>
      </article>

    </div>

  </div>
</section>
{/* Section 6 - CTA */}
<GlobalCTA variant="services" />
    </main>
  )
}