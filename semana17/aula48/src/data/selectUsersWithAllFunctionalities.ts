import { connection } from "../index"

export default async function selectUsersWithAllFunctionalities(
    condition: string,
    orderByWhat: string,
    orderByHow: string,
    offset: number
): Promise<any> {


    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       ${condition}
       ORDER BY ${orderByWhat} ${orderByHow}
       LIMIT 5
       OFFSET ${offset};
    `)
    console.log(condition)

    return result[0]
}