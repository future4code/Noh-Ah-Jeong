import { connection } from "../index"

export const selectRecipeById = async (id: string) => {
    const tableName = "cookenu_recipes"

    const result = await connection.raw(`
        SELECT * FROM ${tableName}
        WHERE id = "${id}";
    `)

    return result[0][0]
}