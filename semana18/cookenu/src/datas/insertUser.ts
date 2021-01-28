import { connection } from "../index"

export const insertUser = async (id: string, email: string, name: string, password: string) => {
    const tableName = "cookenu_users"

    await connection.raw(`
        INSERT INTO ${tableName} (id, email, name, password)
        VALUES ("${id}", "${email}", "${name}", "${password}");
    `)
}