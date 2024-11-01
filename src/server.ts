import express, { Request, Response } from 'express'
import pageRouter from './routes/page.routes'
import todoRouter from './routes/todo.routes'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

// Create server
const app = express()

// Set view engine to ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../src/views'))

// Middleware
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

// Routes
app.use("/", pageRouter)
app.use("/todos", todoRouter)

// Start server
const PORT: number = Number(process.env.PORT || 5000)
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`)
})