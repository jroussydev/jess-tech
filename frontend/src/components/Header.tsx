import Navbar from "./Navbar"
import Logo from "./Logo"

export default function Header() {
  return (
    <header className="relative z-50 bg-[#020817]/95 border-b border-blue-500/20">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <Logo className="h-12 lg:h-16" />

          <div className="min-w-0">
            <h1 className="text-base font-bold text-white sm:text-xl">
              JESS <span className="text-[#0D5BFF]">TECH</span>
            </h1>

            <p className="text-[10px] text-slate-300 sm:text-xs">
              Développement web & assistante technique
            </p>
          </div>
        </div>
          <Navbar />
      </div>
    </header>
  )
}