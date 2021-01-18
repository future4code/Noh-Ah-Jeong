import express, { Express, Request, Response } from "express"
import knex from "knex"
import cors from "cors"
import dotenv from "dotenv"
import { AddressInfo } from "net"
import { getAllUsers } from "./endpoints/getAllUsers"
import { getUsersByName } from "./endpoints/getUsersByName"
import { getUsersByType } from "./endpoints/getUsersByType"
import { getUsersOrderedByNameOrType } from "./endpoints/getUsersOrderedByNameOrType"

dotenv.config()

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
})

const app: Express = express()
app.use(express.json())
app.use(cors())

app.get('/users/all', getAllUsers)

// Exercício 1.a.
app.get('/users/search', getUsersByName)

// Exercício 1.b.
app.get('/users/:type', getUsersByType)

// Exercício 2.
app.get('/users/order', getUsersOrderedByNameOrType)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
});