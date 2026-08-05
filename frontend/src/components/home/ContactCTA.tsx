import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="section-light home-contact">
      <div className="site-container home-contact__container">
        <div className="home-contact__card">
          {/* Décoration */}
          <img
            src="/decorations/vagueLumineuse2.png"
            alt=""
            aria-hidden="true"
            className="home-contact__wave"
          />

          <div className="home-contact__content">
            <div className="home-contact__info">
              <div className="home-contact__icon">
                💬
              </div>

              <div>
                <h2 className="home-contact__title">
                  Un projet en tête ?
                </h2>

                <p className="home-contact__description">
                  Discutons-en simplement.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-primary home-contact__button"
            >
              Me contacter →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}