import { Request, Response } from "express"
import { selectUserById } from "../data/selectUserById"
import { getTokenData } from "../services/authenticator"

export const getUserById = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string

        const authenticationData = getTokenData(token)

        if (authenticationData.role !== "normal") {
            throw new Error("Somente usuários normais possuem autorização.")
        }

        const user = await selectUserById(authenticationData.id)

        res.status(200).send({ id: user.id, email: user.email, role: user.role })
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}