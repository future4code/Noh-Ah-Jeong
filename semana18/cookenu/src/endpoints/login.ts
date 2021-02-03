import { Request, Response } from "express"
import { selectUserByEmail } from "../datas/selectUserByEmail"
import { generateToken } from "../services/authenticator"
import { compareHash } from "../services/hashManager"

export const login = async (req: Request, res: Response) => {
    try {
        if (!req.body.email || !req.body.password) {
            throw new Error("Please fill in the fields 'email' and 'password'.")
        }

        const inputData = {
            email: req.body.email,
            password: req.body.password
        }

        const user = await selectUserByEmail(inputData.email)

        if (!user) {
            throw new Error("Email not registered.")
        }

        const isPasswordCorrect: boolean = await compareHash(inputData.password, user.password)

        if (!isPasswordCorrect) {
            throw new Error("Wrong password.")
        }

        const token = generateToken({ id: user.id })

        res.status(200).send({ acess_token: token })
    } catch (error) {
        res.status(400).send({ message: error.message || error.sqlMessage })
    }
}