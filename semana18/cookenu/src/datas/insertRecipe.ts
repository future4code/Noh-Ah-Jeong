import { connection } from "../index"
import { TABLE_NAME } from "../types/dataBaseTables"

export const insertRecipe = async (id: string, title: string, description: string, created_date: string, user_id: string) => {
    await connection.raw(`
        INSERT INTO ${TABLE_NAME.RECIPES} (id, title, description, created_date, user_id)
        VALUES ("${id}", "${title}", "${description}", "${created_date}", "${user_id}");
    `)
}