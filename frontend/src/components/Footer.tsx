import { Link } from "react-router-dom"
import Logo from "./Logo";
import { PenTool, Monitor, Wrench, LifeBuoy, BookOpen, Handshake, StarCheck, UserRound, Mail, PhoneCall, MapPinned } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-slate-800 text-slate-300">
      {/* Bloc principal */}
      <div className="mx-auto max-w-[1500px] px-4 py-10 sm:px-6 lg:px-8">
        {/* Colonnes */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Bloc Jess Tech */}
          <div>
            <div className="flex items-center gap-5">
              <Logo className="h-20" />

              <div>
                <h2 className="text-xl font-bold text-white">
                  JESS <span className="text-[#0D5BFF]">TECH</span>
                </h2>

                <p className="text-xs text-slate-300">
                  Développement web & assistante technique
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-sm leading-7">
              Des solutions web claires, humaines et bien construites.
            </p>
          </div>

          {/* Bloc navigation */}
          <div>
            <h3 className="font-bold text-xl text-blue-500">Navigation</h3>

            <div className="mt-5 flex flex-col gap-2">
              <div className="flex gap-2"><BookOpen/><span>Accueil</span></div>
              <div className="flex gap-2"><Handshake /><span>Services</span></div>
              <div className="flex gap-2"><StarCheck /><span>Réalisations</span></div>
              <div className="flex gap-2"><UserRound /><span>À propos</span></div>
              <div className="flex gap-2"><Mail /><span>Contact</span></div>
            </div>
          </div>

          {/* Bloc services */}
          <div>
            <h3 className="font-bold text-xl text-blue-500">Services</h3>

            <div className="mt-5 flex flex-col gap-2">
              <div className="flex gap-2"><PenTool/><span>Sites vitrines</span></div>
              <div className="flex gap-2"><Monitor/><span>Refonte de site</span></div>
              <div className="flex gap-2"><Wrench/><span>Maintenance</span></div>
              <div className="flex gap-2"><LifeBuoy/><span>Assistance technique</span></div>
            </div>
          </div>

          {/* Bloc contact */}
          <div>
            <h3 className="font-bold text-xl text-blue-500">Contact</h3>

            <div className="mt-5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Mail />
                <a href="mailto:contact@jesstech.fr">contact@jesstech.fr</a>
              </div>

              <div className="flex items-center gap-3">
                <PhoneCall />
                <a href="tel:0767876316">07 67 87 63 16</a>
              </div>

              <div className="flex items-center gap-3">
                <MapPinned />
                <span>Basée en France</span>
              </div>
            </div>
          </div>
        </div>

        {/* Barre du bas */}
        <div className="mt-10 border-t border-slate-800 pt-6">
          <div className="flex flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
            <p>© 2026 Jess Tech - Tous droits réservés</p>

            <div className="flex gap-2">
              <Link
                to="/MentionLegal"
                className="">Mentions légales</Link>
              <span>|</span>
              <Link
                to="/Cgv"
                className="">Conditions Générales de Vente</Link>
              <span>|</span>
              <Link
                to="/PolitiqueDeConfidentialite"
                className="">Politique de confidentialité</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}