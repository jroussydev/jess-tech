// 1. TYPES (description des données)
type Project = {
  id: number
  name: string
  github_url: string
  live_url: string
  stack: string[]
}

// 2. IMPORTS
import { useEffect, useState } from "react"

// 3. COMPOSANT
export default function Dashboard() {

  // 4. STATE
  const [projects, setProjects] = useState<Project[]>([])

  // 5. CHARGEMENT API
  //useEffect(() => {
   // fetch("http://localhost:3001/projects")
    //  .then(res => res.json())
    //  .then(data => setProjects(data))
 // }, [])
useEffect(() => {
  fetch("http://localhost:3001/projects")
    .then(res => {
      console.log("STATUS:", res.status)
      return res.json()
    })
    .then(data => {
      console.log("DATA REÇUE:", data)
      setProjects(data)
    })
    .catch(err => console.log("ERREUR FETCH:", err))
}, [])

//Bouton DELETE
const handleDeleteProject = (id: number) => {
  fetch(`http://localhost:3001/projects/${id}`, {
    method: "DELETE",
  }).then(() => {
    setProjects(projects.filter((project) => project.id !== id))
  })
  }

  // 6. AFFICHAGE
  return (
    <div>
      <h1>Dashboard</h1>

      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.name}</h3>
          <p>{project.github_url}</p>
          <p>{project.live_url}</p>
          <button onClick={() => handleDeleteProject(project.id)}>
  Delete
</button>
        </div>
      ))}
    </div>
  )

}