export default function ServicesPreview() {
  return (
    <section className="services-preview">
      <h2>Services proposés</h2>

      <div className="services-grid">
        <article className="service-card">
          <h3>Sites vitrines</h3>
          <p>
            Création de sites clairs, professionnels et adaptés pour présenter
            votre activité.
          </p>
        </article>

        <article className="service-card">
          <h3>Refonte de site</h3>
          <p>
            Modernisation d’un site existant pour améliorer son apparence, sa
            lisibilité et son efficacité.
          </p>
        </article>

        <article className="service-card">
          <h3>Maintenance</h3>
          <p>
            Corrections, mises à jour, petites évolutions et suivi technique.
          </p>
        </article>

        <article className="service-card">
          <h3>Assistance technique</h3>
          <p>
            Aide ponctuelle, accompagnement technique et assistance informatique
            selon vos besoins.
          </p>
        </article>
      </div>
    </section>
  )
}