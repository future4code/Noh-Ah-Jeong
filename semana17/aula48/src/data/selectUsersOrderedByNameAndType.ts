import { connection } from "../index"

export default async function selectUsersOrderedByNameOrType(orderInput: string): Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       ORDER BY "${orderInput}" ASC
    `)

    return result[0]
}