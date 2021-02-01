import express from 'express'
import cors from 'cors'
import { deleteUser, getAllUsers, login, signup } from './controller/userController'

const app = express()

app.use(express.json())
app.use(cors())

app.put('/signup', signup)
app.put('/login', login)
app.get('/all', getAllUsers)
app.delete('/:id', deleteUser)

app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`)
})