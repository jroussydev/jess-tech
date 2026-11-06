import type { ReactNode } from "react"
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router"

import "leaflet/dist/leaflet.css"
import "./index.css"
import "@fontsource-variable/lemonada/wght.css"
import "@fontsource-variable/josefin-sans/wght.css"
import "@fontsource-variable/orbitron/wght.css"

import Header from "./components/Header"
import Footer from "./components/Footer"

export function meta() {
  return [
    { title: "Jess Tech | Développeuse web dans l'Aisne" },
    {
      name: "description",
      content:
        "Création de sites internet, refonte, maintenance et assistance technique par Jess Tech, développeuse web freelance à Beaurieux (Aisne).",
    },
  ]
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function Root() {
  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}