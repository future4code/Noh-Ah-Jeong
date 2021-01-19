import { connection } from "../index"

export default async function selectUsersOrderedByNameOrType(orderByWhat: string, orderByHow: string): Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       ORDER BY ${orderByWhat} ${orderByHow};
    `)

    return result[0]
}