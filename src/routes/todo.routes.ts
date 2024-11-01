import { Router, Request, Response } from 'express'
import { Todo, TodoRequestBody } from '../types/todo'

const todoRouter = Router()

// In-memory database
let todos: Todo[] = [
  { id: '123', todoText: 'Wash garden', completed: false }
]

// Fetch todos
todoRouter.get('/', (req: Request, res: Response) => {
  res.status(200).render('todos', { todos, title: 'To Dos' })
})

// Add todo
todoRouter.post('/add', (req: Request<{}, {}, TodoRequestBody>, res: Response) => {
  console.log(req.body)
  const newTodo: Todo = {
    id: '456',
    todoText: req.body.todoText,
    completed: false
  }
  todos.push(newTodo)
  res.status(201).render('thank_you', { title: 'To Do Added!' })
})

export default todoRouter