import express from 'express'
import { AddressInfo } from 'net'
import cors from 'cors'
import knex from 'knex'
import dotenv from 'dotenv'
import { createUser } from './endpoints/createUser'
import { login } from './endpoints/login'
import { getUserById } from './endpoints/getUserById'
import { deleteUserById } from './endpoints/deleteUserById'
import { getIdAndEmailById } from './endpoints/getIdAndEmailById'

const app = express()

app.use(express.json())
app.use(cors())

dotenv.config()

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
})

// Endpoints
app.post("/signup", createUser)
app.post("/login", login)
app.get("/user/profile", getUserById)
app.delete("/user/:id", deleteUserById)
app.get("/user", getIdAndEmailById)

const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})