import express from "express"
import bcrypt from "bcrypt"
import dotenv from "dotenv"
dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

app.get("/", (req, res) => {
  res
    .status(200)
    .type("html")
    .send("<h1>MyBlog</h1><p>Backend is running</p>")
})








app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
} )