import { Link } from "react-router-dom"

export default function ContactCTA() {
  return (
    <section className="contact-cta">
      <h2>Un projet ou une question ?</h2>

      <p>
        Besoin d’un site web, d’une refonte ou d’un accompagnement technique ?
        Parlons-en.
      </p>

      <Link to="/contact">Me contacter</Link>
    </section>
  )
}