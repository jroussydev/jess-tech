import { useState } from "react";
import { Link } from "react-router-dom";

import { internalProjects } from "../../data/internalProjects";
import {
  ProjectDetails,
  ProjectList,
} from "../../components/projects";

export default function DansLesCoulisses() {
  const [selectedProject, setSelectedProject] = useState(
    internalProjects[0],
  );

  return (
    <main className="relative overflow-hidden">
      {/* Hero */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-500">
            Dans les coulisses
          </p>

          <h1 className="max-w-4xl text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
            Des projets internes pour montrer la méthode, les essais et les
            apprentissages.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 text-justify">
            Cette page regroupe des projets réalisés en interne, des exercices
            et des démonstrations techniques. Ils permettent de montrer le
            travail réalisé, les choix effectués et les compétences mises en
            pratique.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="relative overflow-hidden bg-slate-950 py-16 md:py-20 lg:py-24">
        <img
          src="/decorations/vagueLumineuse2.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-[27%] top-1/2 hidden h-[900px] w-auto -translate-y-1/2 opacity-80 lg:block"
        />

        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[35%_65%]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-500">
                Pourquoi cette page ?
              </p>

              <h2 className="text-3xl font-black leading-tight text-slate-50 sm:text-4xl">
                Montrer le travail derrière les projets.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-300 text-justify">
              <p>
                Les projets présentés ici ne sont pas forcément des réalisations
                clients. Il peut s’agir d’exercices, de démonstrations ou de
                projets internes réalisés pour expérimenter, apprendre ou tester
                certaines fonctionnalités.
              </p>

              <p>
                L’objectif est de montrer une manière de travailler : comprendre
                un besoin, construire une interface, rencontrer des difficultés,
                chercher des solutions et améliorer progressivement le résultat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projets */}
      <section className="bg-slate-50 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-500">
              Projets internes
            </p>

            <h2 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
              Exercices, démonstrations et expérimentations.
            </h2>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[35%_65%]">
            <ProjectList
  projects={internalProjects}
  onSelectProject={setSelectedProject}
/>

<ProjectDetails project={selectedProject} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 pb-16 md:pb-20 lg:pb-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-blue-500/15 bg-gradient-to-r from-[#081120] to-[#0b1d35] p-6 sm:p-8">
            <img
              src="/decorations/vagueLumineuse.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-[23%] top-1/2 hidden h-[900px] w-auto -translate-y-1/2 opacity-80 lg:block"
            />

            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 text-2xl text-blue-400 sm:h-16 sm:w-16 sm:text-3xl">
                  💬
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-100 sm:text-3xl">
                    Un projet à construire ?
                  </h2>

                  <p className="mt-1 max-w-xl text-justify text-slate-300">
                    Ces projets montrent une partie de la méthode de travail.
                    Pour un besoin réel, chaque solution est adaptée au contexte,
                    aux objectifs et aux contraintes du projet.
                  </p>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#0D5BFF] px-8 py-4 font-semibold text-white transition hover:bg-blue-700 md:min-w-[180px]"
              >
                Échanger sur mon projet →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}