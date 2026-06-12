export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-slate-200 mt-16 text-slate-300">

{/* Bloc principal */}
      <div className="max-w-7xl mx-auto px-6 py-16">
{/* Colonnes */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Bloc Jess tech */}
          <div className="">
            <div>
              Logo
              Jess Tech
            </div>
            <div>
              Des solutions web claires,
              humaines et bien construites.
            </div>
          </div>
          {/* Bloc navigation */}
          <div className="grid grid-cols-1 gap-4">
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
          <div className="grid grid-cols-1 gap-4">
            <h1 className="font-bold">Services</h1>
            <div className="flex flex-col space-y-1 -mt-8">
              <span></span>Sites vitrines
              <span></span>Refonte de site
              <span></span>Maintenance
              <span></span>Assistance technique
            </div>
          </div>
          {/* Bloc contact */}
          <div className="grid grid-cols-1 gap-4">
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
        <div className="border-t border-slate-800 mt-12 pt-6">
          © 2026 Jess Tech
          Tous droits réservés

          Mentions légales
          Politique de confidentialité
        </div>
      </div>
    </footer>
  )
}