import { connection } from "../index"

export const insertFollowingUser = async (userId: string, followingUserId: string) => {
    const tableName = "cookenu_follow"

    await connection.raw(`
        INSERT INTO ${tableName} (user_id, following_user_id)
        VALUES ("${userId}", "${followingUserId}");
    `)
}