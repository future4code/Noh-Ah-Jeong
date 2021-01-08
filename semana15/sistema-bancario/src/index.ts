import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

type user = {
    username: string,
    cpf: string,
    birthDate: string,
    balance: number,
    extract: transaction[]
}

const users: user[] = [
    {
        username: "Leon",
        cpf: "11111111111",
        birthDate: "21/07/1983",
        balance: 0,
        extract: []
    }
]

type transaction = {
    value: number,
    date: string,
    description: string
}

app.post('/users', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const requestBody: user = {
            username: req.body.username,
            cpf: req.body.cpf,
            birthDate: req.body.birthDate,
            balance: 0,
            extract: []
        }
        if (!requestBody.username || !requestBody.cpf || !requestBody.birthDate) {
            errorCode = 422
            throw new Error("Algum campo está inválido. Preencha corretamente.")
        }

        const birthYear = (req.body.birthDate).substring((req.body.birthDate).length - 4)
        if ((2021 - Number(birthYear)) < 18) {
            throw new Error("Usuário tem menos de 18 anos.")
        }

        if (users.find(user => user.cpf === requestBody.cpf)) {
            throw new Error("CPF já cadastrado.")
        }

        users.push(requestBody)
        res.status(200).send("Usuário cadastrado.")
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

app.get('/users', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        res.status(200).send(users)
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

app.get('/users/:cpf', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const foundUser = users.find(user => user.cpf === req.params.cpf)
        if (!foundUser) {
            errorCode = 422
            throw new Error("CPF inválido")
        }

        res.status(200).send({ balance: foundUser.balance })
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

app.put('/addToBalance', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const foundUsername = users.find(user => user.username === req.body.username) as user
        const foundUserCpf = (foundUsername.cpf === req.body.cpf)

        if (!foundUsername || !foundUserCpf) {
            errorCode = 422
            throw new Error("Nome e/ou CPF inválido(s).")
        }

        foundUsername.balance = foundUsername.balance + Number(req.body.value)

        const operation = {
            value: Number(req.body.value),
            date: Date(),
            description: "Depósito de dinheiro."
        }

        foundUsername.extract.push(operation)

        res.status(200).send("Crédito enviado.")
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})