import { Request, Response } from "express"
import insertUser from "../data/insertUser"
import { generateToken } from "../services/authenticator"
import { generateId } from "../services/idGenerator"

export default async function createUser(req: Request, res: Response) {
    try {
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Email deve ser preenchido e deve ter um '@'.")
        }

        if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Senha deve ser preenchida com 6 caracteres ou mais.")
        }

        const userData = {
            email: req.body.email,
            password: req.body.password
        }

        const id = generateId()

        await insertUser(id, userData.email, userData.password)

        const token = generateToken({ id })

        res.status(200).send({
            token
        })
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}