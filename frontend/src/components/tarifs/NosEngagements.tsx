import { FileText, Handshake, ShieldCheck } from "lucide-react";

const engagements = [
    {
        icon: ShieldCheck,
        title: "Transparence",
        description:
            "Chaque prestation est expliquée clairement et chaque devis détaille précisément les travaux réalisés.",
    },
    {
        icon: FileText,
        title: "Devis gratuit",
        description:
            "Vous connaissez le coût de votre projet avant son démarrage. Aucun engagement tant que le devis n'est pas validé.",
    },
    {
        icon: Handshake,
        title: "Accompagnement",
        description:
            "Je vous accompagne tout au long de votre projet afin de vous conseiller et répondre à vos questions.",
    },
];

export default function NosEngagements() {
    return (
        <section className="section-light py-20">
            <div className="site-container">

                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <h2 className="text-3xl font-bold text-slate-900">
                        Mes engagements
                    </h2>

                    <p className="mt-4 text-lg text-slate-600">
                        Au-delà des tarifs, je souhaite vous offrir une expérience
                        simple, transparente et humaine à chaque étape de votre projet.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">

                    {engagements.map(({ icon: Icon, title, description }) => (
                        <div
                            key={title}
                            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                                <Icon className="h-7 w-7 text-blue-600" />
                            </div>

                            <h3 className="text-xl font-semibold text-slate-900">
                                {title}
                            </h3>

                            <p className="mt-4 text-slate-600 leading-relaxed">
                                {description}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}