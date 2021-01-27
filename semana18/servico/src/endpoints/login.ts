import { Request, Response } from "express"
import { selectUserByEmail } from "../data/selectUserByEmail"
import { generateToken } from "../services/authenticator"
import { compareWithHash } from "../services/hashManager"

export const login = async (req: Request, res: Response) => {
    try {
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Email deve ser preenchido e deve ter um '@'.")
        }

        const inputData = {
            email: req.body.email,
            password: req.body.password
        }

        const user = await selectUserByEmail(inputData.email)

        if (!user) {
            throw new Error("Email não cadastrado.")
        }

        const isPasswordCorrect: boolean = await compareWithHash(
            inputData.password,
            user.password
        )

        if (!isPasswordCorrect) {
            throw new Error("Senha errada.")
        }

        const token = generateToken({
            id: user.id,
            role: user.role
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