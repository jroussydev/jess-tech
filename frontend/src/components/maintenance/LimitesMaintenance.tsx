import {
  RefreshCw,
  TrendingUp,
} from "lucide-react";

const limites = [
  {
    label: "Entretenir",
    title: "Maintenir ce qui existe",
    description:
      "La maintenance couvre les opérations prévues pour conserver le site en état, vérifier son fonctionnement et intervenir sur les éléments inclus dans la formule.",
    icon: RefreshCw,
  },
  {
    label: "Faire évoluer",
    title: "Ajouter ou transformer",
    description:
      "Ajouter une page, créer une nouvelle fonctionnalité ou modifier plus largement le fonctionnement du site correspond à une évolution distincte de la maintenance.",
    icon: TrendingUp,
  },
];

export default function LimitesMaintenance() {
  return (
    <section className="section-dark section-fade-dark-soft section-spacing">
      <div className="site-container">

        {/* Introduction */}
        <div className="section-intro max-w-3xl">
          <p className="section-label">
            Périmètre
          </p>

          <h2>
            Entretenir votre site ne veut pas dire{" "}
            <span className="text-gradient-blue">
              le transformer
            </span>
          </h2>

          <p>
            La maintenance permet de suivre ce qui existe déjà. Les nouvelles
            pages, fonctionnalités ou transformations importantes sont des
            évolutions étudiées séparément.
          </p>
        </div>

        {/* Comparaison */}
        <div
          className="
            mt-10
            grid
            gap-6

            md:grid-cols-2
          "
        >
          {limites.map(({ label, title, description, icon: Icon }) => (
            <article
              key={title}
              className="
                group
                min-w-0

                border-b
                border-blue-500/20
                pb-6

                md:border-b-0
                md:border-r
                md:pr-8

                md:last:border-r-0
                md:last:pr-0
              "
            >
              {/* Icône + label */}
              <div className="flex items-center gap-3">
                <Icon
                  className="
                    h-7
                    w-7
                    shrink-0
                    text-blue-400
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                  aria-hidden="true"
                />

                <p className="section-label !m-0">
                  {label}
                </p>
              </div>

              {/* Contenu */}
              <h3 className="mt-3">
                {title}
              </h3>

              <p className="mt-3 text-slate-300">
                {description}
              </p>
            </article>
          ))}
        </div>

        {/* Message de fin */}
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="!m-0 text-slate-300">
            <strong className="text-white">
              Votre site peut bien sûr continuer à évoluer.
            </strong>
            <br />
            Les demandes qui sortent du périmètre de la maintenance sont
            simplement étudiées et chiffrées séparément.
          </p>
        </div>

      </div>
    </section>
  );
}