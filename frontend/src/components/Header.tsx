import { Link } from "react-router";
import Navbar from "./Navbar";
import Banniere from "./Banniere";

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
            <Banniere variant="header" />

            
          </div>
        </Link>

        {/* Navigation */}
        <Navbar />
      </div>
    </header>
  );
}