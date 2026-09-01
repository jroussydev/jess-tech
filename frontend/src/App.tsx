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
        <Route path="/About" element={<About />} />
        <Route path="/DansLesCoulisses" element={<DansLesCoulisses />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/CreationSiteInternet" element={<CreationSiteInternet />} />
        <Route path="/RefonteSite" element={<RefonteSite />} />
        <Route path="/MaintenanceSiteWeb" element={<MaintenanceSiteWeb />} />
        <Route path="/DeveloppementSurMesure" element={<DeveloppementSurMesure />} />
        <Route path="/AssistanceTechnique" element={<AssistanceTechnique />} />
        <Route path="/DiagnosticTechnique" element={<DiagnosticTechnique />} />

        <Route path="/PolitiqueDeConfidentialite" element={<PolitiqueDeConfidentialite />} />
        <Route path="/MentionLegal" element={<MentionLegal />} />
        <Route path="/Cgv" element={<Cgv />} />

        <Route path="/Localisation" element={<Localisation />} />
        <Route path="/localisation/:ville" element={<CityPage />} />
        <Route path="/TarifsTransparents" element={<TarifsTransparents />} />

      </Routes>

      <Footer />
    </div>
  )
}

export default App