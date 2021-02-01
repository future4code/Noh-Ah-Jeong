import { USER_ROLES } from '../business/entities/user'
import { connection } from './connection'
import { TABLE_NAME } from './databaseTableName'

export const insertUser = async (
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
) => {
    await connection.raw(`
        INSERT INTO ${TABLE_NAME.USER} (id, name, email, password, role)
        VALUES ("${id}", "${name}", "${email}", "${password}", "${role}");
    `)
}

export const selectUserByEmail = async (
    email: string
) => {
    const result = await connection.raw(`
        SELECT * FROM ${TABLE_NAME.USER}
        WHERE email = "${email}";
    `)

    return result[0][0]
}

export const selectAllUsers = async () => {
    const result = await connection.raw(`
        SELECT * FROM ${TABLE_NAME.USER};
    `)

    return result[0]
}

export const deleteUserById = async (
    id: string
) => {
    await connection.raw(`
        DELETE FROM ${TABLE_NAME.USER}
        WHERE id = "${id}";
    `)
}