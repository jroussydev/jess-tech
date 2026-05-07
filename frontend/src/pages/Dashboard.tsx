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

  //STATES
const [name, setName] = useState("")
const [githubUrl, setGithubUrl] = useState("")
const [liveUrl, setLiveUrl] = useState("")
const [stack, setStack] = useState("")

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

//DELETE BOUTON
const handleDeleteProject = (id: number) => {
  fetch(`http://localhost:3001/projects/${id}`, {
    method: "DELETE",
  }).then(() => {
    setProjects(projects.filter((project) => project.id !== id))
  })
  }

  //CREATE FORM
  const handleCreateProject = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()

  fetch("http://localhost:3001/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      github_url: githubUrl,
      live_url: liveUrl,
      stack: stack.split(",").map((item) => item.trim()),
    }),
  })
    .then((res) => res.json())
    .then((newProject) => {
      setProjects([...projects, newProject])
      setName("")
      setGithubUrl("")
      setLiveUrl("")
      setStack("")
    })
}
  // 6. AFFICHAGE
  return (
    <div>
      <h1>Dashboard</h1>
      <form onSubmit={handleCreateProject}>
        <input
          type="text"
          placeholder="Project name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type="text"
          placeholder="GitHub URL"
          value={githubUrl}
          onChange={(event) => setGithubUrl(event.target.value)}
        />

        <input
          type="text"
          placeholder="Live URL"
          value={liveUrl}
          onChange={(event) => setLiveUrl(event.target.value)}
        />
        <input
          type="text"
          placeholder="Stack"
          value={stack}
          onChange={(event) => setStack(event.target.value)}
        />

        <button type="submit">Create project</button>
      </form>
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.name}</h3>
          <p>{project.github_url}</p>
          <p>{project.live_url}</p>
          <p>{project.stack}</p>
          <button onClick={() => handleDeleteProject(project.id)}>
  Delete
</button>
        </div>
      ))}
    </div>
  )

}