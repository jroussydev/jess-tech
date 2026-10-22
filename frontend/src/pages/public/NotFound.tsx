import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <main className="section-dark section-spacing">
      <div className="site-container flex min-h-[60vh] flex-col items-center justify-center text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#2E7BFF]">
          Erreur 404
        </p>

        <h1 className="mt-4 text-3xl sm:text-4xl">
          Cette page n’existe pas
        </h1>

        <p className="mt-4 max-w-md text-white/70">
          Le lien est peut-être ancien ou mal saisi. Vous pouvez revenir à
          l’accueil ou découvrir mes services.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft size={18} />
            Retour à l’accueil
          </Link>
          <Link to="/services" className="btn-secondary">
            Voir les services
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;