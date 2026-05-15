import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Jess Tech</h1>

        <h2>Création de sites web & assistance technique</h2>

        <p>
          J’accompagne particuliers, artisans, associations et petites
          entreprises dans leurs projets web et besoins techniques.
        </p>

        <div className="hero-actions">
          <Link to="/contact">Demander un devis</Link>
          <Link to="/services">Découvrir mes services</Link>
        </div>
      </div>
    </section>
  )
}