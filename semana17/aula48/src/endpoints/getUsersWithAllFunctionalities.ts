import { Request, Response } from "express"
import selectUsersWithAllFunctionalities from "../data/selectUsersWithAllFunctionalities"
import { searchUsersInputs } from "../types/searchUsersInputs"

export const getUsersWithAllFunctionalities = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            name,
            type,
            orderByWhat = "name",
            orderByHow = "DESC",
            page = "1"
        } = req.query as searchUsersInputs

        let condition = ""
        if (name && !type) {
            condition = `WHERE name LIKE "%${name}%"`
        } if (!name && type) {
            condition = `WHERE type = "${type}"`
        } if (name && type) {
            condition = `WHERE name LIKE "%${name}%" AND type = "${type}"`
        }

        if (!["name", "type"].includes(orderByWhat)) {
            res.statusCode = 422
            throw new Error(`"orderByWhat" aceita "name" ou "type"`)
        }

        if (!["ASC", "DESC"].includes(orderByHow)) {
            res.statusCode = 422
            throw new Error(`"orderByHow" aceita "ASC" ou "DESC"`)
        }

        const pageNumber: number = Number(page)
        if (!pageNumber) {
            res.statusCode = 422
            throw new Error(`"page" deve ser um número positivo`)
        }
        const offset: number = 5 * (pageNumber - 1)

        const users = await selectUsersWithAllFunctionalities(condition, orderByWhat, orderByHow, offset)

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