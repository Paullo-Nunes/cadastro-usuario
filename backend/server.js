import 'dotenv/config'
import process from 'node:process'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

const usuarioSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 1 },
  email: { type: String, required: true, trim: true },
})

const Usuario = mongoose.model('Usuario', usuarioSchema, 'usuarios')

app.get('/usuario', async (req, res, next) => {
  try {
    const usuarios = await Usuario.find().lean()
    res.json(usuarios.map(({ _id, name, age, email }) => ({
      id: _id.toString(),
      name,
      age,
      email,
    })))
  } catch (error) {
    next(error)
  }
})

app.post('/usuario', async (req, res, next) => {
  try {
    const { name, age, email } = req.body

    if (!name?.trim() || !Number.isInteger(Number(age)) ||
        Number(age) < 1 || !email?.trim()) {
      return res.status(400).json({ message: 'Nome, idade e email válidos são obrigatórios.' })
    }

    const usuario = await Usuario.create({
      name: name.trim(),
      age: Number(age),
      email: email.trim(),
    })

    res.status(201).json({
      id: usuario._id.toString(),
      name: usuario.name,
      age: usuario.age,
      email: usuario.email,
    })
  } catch (error) {
    next(error)
  }
})

app.delete('/usuario/:id', async (req, res, next) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: 'ID inválido.' })
    }

    const usuario = await Usuario.findByIdAndDelete(req.params.id)

    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado.' })
    }

    res.status(204).end()
  } catch (error) {
    next(error)
  }
})

app.use((error, req, res, next) => {
  console.error(error)
  if (res.headersSent) {
    return next(error)
  }

  res.status(500).json({ message: 'Erro interno no servidor.' })
})

await mongoose.connect(process.env.MONGODB_URI)
app.listen(port, () => console.log(`API rodando na porta ${port}`))