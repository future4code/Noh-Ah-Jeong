import { connection } from ".."

export const insertAddress = async (
    id: string,
    address: string,
    address_number: string,
    address_complement: string,
    neighborhood: string,
    city: string,
    state: string,
    user_id: string
) => {
    const tableName = "aula52_address"

    await connection.raw(`
        INSERT INTO ${tableName} (
            id,
            address,
            address_number,
            address_complement,
            neighborhood,
            city,
            state,
            user_id
        )
        VALUES (
            "${id}",
            "${address}",
            "${address_number}",
            "${address_complement}",
            "${neighborhood}",
            "${city}",
            "${state}",
            "${user_id}"
        );
    `)
}