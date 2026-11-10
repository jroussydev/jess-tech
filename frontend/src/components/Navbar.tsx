import { useState, useEffect, useRef } from "react"
import { NavLink } from "react-router"

const liens = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/tarifs", label: "Tarifs" },
  { to: "/dans-les-coulisses", label: "En coulisses" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navbarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={navbarRef}>
      {/* Menu desktop */}
      <nav className="hidden items-center gap-8 md:flex">
        {liens.map((lien) => (
          <NavLink
            key={lien.to}
            to={lien.to}
            end={lien.to === "/"}
            className="nav-link text-slate-200 transition hover:text-white"
          >
            {lien.label}
          </NavLink>
        ))}
      </nav>

      {/* Burger mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col gap-1 md:hidden"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
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
              {liens.map((lien) => (
                <NavLink
                  key={lien.to}
                  to={lien.to}
                  end={lien.to === "/"}
                  onClick={() => setIsOpen(false)}
                  className={
                    lien.to === "/contact"
                      ? "rounded-xl bg-[#0D5BFF] px-4 py-3 text-center font-semibold text-white"
                      : "rounded-xl px-4 py-3 text-slate-100 hover:bg-blue-500/10"
                  }
                >
                  {lien.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}