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

  //UPDATE FORM
  const [editingId, setEditingId] = useState<number | null>(null)

function startEdit(project: Project) {
  setEditingId(project.id)
  setName(project.name)
  setGithubUrl(project.github_url)
  setLiveUrl(project.live_url)
  setStack(project.stack.join(", "))
}

  async function updateProject(id: number) {
  const updatedProject = {
    name,
    github_url: githubUrl,
    live_url: liveUrl,
    stack: stack.split(",").map(item => item.trim())
  }

  const response = await fetch(`http://localhost:3001/projects/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedProject)
  })

  const data = await response.json()

  setProjects(projects.map(project =>
    project.id === id ? data : project
  ))

  setEditingId(null)
  setName("")
  setGithubUrl("")
  setLiveUrl("")
  setStack("")
}
function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault()

  if (editingId !== null) {
    updateProject(editingId)
  } else {
    handleCreateProject()
  }
}
// CREATE FORM
const handleCreateProject = () => {
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
      <form onSubmit={handleSubmit}>
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

        <button type="submit">
  {editingId !== null ? "Mettre à jour" : "Create project"}
</button>
      </form>
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.name}</h3>
          <p>{project.github_url}</p>
          <p>{project.live_url}</p>
          <p>{project.stack.join(", ")}</p>
          <button onClick={() => handleDeleteProject(project.id)}>
  Delete
</button>
<button onClick={() => startEdit(project)}>
  Modifier
</button>
        </div>
      ))}
    </div>
  )

}