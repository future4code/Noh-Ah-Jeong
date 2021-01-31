import { connection } from "../index"
import { TABLE_NAME } from "../types/dataBaseTables"

export const selectUserByEmail = async (email: string) => {
    const result = await connection.raw(`
        SELECT * FROM ${TABLE_NAME.USERS}
        WHERE email = "${email}";
    `)

    return result[0][0]
}