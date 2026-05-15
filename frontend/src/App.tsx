import { Routes, Route } from "react-router-dom"

import Header from "./components/Header.tsx"
import Footer from "./components/Footer.tsx"
import Services from "./pages/public/Services.tsx"
import Contact from "./pages/public/Contact.tsx"
import Realisations from "./pages/public/Realisations.tsx"

import Home from "./pages/public/Home.tsx"
import Dashboard from "./pages/admin/Dashboard.tsx"

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App