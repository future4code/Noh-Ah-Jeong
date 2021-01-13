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

// RAW
const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)

    return result[0][0]
}

const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
    `)

    return result[0][0]
}

const countActorByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) AS count FROM Actor WHERE gender = '${gender}'
    `)

    const count = result[0][0].count
    return count
}

// Query Builders
const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
): Promise<void> => {
    await connection
        .insert({
            id: id,
            name: name,
            salary: salary,
            birth_date: dateOfBirth,
            gender: gender,
        })
        .into("Actor")
}

const updateSalaryById = async (id: string, salary: number): Promise<void> => {
    await connection("Actor")
        .update({ salary: salary })
        .where({ id })
}

const deleteActorById = async (id: string): Promise<void> => {
    await connection("Actor")
        .delete()
        .where({ id })
}

const getAverageSalaryByGender = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .avg("salary as average_salary")
        .where({ gender })

    return result[0].average_salary
}

// Endpoints
app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const actor = await getActorById(id)

        res.status(200).send(actor)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

app.get("/actor", async (req: Request, res: Response) => {
    try {
        const gender = req.query.gender as string
        const count = await countActorByGender(gender)

        res.status(200).send({ quantity: count })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

app.put("/actor", async (req: Request, res: Response) => {
    try {
        await createActor(
            req.body.id,
            req.body.name,
            req.body.salary,
            new Date(req.body.dateOfBirth),
            req.body.gender
        )

        res.status(200).send({ message: "Created" })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

app.post("/actor", async (req: Request, res: Response) => {
    try {
        await updateSalaryById(
            req.body.id,
            req.body.salary
        )

        res.status(200).send({ message: "Updated" })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})



// Server
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
})