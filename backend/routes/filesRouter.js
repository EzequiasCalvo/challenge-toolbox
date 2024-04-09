import express from 'express'
import { fetchData } from '../controllers/filesController.js'

const router = express.Router()

router.get('/data', fetchData)

export default router
