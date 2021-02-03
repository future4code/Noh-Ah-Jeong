import { Request, Response } from "express"
import { createPostInputDTO } from "../business/entities/post"
import { PostBusiness } from "../business/postBusiness"

const postBusiness: PostBusiness = new PostBusiness()

export class PostController {
    public createPost = async (
        req: Request,
        res: Response
    ) => {
        try {
            const input: createPostInputDTO = {
                photo: req.body.photo,
                description: req.body.description,
                type: req.body.type,
            }

            const token: string = req.headers.authorization as string

            await postBusiness.createPost(input, token)

            let message = "Success!"

            res.status(201).send({ message })
        } catch (error) {
            let message = error.sqlMessage || error.message

            res.status(400).send({ message })
        }
    }

    public getPostById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params

            const post = await postBusiness.getPostById(id)

            let message = "Success!"

            res.status(200).send({ message, post })
        } catch (error) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400

            res.send({ message })
        }
    }
}