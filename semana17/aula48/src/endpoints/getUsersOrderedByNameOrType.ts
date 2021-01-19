import { Request, Response } from "express"
import selectUsersOrderedByNameOrType from "../data/selectUsersOrderedByNameAndType"

export const getUsersOrderedByNameOrType = async (req: Request, res: Response): Promise<void> => {
    try {
        const orderByWhat = req.query.orderByWhat as string
        const orderByHow = req.query.orderByHow as string

        if (!["name", "type"].includes(orderByWhat)) {
            res.statusCode = 422
            throw new Error(`"orderByWhat" aceita "name" ou "type"`)
        }

        if (!["ASC", "DESC"].includes(orderByHow)) {
            res.statusCode = 422
            throw new Error(`"orderByHow" aceita "ASC" ou "DESC"`)
        }

        const users = await selectUsersOrderedByNameOrType(orderByWhat, orderByHow)

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