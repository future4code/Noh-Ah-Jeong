import { insertPost, selectPostById } from "../data/postDatabase"
import { Post } from "./entities/post"
import { AuthenticationData } from "./entities/user"
import { getTokenData } from "./services/authenticator"
import { generateId } from "./services/idGenerator"

export class PostBusiness {
    public createPost = async (
        input: any,
        token: string
    ) => {
        const tokenData: AuthenticationData = getTokenData(token)

        const id: string = generateId()

        const dateNow: Date = new Date()

        const post: Post = {
            id: id,
            photo: input.photo,
            description: input.description,
            type: input.type,
            createdAt: dateNow,
            authorId: tokenData.id
        }

        await insertPost(post)
    }

    public getPostById = async (
        id: string
    ) => {
        const queryResult: any = await selectPostById(id)

        if (!queryResult[0]) {
            let message = "Post not found"

            throw new Error(message)
        }

        const post: Post = {
            id: queryResult[0].id,
            photo: queryResult[0].photo,
            description: queryResult[0].description,
            type: queryResult[0].type,
            createdAt: queryResult[0].created_at,
            authorId: queryResult[0].author_id,
        }

        return post
    }
}