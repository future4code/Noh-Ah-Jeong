import { connection } from ".."

export default async function insertUser(id: string, email: string, password: string) {
    const tableName = "aula50_users"
    
    await connection.raw(`
        INSERT INTO ${tableName} (id, email, password)
        VALUES ("${id}", "${email}", "${password}");
    `)
}