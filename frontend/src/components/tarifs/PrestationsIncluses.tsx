import {
    CheckCircle,
} from "lucide-react";

const prestations = [
    "Responsive mobile",
    "Optimisations techniques de base",
    "Référencement technique de base",
    "Mise en ligne",
    "Conseils personnalisés",
    "Accompagnement tout au long du projet",
];

export default function PrestationsIncluses() {
    return (
        <section className="section-dark py-20">
            <div className="site-container">

                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white">
                        Ce qui est généralement inclus
                    </h2>
                </div>

                <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">

                    {prestations.map((item) => (
                        <div
                            key={item}
                            className="flex items-center gap-4 rounded-xl border border-slate-700 bg-slate-900/40 p-5"
                        >
                            <CheckCircle className="text-blue-400" />

                            <span className="text-slate-200">
                                {item}
                            </span>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}