import { connection } from ".."

export const insertUser = async (id: string, email: string, password: string, role: string) => {
    const tableName = "aula50_users"

    await connection.raw(`
        INSERT INTO ${tableName} (id, email, password, role)
        VALUES ("${id}", "${email}", "${password}", "${role}");
    `)
}