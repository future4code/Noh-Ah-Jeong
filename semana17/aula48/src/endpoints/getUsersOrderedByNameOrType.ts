import { Request, Response } from "express"
import selectUsersOrderedByNameOrType from "../data/selectUsersOrderedByNameAndType"

export const getUsersOrderedByNameOrType = async (req: Request, res: Response): Promise<void> => {
    try {
        const orderInput = req.query.orderInput as string
        const users = await selectUsersOrderedByNameOrType(orderInput)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("Nenhum usuário encontrado")
        }

        res.status(200).send(users)

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}