import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactTarifs() {
    return (
        <section className="section-dark py-24">
            <div className="site-container text-center">

                <h2 className="text-4xl font-bold text-white">
                    Un projet en tête ?
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
                    Vous souhaitez obtenir un devis ou simplement échanger
                    autour de votre projet ? Je suis à votre écoute.
                </p>

                <Link
                    to="/contact"
                    className="mt-10 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
                >
                    Demander un devis
                    <ArrowRight size={18} />
                </Link>

            </div>
        </section>
    );
}