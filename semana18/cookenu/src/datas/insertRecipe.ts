import { connection } from "../index"

export const insertRecipe = async (id: string, title: string, description: string, created_date: string, user_id: string) => {
    const tableName = "cookenu_recipes"

    await connection.raw(`
        INSERT INTO ${tableName} (id, title, description, created_date, user_id)
        VALUES ("${id}", "${title}", "${description}", "${created_date}", "${user_id}");
    `)
}