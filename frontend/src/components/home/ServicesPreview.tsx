import { Check, LifeBuoy, Monitor, PenTool, Wrench, type LucideIcon } from "lucide-react";
import { Link } from "react-router";
import AnimatedCardBorder from "../decorations/AnimatedCardBorder";

type Service = {
  accroche: string;     // ← la question « problème client »
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  link: string;         // ← la page du service
  gridClass: string;
  featured?: boolean;
  points?: string[];    // ← optionnel : points clés (grande carte)
  price?: string;       // ← optionnel : prix (grande carte)
};

const services: Service[] = [
  {
    accroche: "Pas encore de site ?",
    title: "Sites vitrines",
    description:
      "Un site clair et responsive, pensé pour que vos clients vous trouvent et vous contactent.",
    icon: Monitor,
    image: "/services/deco-sites-vitrines.webp",
    link: "/services/creation-site-internet",
    gridClass: "row-span-2 lg:min-h-[520px]",
    featured: true,
    points: ["Design sur mesure", "Adapté au mobile", "Référencement de base"],
    price: "À partir de 490 €",
  },
  {
    accroche: "Votre site a vieilli ?",
    title: "Refonte",
    description: "On modernise votre site pour améliorer son image et sa lisibilité.",
    icon: PenTool,
    image: "/services/deco-refonte.png",
    link: "/services/refonte-site",
    gridClass: "",
  },
  {
    accroche: "Un bug, une mise à jour ?",
    title: "Maintenance",
    description: "Corrections, mises à jour et suivi technique.",
    icon: Wrench,
    image: "/services/deco-maintenance.png",
    link: "/services/maintenance-site-web",
    gridClass: "",
  },
  {
    accroche: "Bloqué sur un outil ?",
    title: "Assistance technique",
    description:
      "Un accompagnement ponctuel pour débloquer, comprendre ou améliorer vos outils.",
    icon: LifeBuoy,
    image: "/services/deco-assistance.png",
    link: "/services/assistance-technique",
    gridClass: "col-span-2",
  },
];

export default function ServicesPreview() {
  return (
    <section className="section-light section-fade-hero section-spacing">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[400px_minmax(0,1fr)] lg:items-center xl:gap-12">
          {/* Introduction */}
          <div className="section-intro max-w-xl">
            <p className="section-label">Services</p>

            <h2>Ce que je peux faire pour vous</h2>

            <p>
              Je vous présente les différents services que je propose. Mon but : concrétiser vos projets !
            </p>
            <p>
              Un nouveau site internet, un bug ou une mise à jour à gérer, une refonte complète ou partielle de votre site : dans tous les cas, je reste à votre disposition et je donne le meilleur de moi-même.
            </p>
            <p>
              Chaque service est pensé pour rester compréhensible par tous, utile et facile à maintenir dans le temps. N’hésitez pas à me contacter pour toute question, quelle qu’elle soit.
            </p>
            <Link to="/contact" className="btn-primary btn-gold mt-6">
              Écrivez-moi
            </Link>
            <Link to="/services" className="btn-primary mt-6 ml-3">
              Voir tous les services →
            </Link>
          </div>

          {/* Cartes */}
<div
  className="
    grid
    grid-cols-2
    gap-3
    md:gap-4
    lg:translate-y-6
    lg:gap-5
    xl:translate-y-7
  "
>
                        {services.map(({ accroche, title, description, icon: Icon, image, link, gridClass, featured, points, price }) => (
              <article
                key={title}
                className={`
                  ${featured ? "card-glow-gold" : "card-glow"}
                  service-card-bg
                  group
                  relative
                  min-h-45
                  overflow-hidden
                  rounded-2xl
                  ${gridClass}
                `}
              >
                <AnimatedCardBorder />

                {featured ? (
                  /* ===== Grande carte : grille 2 colonnes × 4 lignes ===== */
                  <div className="relative z-10 grid h-full grid-cols-2 grid-rows-[auto_auto_1fr_auto] gap-x-6 gap-y-4 p-5 lg:p-6">
                    {/* Ligne 1 : titre à gauche, accroche à droite */}
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 shrink-0 text-sky-500 lg:h-7 lg:w-7" aria-hidden="true" />
                      <h3 className="text-white">{title}</h3>
                    </div>
                    <p className="self-center text-right text-sm text-[#E9C46A]">{accroche}</p>

                    {/* Ligne 2 : description sur toute la largeur */}
                    <p className="col-span-2 text-justify text-slate-300 hyphens-auto">{description}</p>

                    {/* Ligne 3 : points à gauche */}
                    <ul className="self-center space-y-2 text-slate-300">
                      {points?.map((point) => (
                        <li key={point} className="flex items-center gap-2">
                          <Check className="h-4 w-4 shrink-0 text-[#E9C46A]" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Lignes 3 et 4 à droite : case du dessin (2 cases fusionnées) */}
                    <div className="relative row-span-2">
                      <img
                        src={image}
                        alt=""
                        aria-hidden="true"
                        onError={(e) => (e.currentTarget.style.display = "none")}
                        className="pointer-events-none absolute right-0 bottom-0 h-full w-auto max-w-none origin-bottom-right transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Ligne 4 : prix + lien regroupés à gauche */}
                    <div className="self-end">
                      <p className="text-lg text-white">{price}</p>
                      <Link to={link} className="color-link mt-1 inline-block">
                        Voir l'offre →
                      </Link>
                    </div>
                  </div>
                ) : (
                  /* ===== Petites cartes : dessin en fond, texte à gauche ===== */
                  <>
                    <img
                      src={image}
                      alt=""
                      aria-hidden="true"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                      className="pointer-events-none absolute inset-0 h-full w-full object-contain object-right transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="service-card__content card-content-mobile relative z-10 flex h-full max-w-[60%] flex-col justify-center p-4 lg:p-5">
                      <p className="text-sm text-[#E9C46A]">{accroche}</p>

                      <div className="service-card__heading mt-1 flex items-center gap-3">
                        <Icon className="service-card__icon h-6 w-6 shrink-0 text-sky-500 lg:h-7 lg:w-7" aria-hidden="true" />
                        <h3 className="service-card__title text-white">{title}</h3>
                      </div>

                      <p className="service-card__description mt-2 text-slate-300">{description}</p>
                    </div>
                  </>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}