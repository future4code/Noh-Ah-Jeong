import { connection } from "../index"
import { TABLE_NAME } from "../types/dataBaseTables"

export const selectRecipeFeed = async () => {
    const result = await connection.raw(`
        SELECT ${TABLE_NAME.RECIPES}.id, title, description, created_date AS createdAt, user_id AS userId, name AS userName FROM ${TABLE_NAME.RECIPES}
        INNER JOIN ${TABLE_NAME.USERS}
        ON ${TABLE_NAME.RECIPES}.user_id = ${TABLE_NAME.USERS}.id
        ORDER BY created_date ASC;
    `)

    return result[0]
}