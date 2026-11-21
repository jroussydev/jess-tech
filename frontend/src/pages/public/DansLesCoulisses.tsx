import { useState } from "react";

import GlobalCTA from "../../components/GlobalCTA";
import { internalProjects } from "../../data/internalProjects";
import {
  ProjectDetails,
  ProjectList,
} from "../../components/projects";
import { createMeta } from "../../seo/createMeta";
import VagueHero from "../../components/decorations/VagueHero";
import AvecVague from "../../components/decorations/AvecVague";

export function meta() {
  return createMeta({
    title: "Dans les coulisses : ma façon de travailler | Jess Tech",
    description:
      "Méthode, outils et étapes d'un projet : découvrez comment Jess Tech travaille, de la première prise de contact à la mise en ligne de votre site.",
    path: "/dans-les-coulisses",
  });
}

export default function DansLesCoulisses() {
  const [selectedProject, setSelectedProject] = useState(
    internalProjects[0],
  );

  return (
    <main className="relative overflow-hidden">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="hero">
        <div className="hero__container">
          <div className="hero__layout">
            <div className="hero__content max-w-3xl lg:max-w-4xl">
              <p className="section-label">
                Dans les coulisses
              </p>

              <h1 className="mb-8">
                Des projets internes pour montrer la{" "}
                <span className="text-gradient-blue">
                  méthode
                </span>
                , les essais et les apprentissages.
              </h1>

              <p>
                Cette page regroupe des projets réalisés en interne, des
                exercices et des démonstrations techniques. Ils permettent de
                montrer le travail réalisé, les choix effectués et les
                compétences mises en pratique.
              </p>
            </div>
          </div>
        </div>

        {/* Vague décorative (commune à toutes les pages pour l’instant) */}
        <VagueHero />
      </section>

      {/* =====================================================
          POURQUOI CETTE PAGE ?
      ====================================================== */}
      <section className="section-light section-fade-hero section-spacing">
  <div className="site-container">

    <div className="section-intro">
      <p className="section-label">
        Pourquoi cette page ?
      </p>

      <h2>
        Montrer le travail{" "}
        <span className="text-gradient-blue">
          derrière
        </span>{" "}
        les projets.
      </h2>
    </div>

    <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600 md:text-justify">
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
</section>

      {/* =====================================================
          PROJETS
      ====================================================== */}
      <AvecVague cote="droite">
      <section className="section-dark section-fade-dark-soft section-spacing section-fade-dark-bottom">
        <div className="site-container">
          <div className="section-intro mb-10 max-w-4xl md:mb-12">
            <p className="section-label">
              Projets internes
            </p>

            <h2>
              Exercices, démonstrations et{" "}
              <span className="text-gradient-blue">
                expérimentations
              </span>
              .
            </h2>
          </div>

          {/*
            Mobile / tablette :
            liste puis détails en pleine largeur.

            Desktop xl :
            35 % liste / 65 % détails.
          */}
          <div className="grid min-w-0 items-start gap-8 xl:grid-cols-[35%_65%] mb-20">
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
      </AvecVague>

      {/* =====================================================
          CTA
      ====================================================== */}
      <AvecVague cote="gauche">
        <GlobalCTA variant="coulisses" />
      </AvecVague>
    </main>
  );
}