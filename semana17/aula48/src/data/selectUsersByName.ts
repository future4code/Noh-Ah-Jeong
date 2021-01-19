import { connection } from "../index"

export default async function selectUsersByName(name: string): Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       WHERE name LIKE "%${name}%"
    `)

    return result[0]
}