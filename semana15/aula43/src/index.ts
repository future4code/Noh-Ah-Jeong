import express, { Request, Response } from 'express'
import cors from 'cors'
import { users } from './usersList'

const app = express()

app.use(express.json())
app.use(cors())

// 1.a. O método GET.
// 1.b. Com um caminho que faz sentido para o que está sendo requisitado.
app.get('/allUsers', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        res.status(200).send(users)
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

// 2.a. Com o query, porque a requisição se trata de uma busca.
// 2.b. Acredito que usando o enum resolva a questão.
app.get('/user', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const type: string = req.query.type as string
        if (!type) {
            errorCode = 422
            throw new Error("Tipo inválido!")
        }

        const matchedUsers = users.filter(user => user.type.toLowerCase() === type.toLowerCase())
        if (matchedUsers.length === 0) {
            errorCode = 404
            throw new Error("Nenhum usuário do tipo encontrado!")
        }
        res.status(200).send(matchedUsers)
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

// 3.a. O parâmetro path.
app.get('/user/:name', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const name: string = req.params.name as string

        const matchedUser = users.find(user => user.name.toLowerCase() === name.toLowerCase())
        if (!matchedUser) {
            errorCode = 404
            throw new Error("Nenhum usuário encontrado!")
        }
        res.status(200).send(matchedUser)
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

// 4.a. Nada mudou, a requisição continua funcionando.
// 4.b. Sim, pois a requisição somente adiciona um novo usuário.
app.put('/user', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const requestBody = {
            id: Date.now(),
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            age: req.body.age,
        }
        if (!requestBody.name || !requestBody.email || !requestBody.type || !requestBody.age) {
            errorCode = 422
            throw new Error("Faltou algum campo!")
        }
        users.push(requestBody)
        res.status(200).send("Usuário adicionado!")
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

// 5.
app.put('/changeLastUser', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const requestBody = {
            name: req.body.name
        }
        const lastUserIndex = users.length - 1
        users[lastUserIndex].name = `${requestBody.name}-ALTERADO`
        res.status(200).send(`Usuário alterado!`)
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

// 6.
app.patch('/patchLastUser', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const requestBody = {
            name: req.body.name
        }
        const lastUserIndex = users.length - 1
        users[lastUserIndex].name = `${requestBody.name}-REALTERADO`
        res.status(200).send(`Usuário realterado!`)
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

// 7.
app.patch('/deleteLastUser', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const lastUserIndex = users.length - 1
        users.splice(lastUserIndex)
        res.status(200).send(`Usuário deletado!`)
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})