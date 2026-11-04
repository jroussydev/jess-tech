import type { ReactNode } from "react"
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router"

import "leaflet/dist/leaflet.css"
import "./index.css"
import "@fontsource-variable/lemonada/wght.css"
import "@fontsource-variable/josefin-sans/wght.css"
import "@fontsource-variable/orbitron/wght.css"

import Header from "./components/Header"
import Footer from "./components/Footer"

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Jess Tech</title>
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