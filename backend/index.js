import express from 'express'
import filesRouter from './routes/filesRouter.js'

const app = express()
const PORT = 4000

app.use('/files', filesRouter)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

export const server = app
