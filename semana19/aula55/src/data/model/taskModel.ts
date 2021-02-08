import { task } from "../../business/entities/task";

export const toTaskModel = (result: any): task => {
    return {
        id: result.id,
        title: result.title,
        description: result.description,
        deadline: result.deadline,
        authorId: result.authorId
    }
}