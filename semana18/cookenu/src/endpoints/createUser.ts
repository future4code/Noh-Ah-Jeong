import { Request, Response } from "express"
import { insertUser } from "../datas/insertUser"
import { generateToken } from "../services/authenticator"
import { generateHash } from "../services/hashManager"
import { generateId } from "../services/idGenerator"
import { user } from "../types/user"

export const createUser = async (req: Request, res: Response) => {
    try {
        if (!req.body.email || !req.body.name || !req.body.password) {
            throw new Error("Preencha todos os campos.")
        }

        if (req.body.email.indexOf("@") === -1) {
            throw new Error("Email deve ter um '@'.")
        }

        if (req.body.password.length < 6) {
            throw new Error("Senha deve ter 6 caracteres ou mais.")
        }

        const userId: string = generateId()

        const userData: user = {
            id: userId,
            email: req.body.email,
            name: req.body.name,
            password: req.body.password
        }

        const hashPassword: string = await generateHash(userData.password)

        await insertUser(userData.id, userData.email, userData.name, hashPassword)

        const token = generateToken({ id: userId })

        res.status(200).send({ acess_token: token })
    } catch (error) {
        res.status(400).send({ message: error.message || error.sqlMessage })
    }
}