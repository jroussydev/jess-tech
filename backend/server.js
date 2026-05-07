const express = require("express")
const cors = require("cors")
const { Pool } = require("pg")

const app = express()
//DEBUG
//console.log("SERVER FILE LOADED - POST VERSION")

app.use(cors())
app.use(express.json())

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "portfolio",
  password: "postgres",
  port: 5432,
})

app.get("/projects", async (req, res) => {
  const result = await pool.query("SELECT * FROM projects")
  res.json(result.rows)
})

app.post("/projects", async (req, res) => {
  const { name, github_url, live_url, stack } = req.body

  const result = await pool.query(
    "INSERT INTO projects (name, github_url, live_url, stack) VALUES ($1, $2, $3, $4) RETURNING *",
    [name, github_url, live_url, stack]
  )

  res.json(result.rows[0])
})

app.listen(3001, () => {
  console.log("server running on port 3001")
})