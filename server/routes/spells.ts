import { Router } from 'express'
import SpellsController from '../controllers/SpellsController'

const router = Router()

const { getAllSpells } = SpellsController

router.get('/spells', getAllSpells)

export default router
