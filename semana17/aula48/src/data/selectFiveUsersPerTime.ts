import { connection } from "../index"

export default async function selectFiveUsersPerTime(): Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       LIMIT 5
    `)

    return result[0]
}