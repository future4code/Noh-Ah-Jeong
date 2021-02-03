import { connection } from "../index"
import { TABLE_NAME } from "../types/dataBaseTables"

export const selectRecipeById = async (id: string) => {
    const result = await connection.raw(`
        SELECT * FROM ${TABLE_NAME.RECIPES}
        WHERE id = "${id}";
    `)

    return result[0][0]
}