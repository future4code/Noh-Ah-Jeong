import { connection } from ".."

export const selectUserById = async (id: string) => {
    const tableName = "aula50_users"

    const result = await connection.raw(`
        SELECT * FROM ${tableName}
        WHERE id = "${id}";
    `)

    return result[0][0]
}