import { Link } from "react-router-dom"
import {
  MessageCircle,
  Search,
  Lightbulb,
  Code2,
  ShieldCheck,
} from "../../icons";

export default function MaintenanceSiteWeb() {
  return (
    <main className="relative overflow-hidden">
        {/* Section 1 Hero */}
      <section className="bg-slate-50 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-500">
            Maintenance de site web
          </p>

          <h1 className="max-w-4xl text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
            Un site internet a besoin d'être suivi dans le temps.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Mises à jour, corrections, améliorations ou simples questions :
            Jess Tech vous accompagne lorsque le besoin se présente.
          </p>
        </div>
      </section>
{/* Section 2 Pourquoi? */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[35%_65%]">
            <div>
                              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-500">
                Interventions possibles
              </p>
              <h2 className="text-3xl font-black text-white">
                Pourquoi assurer la maintenance de son site ?
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Une fois en ligne, un site internet continue de vivre. Les informations
                changent, les besoins évoluent et de nouvelles demandes peuvent apparaître.
              </p>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Une maintenance régulière permet de garder un site à jour et de corriger
                plus facilement les problèmes lorsqu'ils se présentent.
              </p>
            </div>



      {/* Section Differente intervention */}


    <div className="grid gap-6 md:grid-cols-2 text-center">
      <article className="rounded-3xl border border-blue-500/15 bg-[#081120] p-8">
        <h2 className="text-2xl font-bold text-white">
          Intervention ponctuelle
        </h2>
        <p className="mt-4 leading-7 text-slate-400">
          Pour corriger un problème, modifier une information ou réaliser une amélioration précise.
        </p>

            <div className="mt-4 grid gap-4 text-center">
              {[
                "Correction de bug",
                "Modification de contenu",
                "Ajout de page",
                "Mise à jour du site",
                "Optimisation mobile",
              ].map((item) => (
                <div
                  key={item}
                  
                >
                  ✓ {item}
                </div>
              ))}
            </div>

      </article>

      <article className="rounded-3xl border border-blue-500/15 bg-[#081120] p-8">
        <h2 className="text-2xl font-bold text-white">
          Suivi dans le temps
        </h2>
        <p className="mt-4 leading-7 text-slate-400">
          Pour accompagner les évolutions du site et intervenir lorsque de nouveaux besoins apparaissent.
        </p>

            <div className="mt-4 grid gap-4 text-center">
              {[
                "Évolution du site",
                "Accompagnement technique",
                "Ajout régulier de contenu",
                "Nouvelles fonctionnalités",
                "Conseils et suivi",
              ].map((item) => (
                <div
                  key={item}
                  
                >
                  ✓ {item}
                </div>
              ))}
            </div>

      </article>
    </div>
       </div>
  </div>
</section>
{/* Section intervention possible */}
      <section className="bg-slate-50 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[35%_65%]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-500">
                Que peut on faire ?
              </p>

              <h2 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
                Des interventions adaptées à votre site.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-center">
              {[
                "Mises à jour du site web",
                "Corrections de bugs techniques",
                "Modification de textes ou d'images",
                "Ajout de nouvelles pages",
                "Mise à jour des coordonnées",
                "Évolutions de fonctionnalités",
                "Amélioration de l'affichage mobile",
                "Accompagnement dans le temps",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-700 shadow-sm"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
{/* Section - Déroulement horizontal */}
<section className="py-16 md:py-20 lg:py-24">
  <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
    <div className="mb-14">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
        Déroulement
      </p>

      <h2 className="text-3xl font-black text-white sm:text-4xl">
        Comment se déroule une intervention ?
      </h2>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
      {[
        ["01", "💬", "Prise de contact", "Vous expliquez la situation ou les modifications souhaitées."],
        ["02", "🔍", "Analyse du besoin", "Une vérification permet de comprendre le problème ou la demande."],
        ["03", "💡", "Proposition de solution", "Les possibilités sont étudiées pour proposer une intervention adaptée."],
        ["04", "🛠️", "Réalisation", "Les corrections, mises à jour ou évolutions sont réalisées."],
        ["05", "🛡️", "Vérification", "Les modifications sont vérifiées afin de s'assurer du bon fonctionnement."],
      ].map(([number, icon, title, text], index) => (
        <article key={number} className="relative text-center">
          {/* Ligne entre les étapes desktop */}
          {index < 4 && (
            <div className="absolute left-1/2 top-8 hidden h-px w-full bg-blue-500/40 lg:block" />
          )}

          <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-blue-500/50 bg-[#081120] text-xl font-black text-white shadow-[0_0_20px_rgba(13,91,255,0.35)]">
            {number}
          </div>
<div className="mx-auto hidden h-10 w-px bg-blue-500/40 lg:block" />
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-2xl">
            {icon}
          </div>

          <h3 className="mt-6 text-xl font-bold text-white">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            {text}
          </p>
        </article>
      ))}
    </div>
  </div>
</section>


{/* Section FAQ */}
      <section className="bg-slate-50 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-500">
            Foire aux questions
          </p>

          <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">
            Questions fréquentes
          </h2>

          <div className="mt-12 space-y-6">
            {[
                [
                    "Mon site n'a pas été créé par Jess Tech, pouvez-vous quand même intervenir ?",
                    "Oui. Selon la technologie utilisée et l'état du projet, il est possible d'intervenir sur un site existant même s'il a été réalisé par un autre prestataire.",
                ],               
              [
                "Je ne sais pas ce qui pose problème sur mon site, pouvez-vous quand même m'aider ?",
                "Oui. Il n'est pas nécessaire de connaître l'origine du problème avant de prendre contact. Un premier échange permet de faire le point.",
              ],
              [
                "Mon site fonctionne encore, mais j'aimerais le modifier ou l'améliorer. Est-ce possible ?",
                "Oui. Une intervention peut aussi concerner une évolution, l'ajout de contenu, une nouvelle page ou une amélioration.",
              ],
                [
                    "Mon site pourra-t-il continuer à évoluer ?",
                    "Bien sûr. Un site internet évolue souvent avec son activité. De nouvelles fonctionnalités, pages ou améliorations peuvent être ajoutées au fil du temps.",
                ],
            ].map(([question, answer]) => (
              <article
                key={question}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="font-bold text-slate-900">{question}</h3>
                <p className="mt-3 text-slate-600">{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

    <section className="bg-slate-50 pb-16 md:pb-20 lg:pb-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-blue-500/15 bg-gradient-to-r from-[#081120] to-[#0b1d35] p-6 sm:p-8">
          
{/* Design ligne bleu */}
  <img
    src="/decorations/vagueLumineuse.png"
  alt=""
  aria-hidden="true"
  className="
hidden
    lg:block

    absolute
    left-[30%]
    top-1/2
    -translate-y-1/2
    h-[900px]
    w-auto
    opacity-80
    pointer-events-none
  "
  />

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 text-2xl text-blue-400 sm:h-16 sm:w-16 sm:text-3xl">
                💬
              </div>

              <div className="max-w-xl">
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Besoin d'une intervention ?
                </h2>

                <p className="mt-1 text-slate-300 text-justify">
                  Vous rencontrez un problème sur votre site ou souhaitez le faire évoluer ?
                </p>
                <p className="mt-1 max-w-[525px] text-slate-300 text-justify">
                  Jess Tech vous accompagne pour maintenir, corriger et améliorer votre site internet selon vos besoins.
                </p>
              </div>



            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#0D5BFF] px-8 py-4 font-semibold text-white transition hover:bg-blue-700 md:min-w-[180px]"
            >
              Me contacter →
            </Link>
          </div>
        </div>
      </div>
    </section>
    </main>
  )
}