import { Routes, Route } from "react-router-dom"
import Home from "./pages/public/Home.tsx"
import Dashboard from "./pages/admin/Dashboard.tsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App