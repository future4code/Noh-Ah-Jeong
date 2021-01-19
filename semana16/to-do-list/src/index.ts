import express, { Request, Response } from 'express'
import { AddressInfo } from 'net'
import cors from 'cors'
import knex from 'knex'
import dotenv from 'dotenv'

const app = express()

app.use(express.json())
app.use(cors())

dotenv.config()

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
})

// 1. Criar usuário
const createUser = async (
    id: string,
    name: string,
    nickname: string,
    email: string,
): Promise<void> => {
    await connection
        .insert({
            id: id,
            name: name,
            nickname: nickname,
            email: email,
        })
        .into("Accounts")
}

app.put("/user", async (req: Request, res: Response) => {
    let errorCode: number = 400

    const dateNow: Date = new Date()
    const uniqueString: string = dateNow.getTime().toString()

    try {
        if (!req.body.name || !req.body.nickname || !req.body.email) {
            errorCode = 422
            throw new Error("Algum campo está inválido. Preencha corretamente.")
        }

        await createUser(
            uniqueString,
            req.body.name,
            req.body.nickname,
            req.body.email
        )

        res.status(200).send({ message: "Usuário criado." })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
})

// 2. Pegar usuário pelo id
const getUserById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT id, nickname FROM Accounts WHERE id = '${id}'
    `)

    return result[0][0]
}

app.get("/user/:id", async (req: Request, res: Response) => {
    let errorCode: number = 400
    
    try {
        const id = req.params.id

        if (!id) {
            errorCode = 422
            throw new Error("Algum campo está inválido. Preencha corretamente.")
        }

        const user = await getUserById(id)

        res.status(200).send(user)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

// Servidor
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
})