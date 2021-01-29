import express from 'express'
import { AddressInfo } from 'net'
import cors from 'cors'
import knex from 'knex'
import dotenv from 'dotenv'
import { createUser } from './endpoints/createUser'
import { login } from './endpoints/login'
import { getOwnProfile } from './endpoints/getOwnProfile'
import { getProfileById } from './endpoints/getProfileById'
import { createRecipe } from './endpoints/createRecipe'
import { getRecipeById } from './endpoints/getRecipeById'

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

app.post("/signup", createUser)
app.post("/login", login)
app.get("/user/profile", getOwnProfile)
app.get("/user/:id", getProfileById)
app.post("/recipe", createRecipe)
app.get("/recipe/:id", getRecipeById)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
})