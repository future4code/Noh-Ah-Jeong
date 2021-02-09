import { Post } from "../business/entities/post"
import { connection } from "./connection"
import { formatDate } from "./model/postModel"

const postsTableName = "labook_posts"

export const insertPost = async (post: Post) => {
    await connection.raw(`
        INSERT INTO ${postsTableName} (id, photo, description, type, created_at, author_id)
        VALUES ("${post.id}", "${post.photo}", "${post.description}", "${post.type}", "${formatDate(post.createdAt)}", "${post.authorId}");
    `)
}

export const selectPostById = async (id: string) => {
    const result = await connection.raw(`
        SELECT * FROM ${postsTableName}
        WHERE id = "${id}"
    `)

    return result[0]
}