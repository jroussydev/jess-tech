import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="relative z-50 border-b border-blue-500/20 bg-[#020817]/95">
      
      <div
        className="
          flex
          w-full
          items-center
          justify-between
          px-4
          py-4
          sm:px-6
          lg:px-8
        "
      >
        {/* Logo / identité */}
        <Link to="/" aria-label="Retour à l'accueil">
          <div className="flex min-w-0 items-center gap-3">
            <Logo className="h-12 lg:h-16" />

            <div className="min-w-0">
              <h1 className="font-logo font-semibold tracking-[0.04em] text-slate-100 sm:text-xl">
                JESS <span className="text-[#0D5BFF]">TECH</span>
              </h1>

              <p className="text-[10px] text-slate-300 sm:text-xs">
                Développement web & assistante technique
              </p>
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <Navbar />
      </div>
    </header>
  );
}