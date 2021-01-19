import { connection } from "../index"

export default async function selectUsersByType(type: string): Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       WHERE type = "${type}"
    `)

    return result[0]
}