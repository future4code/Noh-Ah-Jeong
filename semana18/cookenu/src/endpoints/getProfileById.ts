import { Request, Response } from "express"
import { selectUserById } from "../datas/selectUserById"
import { getTokenData } from "../services/authenticator"
import { user } from "../types/user"

export const getProfileById = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string

        getTokenData(token)

        const idInPath = req.params.id
        
        const selectedUser: user = await selectUserById(idInPath)

        if (!selectedUser) {
            throw new Error("User not found.");
        }

        res.status(200).send({ id: selectedUser.id, name: selectedUser.name, email: selectedUser.email })
    } catch (error) {
        res.status(400).send({ message: error.message || error.sqlMessage })
    }
}