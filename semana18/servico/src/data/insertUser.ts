import { connection } from ".."
import { USER_ROLES } from "../types/user"

export const insertUser = async (id: string, email: string, password: string, role: USER_ROLES) => {
    const tableName = "aula50_users"

    await connection.raw(`
        INSERT INTO ${tableName} (id, email, password, role)
        VALUES ("${id}", "${email}", "${password}", "${role}");
    `)
}