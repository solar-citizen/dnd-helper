import { Request, Response, NextFunction } from 'express'
import Spells from '../models/Spells'

const { getAllSpells } = Spells

const SpellsController = {
  getAllSpells: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const spells = await getAllSpells()
      res.status(200).json(spells)
    } catch (error) {
      next(error)
    }
  },
}

export default SpellsController
