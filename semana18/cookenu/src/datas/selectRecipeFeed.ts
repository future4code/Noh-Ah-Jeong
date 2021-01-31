import { connection } from "../index"

export const selectRecipeFeed = async () => {
    const firstTableName = "cookenu_recipes"
    const secondTableName = "cookenu_users"

    const result = await connection.raw(`
        SELECT ${firstTableName}.id, title, description, created_date AS createdAt, user_id AS userId, name AS userName FROM ${firstTableName}
        INNER JOIN ${secondTableName}
        ON ${firstTableName}.user_id = ${secondTableName}.id
        ORDER BY created_date ASC;
    `)

    return result[0]
}