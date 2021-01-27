import { connection } from ".."

export const deleteUser = async (id: string) => {
    const tableName = "aula50_users"

    await connection.raw(`
        DELETE FROM ${tableName}
        WHERE id = "${id}";
    `)
}