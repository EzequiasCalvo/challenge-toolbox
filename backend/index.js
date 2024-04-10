import express from 'express'
import filesRouter from './routes/filesRouter.js'

const app = express()
const PORT = 4000

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')

  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    return res.status(200).json({})
  }

  next()
})

app.use('/files', filesRouter)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

export const server = app
