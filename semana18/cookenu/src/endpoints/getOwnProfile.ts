import { Request, Response } from "express"
import { selectUserById } from "../datas/selectUserById"
import { getTokenData } from "../services/authenticator"
import { user } from "../types/user"

export const getOwnProfile = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string

        const authenticationData = getTokenData(token)

        const user: user = await selectUserById(authenticationData.id)

        res.status(200).send({ id: user.id, name: user.name, email: user.email })
    } catch (error) {
        res.status(400).send({ message: error.message || error.sqlMessage })
    }
}