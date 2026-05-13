export default function Home() {
    return (
        <main>
            <section>
                <img src="/public/logo.png" alt="Logo Jess Tech" />
                <h1>Jess Tech</h1>
                <h2>Création de sites web et assistance numérique</h2>
                <p>
                    Jess Tech accompagne les particuliers, artisans, associations et petites entreprises dans la Création, la refonte et la maintenance de leur site internet.
                </p>
                <div>
                    <a href="#contact">Demander un Devis</a>
                    <a href="#services">Voir les services</a>
                </div>
            </section>

            <section id="services">
                <h2>Services proposés</h2>
                <div>
                    <article>
                        <h3>Site vitrine</h3>
                        <p>
                            Création de site simple, clairs et adaptés pour présenter votre activité.
                        </p>
                    </article>

                    <article>
                        <h3>Refonte de site</h3>
                        <p>
                            Modernisation d'un site existant pour le rendre plus propre, lisible et professionnel.
                        </p>
                    </article>

                    <article>
                        <h3>Maintenance</h3>
                        <p>
                            Corrections, mise à jour, petites évolutions et suivi technique.
                        </p>
                    </article>

                    <article>
                        <h3>Assistance technique</h3>
                        <p>
                            Aide ponctuelle pour les outils informatique, la mise en ligne ou les petits blocages techniques.
                        </p>
                    </article>
                </div>
            </section>

            <section>
                <h2>Une approche simple et humaine</h2>
                <p>
                    L'objectif est de proposer des solutions compréhensibles, utiles et adaptées à chaque besoin, sans jargon inutile si le besoin s'en fait sentir.
                </p>
            </section>

            <section id="contact">
                <h2>Un projet ou une question ?</h2>
                <p>
                    Vous pouvez me contacter pour une demande d'information, de devis, une refonte ou un besoin d'accompagnement numérique et technique.
                </p>
                <a href="mailto:contact@jesstech.fr">contact@jesstech.fr</a>
            </section>
        </main>
    )
}