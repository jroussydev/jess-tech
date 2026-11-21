import { Check, LifeBuoy, Monitor, PenTool, Wrench, type LucideIcon } from "lucide-react";
import { Link } from "react-router";
import AnimatedCardBorder from "../decorations/AnimatedCardBorder";
import { prixSites } from "../../data/tarifs";

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
  imageClass?: string;  // ← taille/position du dessin (petites cartes)
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
    gridClass: "xl:row-span-2 xl:min-h-[460px]",
    featured: true,
    points: ["Design sur mesure", "Adapté au mobile", "Référencement de base"],
    price: `À partir de ${prixSites.Lite.normal}`,
  },
  {
    accroche: "Votre site a vieilli ?",
    title: "Refonte",
    description: "On modernise votre site pour améliorer son image et sa lisibilité.",
    icon: PenTool,
    image: "/services/deco-refonte.webp",
    link: "/services/refonte-site",
    gridClass: "",
  },
  {
    accroche: "Un bug, une mise à jour ?",
    title: "Maintenance",
    description: "Corrections, mises à jour et suivi technique.",
    icon: Wrench,
    image: "/services/deco-maintenance.webp",
    link: "/services/maintenance-site-web",
    gridClass: "",
  },
  {
    accroche: "Bloqué sur un outil ?",
    title: "Assistance technique",
    description:
      "Un accompagnement ponctuel pour débloquer, comprendre ou améliorer vos outils.",
    icon: LifeBuoy,
    image: "/services/deco-assistance-technique.webp",
    link: "/services/assistance-technique",
    gridClass: "min-h-56 xl:min-h-45 xl:col-span-2",
    imageClass: "bottom-0 right-0 h-[75%] w-[60%] xl:inset-y-0 xl:h-full xl:w-[65%]",
  },
];

export default function ServicesPreview() {
  return (
    <section className="section-light section-fade-hero section-spacing">
      <div className="site-container">
        {/* 3 blocs, dans cet ordre :
              1. titre + paragraphes 1 et 2
              2. les 4 cartes
              3. paragraphes 3 et 4 + boutons
            Mobile et tablette : les 3 blocs l'un sous l'autre.
            Ordinateur (1280 px et plus) : cartes à droite sur toute la hauteur ;
            à gauche, titre en haut, boutons en bas, et les 4 paragraphes au
            milieu avec le même espace au-dessus et en dessous (les 2 lignes
            « 1fr » de la grille se partagent l'espace libre à parts égales). */}
        <div className="grid gap-8 pt-[65px] xl:grid-cols-[400px_minmax(0,1fr)] xl:grid-rows-[auto_1fr_auto_auto_1fr_auto] xl:gap-x-12 xl:gap-y-0">
          {/* Bloc 1 : titre + paragraphes 1 et 2 */}
          <div className="section-intro max-w-none xl:contents">
            <div className="xl:col-start-1 xl:row-start-1">
              <p className="section-label !mt-0">Services</p>
              <h2>Ce que je peux faire pour vous</h2>
            </div>
            <div className="mt-4 space-y-4 xl:col-start-1 xl:row-start-3 xl:mt-0">
              <p>
                Je vous présente les différents services que je propose. Mon but : concrétiser vos projets !
              </p>
              <p>
                Un nouveau site internet, un bug ou une mise à jour à gérer, une refonte complète ou partielle de votre site : dans tous les cas, je reste à votre disposition et je donne le meilleur de moi-même.
              </p>
            </div>
          </div>

          {/* Bloc 2 : les 4 cartes */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              xl:col-start-2
              xl:row-span-6
              xl:row-start-1
              xl:grid-rows-[1fr_1fr_auto]
              gap-3
              md:gap-4
              lg:gap-5
            "
          >
            {services.map(({ accroche, title, description, image, link, gridClass, featured, points, price, imageClass }) => (
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

                {/* Dessin : toujours calé en bas à droite */}
                <img
                  src={image}
                  alt=""
                  aria-hidden="true"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                  className={
                    featured
                      ? "pointer-events-none absolute right-5 bottom-5 h-[55%] w-auto max-w-none origin-bottom-right transition-transform duration-500 group-hover:scale-105"
                      : `pointer-events-none absolute object-contain object-right-bottom p-3 transition-transform duration-500 group-hover:scale-105 ${imageClass ?? "inset-0 h-full w-full"}`
                  }
                />

                {/* Contenu : même structure pour toutes les cartes */}
                <div className="relative z-10 flex h-full flex-col p-4 lg:p-5">
                  {/* En-tête : accroche sous le titre sur mobile, à droite du titre dès 640 px
                      (repasse dessous si la place manque) */}
                  <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-4">
                    <h3 className="!m-0 text-white">{title}</h3>
                    <p className="!m-0 text-sm text-[#E9C46A]">{accroche}</p>
                  </div>

                  {/* Description */}
                  <p className={`!mt-3 text-slate-300 ${featured ? "" : "max-w-[60%]"}`}>
                    {description}
                  </p>

                  {/* Points clés (grande carte), juste sous la description */}
                  {points && (
                    <ul className="mt-4 space-y-2 text-[length:var(--fs-p)] text-slate-300">
                      {points.map((point) => (
                        <li key={point} className="flex items-center gap-2">
                          <Check className="h-4 w-4 shrink-0 text-[#E9C46A]" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Action en bas de la carte (toute la carte est cliquable) */}
                  <div className="mt-auto pt-4">
                    {price && <p className="!m-0 text-lg text-white">{price}</p>}
                    <Link
                      to={link}
                      className={`mt-1 inline-block text-sm font-semibold after:absolute after:inset-0 ${
                        featured ? "text-[#E9C46A]" : "text-sky-400"
                      }`}
                    >
                      {featured ? "Voir l'offre →" : "Découvrir →"}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bloc 3 : paragraphes 3 et 4 + boutons */}
          <div className="section-intro max-w-none xl:contents">
            <div className="space-y-4 xl:col-start-1 xl:row-start-4 xl:mt-4">
              <p>
                Chaque service est pensé pour rester compréhensible par tous, utile et facile à maintenir dans le temps.
              </p>
              <p>
                N’hésitez pas à me contacter pour toute question, quelle qu’elle soit.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 xl:col-start-1 xl:row-start-6 xl:mt-0">
              <Link to="/contact" className="btn-primary btn-gold">
                Écrivez-moi
              </Link>
              <Link to="/services" className="btn-primary">
                Voir tous les services →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}