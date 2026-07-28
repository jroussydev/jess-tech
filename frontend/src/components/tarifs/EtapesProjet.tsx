import {
    MessageCircle,
    Search,
    FileText,
    Hammer,
    Laptop,
    Rocket,
} from "lucide-react";

const steps = [
    { icon: MessageCircle, title: "Premier échange" },
    { icon: Search, title: "Analyse du besoin" },
    { icon: FileText, title: "Devis gratuit" },
    { icon: Hammer, title: "Développement" },
    { icon: Laptop, title: "Validation" },
    { icon: Rocket, title: "Mise en ligne" },
];

export default function EtapesProjet() {
    return (
        <section className="section-light py-20">
            <div className="site-container">

                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-900">
                        Déroulement d'un projet
                    </h2>

                    <p className="mt-4 text-slate-600">
                        Une méthode simple pour avancer sereinement.
                    </p>
                </div>

                <div className="mt-14 grid gap-8 md:grid-cols-3 lg:grid-cols-6">

                    {steps.map(({ icon: Icon, title }) => (
                        <div
                            key={title}
                            className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
                        >
                            <Icon className="mx-auto mb-4 h-8 w-8 text-blue-600" />

                            <h3 className="font-semibold text-slate-900">
                                {title}
                            </h3>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}