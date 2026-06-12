import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-slate-200 text-slate-300">

{/* Bloc principal */}
      <div className="max-w-7xl mx-auto px-0 py-6">
{/* Colonnes */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Bloc Jess tech */}
          <div className="">
        <div className="flex items-center gap-8">
          <div className="text-3xl font-black text-white">
            <Logo />
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              JESS <span className="text-[#0D5BFF]">TECH</span>
            </h1>

            <p className="text-xs text-slate-300">
              Développement web & assistante technique
            </p>
          </div>
        </div>
            <div className="pt-6">
              Des solutions web claires,
              humaines et bien construites.
            </div>
          </div>
          {/* Bloc navigation */}
          <div className="grid grid-cols-1 gap-4 ml-26">
            <h1 className="font-bold">Navigation</h1>
            <div className="flex flex-col space-y-1">
            <span>Accueil</span>
            <span>Services</span>
            <span>Réalisations</span>
            <span>À propos</span>
            <span>Contact</span>
            </div>
          </div>
          {/* Bloc services */}
          <div className="grid grid-cols-1 gap-4 ml-18">
            <h1 className="font-bold">Services</h1>
            <div className="flex flex-col space-y-1 -mt-8">
              <span></span>Sites vitrines
              <span></span>Refonte de site
              <span></span>Maintenance
              <span></span>Assistance technique
            </div>
          </div>
          {/* Bloc contact */}
          <div className="grid grid-cols-1 gap-4 ml-20">
            <h1 className="font-bold">Contact</h1>
            <div className="flex flex-col space-y-1 -mt-10">
              <div className="flex items-center gap-2">
                <img src="/svg/envelope.svg" alt="Enveloppe décoratif" className="w-7 h-7"/>
                <a href="mailto:contact@jesstech.fr">
                  
                  contact@jesstech.fr
                </a>
              </div>
              <div className="flex items-center gap-2">
                <img src="/svg/phone-call.svg" alt="Telephone décoratif" className="w-7 h-7"/>
                <a href="tel:0767876316">
                  07 67 87 63 16
                </a>
              </div>
              <div className="flex items-center gap-2">
                <img src="/svg/land-layer-location.svg" alt="Localisation décoratif" className="w-8 h-8"/>
                <span>
                  Basée en France
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Barre du bas */}
        <div className="border-t border-slate-800 mt-8 pt-6">
          <div className="flex items-center gap-155">
          <div>
          © 2026 Jess Tech - Tous droits réservés
</div>
<div>
          <a href="">Mentions légales</a> | <a href="">Politique de confidentialité</a>
        </div>
        </div>
      </div>
      </div>
    </footer>
  )
}