const questions = [
    {
        q: "Pourquoi les tarifs commencent-ils par « À partir de » ?",
        r: "Chaque projet est différent. Les prix affichés correspondent à une base qui peut évoluer selon vos besoins.",
    },
    {
        q: "Les devis sont-ils gratuits ?",
        r: "Oui. Tous les devis sont gratuits et sans engagement.",
    },
    {
        q: "Dois-je verser un acompte ?",
        r: "Oui. Un acompte de 50 % est demandé avant le début du projet.",
    },
    {
        q: "Puis-je faire évoluer mon site plus tard ?",
        r: "Bien sûr. Votre site peut évoluer selon vos besoins futurs.",
    },
];

export default function FaqTarifs() {
    return (
        <section className="section-light py-20">
            <div className="site-container">

                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-900">
                        Questions fréquentes
                    </h2>
                </div>

                <div className="mx-auto mt-12 max-w-4xl space-y-6">

                    {questions.map(({ q, r }) => (
                        <div
                            key={q}
                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                        >
                            <h3 className="font-semibold text-slate-900">
                                {q}
                            </h3>

                            <p className="mt-3 text-slate-600">
                                {r}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}