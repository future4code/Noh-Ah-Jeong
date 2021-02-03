import { Request, Response } from "express"
import { selectRecipeById } from "../datas/selectRecipeById"
import { getTokenData } from "../services/authenticator"
import { recipe } from "../types/recipe"

export const getRecipeById = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string

        getTokenData(token)

        const idInPath = req.params.id

        const recipe: recipe = await selectRecipeById(idInPath)

        res.status(200).send({ id: recipe.id, title: recipe.title, description: recipe.description, createdAt: recipe.created_date })
    } catch (error) {
        res.status(400).send({ message: error.message || error.sqlMessage })
    }
}