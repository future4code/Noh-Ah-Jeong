import { Request, Response } from "express"
import selectUserByEmail from "../data/selectUserByEmail"
import { generateToken } from "../services/authenticator"

export default async function login(req: Request, res: Response) {
    try {
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Email deve ser preenchido e deve ter um '@'.")
        }

        const userData = {
            email: req.body.email,
            password: req.body.password
        }

        const user = await selectUserByEmail(userData.email)

        if (!user) {
            throw new Error("Email não cadastrado.")
        }

        if (user.password !== userData.password) {
            throw new Error("Senha errada.")
        }

        const token = generateToken({ id: user.id })

        res.status(200).send({
            token
        })
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}