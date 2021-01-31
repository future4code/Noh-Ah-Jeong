import { connection } from "../index"
import { TABLE_NAME } from "../types/dataBaseTables"

export const insertUser = async (id: string, email: string, name: string, password: string) => {
    await connection.raw(`
        INSERT INTO ${TABLE_NAME.USERS} (id, email, name, password)
        VALUES ("${id}", "${email}", "${name}", "${password}");
    `)
}