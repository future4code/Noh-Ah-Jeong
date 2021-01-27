import { connection } from ".."

export default async function selectUserById(id: string) {
    const tableName = "aula50_users"
    
    const result = await connection.raw(`
        SELECT id, email FROM ${tableName}
        WHERE id = "${id}";
    `)

    return result[0][0]
}