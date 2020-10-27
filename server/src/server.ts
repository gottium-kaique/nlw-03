import 'reflect-metadata'

import express from 'express'
import cors from 'cors'
import { join } from 'path'

import 'express-async-errors'
import routes from './routes'
import errorHandler from './errors/handle'

import './database/connect'

const app = express()
const port = 3333

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errorHandler)
app.use('/uploads', express.static(join(__dirname, '..', 'uploads')))

app.use((req, res) => {
  return res.sendStatus(404)
})

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
