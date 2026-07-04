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
import MaintenanceSiteWeb from "./pages/services/MaintenanceSiteWeb.tsx"
import DeveloppementWebSurMesure from "./pages/services/DeveloppementWebSurMesure.tsx"
import AssistanceTechnique from "./pages/services/AssistanceTechnique.tsx"

import PolitiqueDeConfidentialite from "./pages/legal/PolitiqueDeConfidentialite.tsx"
import MentionLegal from "./pages/legal/MentionLegal.tsx"
import Cgv from "./pages/legal/Cgv.tsx"


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
        <Route path="/MaintenanceSiteWeb" element={<MaintenanceSiteWeb />} />
        <Route path="/DeveloppementWebSurMesure" element={<DeveloppementWebSurMesure />} />
        <Route path="/AssistanceTechnique" element={<AssistanceTechnique />} />

        <Route path="/PolitiqueDeConfidentialite" element={<PolitiqueDeConfidentialite />} />
        <Route path="/MentionLegal" element={<MentionLegal />} />
        <Route path="/Cgv" element={<Cgv />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App