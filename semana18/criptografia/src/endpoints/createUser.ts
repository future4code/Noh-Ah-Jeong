import { Request, Response } from "express"
import { insertUser } from "../data/insertUser"
import { generateToken } from "../services/authenticator"
import { generateHash } from "../services/hashManager"
import { generateId } from "../services/idGenerator"

export const createUser = async (req: Request, res: Response) => {
    try {
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Email deve ser preenchido e deve ter um '@'.")
        }

        if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Senha deve ser preenchida com 6 caracteres ou mais.")
        }

        if (req.body.role === undefined) {
            req.body.role = "normal"
        }

        const userData = {
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        }

        const id: string = generateId()

        const hashPassword: string = await generateHash(userData.password)

        await insertUser(id, userData.email, hashPassword, userData.role)

        const token = generateToken({
            id,
            role: req.body.role
        })

        res.status(200).send({
            token
        })
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}