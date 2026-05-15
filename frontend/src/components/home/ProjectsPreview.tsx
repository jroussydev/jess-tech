export default function ProjectsPreview() {
  return (
    <section className="projects-preview">
      <h2>Dans les coulisses</h2>

      <p>
        Quelques projets techniques en cours de développement, outils internes
        et expérimentations.
      </p>

      <div className="projects-grid">
        <article className="project-card">
          <h3>Sunbanks Tool</h3>
          <p>Dashboard fullstack React / Node / PostgreSQL.</p>
        </article>

        <article className="project-card">
          <h3>Projet à venir</h3>
          <p>Nouvelle expérimentation technique.</p>
        </article>

        <article className="project-card">
          <h3>En préparation</h3>
          <p>Autres outils et développements en cours.</p>
        </article>
      </div>
    </section>
  )
}