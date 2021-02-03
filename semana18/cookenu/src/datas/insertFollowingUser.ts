import { connection } from "../index"
import { TABLE_NAME } from "../types/dataBaseTables"

export const insertFollowingUser = async (userId: string, followingUserId: string) => {
    await connection.raw(`
        INSERT INTO ${TABLE_NAME.FOLLOW} (user_id, following_user_id)
        VALUES ("${userId}", "${followingUserId}");
    `)
}