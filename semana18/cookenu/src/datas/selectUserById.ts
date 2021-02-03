import { connection } from "../index"
import { TABLE_NAME } from "../types/dataBaseTables"

export const selectUserById = async (id: string) => {
    const result = await connection.raw(`
        SELECT * FROM ${TABLE_NAME.USERS}
        WHERE id = "${id}";
    `)

    return result[0][0]
}