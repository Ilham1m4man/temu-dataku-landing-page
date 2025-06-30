import { Request, Response, Router } from 'express'
import { pool } from './db'

export const productsRouter = Router()

productsRouter.get('/', async (_req: Request, res: Response) => {
  const { rows } = await pool.query(
    'SELECT id, name, price, image_url FROM products ORDER BY created_at DESC',
  )
  res.json(rows)
})