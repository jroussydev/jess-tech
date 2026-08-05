import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App.tsx"
import "leaflet/dist/leaflet.css";
import "./index.css";
import "@fontsource-variable/lemonada/wght.css";
import "@fontsource-variable/josefin-sans/wght.css";
import "@fontsource-variable/orbitron/wght.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)