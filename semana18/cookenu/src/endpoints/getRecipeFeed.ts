import { Request, Response } from "express"
import { selectRecipeFeed } from "../datas/selectRecipeFeed"
import { getTokenData } from "../services/authenticator"

export const getRecipeFeed = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string

        getTokenData(token)

        const recipes = await selectRecipeFeed()

        if (!recipes) {
            throw new Error("There is no recipes created yet.")
        }

        res.status(200).send({ recipes })
    } catch (error) {
        res.status(400).send({ message: error.message || error.sqlMessage })
    }
}