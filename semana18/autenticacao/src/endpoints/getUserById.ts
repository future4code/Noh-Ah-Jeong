import { Request, Response } from "express"
import selectUserById from "../data/selectUserById"
import { getTokenData } from "../services/authenticator"

export default async function getUserById(req: Request, res: Response) {
    try {
        const token = req.headers.authorization as string
        console.log("token do headers", token)
    
        const authenticationData = getTokenData(token)
        console.log("data da autenticação", authenticationData)
    
        const user = await selectUserById(authenticationData.id)

        res.status(200).send({ user })
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}