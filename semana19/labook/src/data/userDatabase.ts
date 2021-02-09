import { User } from "../business/entities/user"
import { connection } from "./connection"

const usersTableName = "labook_users"

export const insertUser = async (user: User) => {
    await connection.raw(`
        INSERT INTO ${usersTableName} (id, name, email, password)
        VALUES ("${user.id}", "${user.name}", "${user.email}", "${user.password}");
    `)
}

export const selectUserByEmail = async (email: string) => {
    const result = await connection.raw(`
        SELECT * FROM ${usersTableName}
        WHERE email = "${email}";
    `)

    return result[0]
}