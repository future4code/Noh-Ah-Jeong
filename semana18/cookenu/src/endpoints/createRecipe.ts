import { Request, Response } from "express"
import { insertRecipe } from "../datas/insertRecipe"
import { getTokenData } from "../services/authenticator"
import { formatDate } from "../services/formatDate"
import { generateId } from "../services/idGenerator"
import { recipe } from "../types/recipe"

export const createRecipe = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string

        getTokenData(token)

        const authenticationData = getTokenData(token)

        const userId: string = authenticationData.id

        if (!req.body.title || !req.body.description) {
            throw new Error("Preencha os campos 'title' e 'description'.")
        }

        const recipeId: string = generateId()

        const dateNow: Date = new Date()
        
        const recipeData: recipe = {
            id: recipeId,
            title: req.body.title,
            description: req.body.description,
            created_date: formatDate(dateNow),
            user_id: userId
        }
        
        await insertRecipe(recipeData.id, recipeData.title, recipeData.description, recipeData.created_date, recipeData.user_id)

        res.status(200).send("Receita criada.")
    } catch (error) {
        res.status(400).send({ message: error.message || error.sqlMessage })
    }
}