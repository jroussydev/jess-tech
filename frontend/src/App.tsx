import { Routes, Route } from "react-router-dom"

import Header from "./components/Header.tsx"
import Footer from "./components/Footer.tsx"
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/public/Home.tsx"
import Services from "./pages/public/Services.tsx"
import Realisations from "./pages/public/Realisations.tsx"
import Contact from "./pages/public/Contact.tsx"
import About from "./pages/public/About.tsx"
import DansLesCoulisses from "./pages/public/DansLesCoulisses.tsx"

import CreationSiteInternet from "./pages/services/CreationSiteInternet"
import RefonteSite from "./pages/services/RefonteSite"
import MaintenanceSiteWeb from "./pages/services/MaintenanceSiteWeb.tsx"
import DeveloppementSurMesure from "./pages/services/DeveloppementSurMesure.tsx"
import AssistanceTechnique from "./pages/services/AssistanceTechnique.tsx"
import DiagnosticTechnique from "./pages/services/DiagnosticTechnique.tsx";

import PolitiqueDeConfidentialite from "./pages/legal/PolitiqueDeConfidentialite.tsx"
import MentionLegal from "./pages/legal/MentionLegal.tsx"
import Cgv from "./pages/legal/Cgv.tsx"

import Localisation from "./pages/public/Localisation.tsx"
import CityPage from "./pages/public/CityPage.tsx";
import TarifsTransparents from "./pages/public/TarifsTransparents.tsx"

import NotFound from "./pages/public/NotFound.tsx"

{/*import Dashboard from "./pages/admin/Dashboard.tsx" */}

function App() {
  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/dans-les-coulisses" element={<DansLesCoulisses />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/services/creation-site-internet" element={<CreationSiteInternet />} />
        <Route path="/services/refonte-site" element={<RefonteSite />} />
        <Route path="/services/maintenance-site-web" element={<MaintenanceSiteWeb />} />
        <Route path="/services/developpement-sur-mesure" element={<DeveloppementSurMesure />} />
        <Route path="/services/assistance-technique" element={<AssistanceTechnique />} />
        <Route path="/services/diagnostic-technique" element={<DiagnosticTechnique />} />

        <Route path="/politique-de-confidentialite" element={<PolitiqueDeConfidentialite />} />
        <Route path="/mentions-legales" element={<MentionLegal />} />
        <Route path="/cgv" element={<Cgv />} />

        <Route path="/localisation" element={<Localisation />} />
        <Route path="/localisation/:ville" element={<CityPage />} />
        <Route path="/tarifs" element={<TarifsTransparents />} />

{/* NotFound reste en dernière position */}
        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer />
    </div>
  )
}

export default App