import { Request, Response } from "express"
import { deleteUser } from "../data/deleteUser"
import { getTokenData } from "../services/authenticator"

export const deleteUserById = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string

        const authenticationData = getTokenData(token)

        if (authenticationData.role !== "admin") {
            throw new Error("Somente administradores possuem autorização.")
        }

        const id = req.params.id

        await deleteUser(id)

        res.status(200).send("Usuário deletado.")
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}