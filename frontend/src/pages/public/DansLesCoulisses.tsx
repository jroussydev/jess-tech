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
      {/* =====================================================
          Hero
      ====================================================== */}
      <section className="section-dark section-spacing relative isolate overflow-hidden">
        {/* Décoration temporaire */}
        <img
          src="/decorations/vagueLumineuse2.webp"
          alt=""
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-[48%]
            top-104
            z-0
            hidden
            h-[900px]
            w-auto
            max-w-none
            -translate-y-1/2
            opacity-70
            lg:block
          "
        />

        <div className="site-container relative z-10">
          <div className="section-intro max-w-5xl">
            <p className="section-label">
              Dans les coulisses
            </p>

            <h1 className="max-w-4xl sm:text-5xl">
              Des projets internes pour montrer la méthode, les essais et les
              apprentissages.
            </h1>

            <p className="max-w-3xl md:text-justify">
              Cette page regroupe des projets réalisés en interne, des exercices
              et des démonstrations techniques. Ils permettent de montrer le
              travail réalisé, les choix effectués et les compétences mises en
              pratique.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          Pourquoi cette page ?
      ====================================================== */}
      <section className="section-light section-spacing">
        <div className="site-container">
          <div className="grid gap-8 xl:grid-cols-[30%_68%] xl:gap-12">
            <div className="section-intro max-w-xl">
              <p className="section-label">
                Pourquoi cette page ?
              </p>

              <h2>
                Montrer le travail derrière les projets.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-slate-600 md:text-justify">
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

      {/* =====================================================
          Projets
      ====================================================== */}
      <section className="section-dark section-spacing relative isolate overflow-hidden">
        {/* Décoration temporaire */}
        <img
          src="/decorations/vagueLumineuse.png"
          alt=""
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-[48%]
            top-100
            z-0
            hidden
            h-[1200px]
            w-auto
            max-w-none
            -translate-y-1/2
            opacity-50
            lg:block
          "
        />

        <div className="site-container relative z-10">
          <div className="section-intro mb-10 max-w-4xl md:mb-12">
            <p className="section-label">
              Projets internes
            </p>

            <h2>
              Exercices, démonstrations et expérimentations.
            </h2>
          </div>

          {/*
            Mobile et iPad :
            ProjectList puis ProjectDetails en pleine largeur.

            Ordinateur à partir de xl :
            retour exact aux proportions initiales 35 % / 65 %.
          */}
          <div className="grid min-w-0 items-start gap-8 xl:grid-cols-[35%_65%]">
            <div className="min-w-0">
              <ProjectList
                projects={internalProjects}
                onSelectProject={setSelectedProject}
              />
            </div>

            <div className="min-w-0">
              <ProjectDetails project={selectedProject} />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="section-light section-spacing rounded-b-2xl">
        <div className="site-container max-w-[1200px]">
          <div className="relative overflow-hidden rounded-3xl border border-blue-500/15 bg-gradient-to-r from-[#081120] to-[#0b1d35] p-6 sm:p-8">
            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex min-w-0 items-start gap-4 sm:gap-5">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-blue-500/20
                    text-2xl
                    text-blue-400
                    sm:h-16
                    sm:w-16
                    sm:text-3xl
                  "
                  aria-hidden="true"
                >
                  💬
                </div>

                <div className="min-w-0">
                  <h2 className="text-2xl font-bold leading-tight text-slate-100 sm:text-3xl">
                    Une idée en tête ?
                  </h2>

                  <p className="mt-2 max-w-xl text-lg leading-8 text-slate-300">
                    Ces projets montrent une partie de la méthode de travail.
                    Pour un besoin réel, chaque solution est adaptée au contexte,
                    aux objectifs et aux contraintes du projet.
                  </p>
                </div>
              </div>

              <Link
                to="/contact"
                className="btn-primary w-full shrink-0 px-8 py-4 sm:w-auto lg:min-w-[210px]"
              >
                Parlons de votre idée →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}