import { Router } from 'express'
import spells from './spells'

const router = Router()

router.use('/', spells)

export default router
