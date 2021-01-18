import { Request, Response } from "express"
import selectFiveUsersPerTime from "../data/selectFiveUsersPerTime"

export const getFiveUsersPerTime = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await selectFiveUsersPerTime()

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