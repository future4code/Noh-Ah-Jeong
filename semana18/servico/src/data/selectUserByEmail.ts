import { connection } from ".."

export const selectUserByEmail = async (email: string) => {
    const tableName = "aula50_users"

    const result = await connection.raw(`
        SELECT * FROM ${tableName}
        WHERE email = "${email}";
    `)

    return result[0][0]
}