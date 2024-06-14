import express from 'express'
import 'dotenv/config'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json({ ok: true })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log('servidor escuchando...')
})