import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navbarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div ref={navbarRef}>
      {/* Menu desktop */}
      <nav className="hidden md:flex items-center gap-8">
        <Link to="/" className="text-slate-200 hover:text-[#0D5BFF] transition">
          Accueil
        </Link>

        <Link to="/services" className="text-slate-200 hover:text-[#0D5BFF] transition">
          Services
        </Link>

        <Link to="/realisations" className="text-slate-200 hover:text-[#0D5BFF] transition">
          Réalisations
        </Link>

        <Link to="/about" className="text-slate-200 hover:text-[#0D5BFF] transition">
          A propos
        </Link>

        <Link to="/contact" className="text-slate-200 hover:text-[#0D5BFF] transition">
          Contact
        </Link>
      </nav>

      {/* Burger mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col gap-1 md:hidden"
      >
        <span className="h-0.5 w-6 bg-white" />
        <span className="h-0.5 w-6 bg-white" />
        <span className="h-0.5 w-6 bg-white" />
      </button>

      {/* Menu mobile */}
      {isOpen && (
        <div className="absolute left-0 top-full z-50 w-full px-4 pt-4 md:hidden">
          <div className="rounded-2xl border border-blue-500/20 bg-[#020817] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <div className="flex flex-col gap-4">
              <Link to="/" onClick={() => setIsOpen(false)}
 className="rounded-xl px-4 py-3 text-slate-100 hover:bg-blue-500/10">
                Accueil
              </Link>

              <Link to="/services" onClick={() => setIsOpen(false)}
 className="rounded-xl px-4 py-3 text-slate-100 hover:bg-blue-500/10">
                Services
              </Link>

              <Link to="/realisations" onClick={() => setIsOpen(false)}
 className="rounded-xl px-4 py-3 text-slate-100 hover:bg-blue-500/10">
                Réalisations
              </Link>

              <Link to="/about" onClick={() => setIsOpen(false)}
 className="rounded-xl px-4 py-3 text-slate-100 hover:bg-blue-500/10">
                A propos
              </Link>

              <Link to="/contact" onClick={() => setIsOpen(false)}
 className="rounded-xl bg-[#0D5BFF] px-4 py-3 text-center font-semibold text-white">
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}