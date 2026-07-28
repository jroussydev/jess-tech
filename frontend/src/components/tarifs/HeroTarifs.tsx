import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroTarifs() {
    return (
        <section className="section-dark relative overflow-hidden py-24">
            <div className="site-container relative z-10 text-center">

                <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-300">
                    Tarifs transparents
                </span>

                <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">
                    Des tarifs clairs,
                    <span className="text-blue-400"> sans surprise.</span>
                </h1>

                <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
                    Chez Jess Tech, chaque projet commence par un échange afin de
                    comprendre vos besoins. Vous recevez ensuite un devis détaillé
                    et gratuit avant le début des travaux.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">

                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
                    >
                        Demander un devis
                        <ArrowRight size={18} />
                    </Link>

                </div>

                <p className="mt-6 text-sm text-slate-400">
                    ✔ Devis gratuit • ✔ Aucun frais caché • ✔ Accompagnement personnalisé
                </p>

            </div>
        </section>
    );
}