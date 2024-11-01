import { Router, Request, Response } from "express";

const pageRouter = Router()

// Home page
pageRouter.get('/', (req: Request, res: Response) => {
  res.status(200).render('index', { title: 'Home'})
})

// About page
pageRouter.get('/about', (req: Request, res: Response) => {
  res.status(200).render('about', { title: 'About Us'})
})

export default pageRouter