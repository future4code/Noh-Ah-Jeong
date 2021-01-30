import { connection } from "../index"

export const deleteFollowingUser = async (userId: string, followingUserId: string) => {
    const tableName = "cookenu_follow"

    await connection.raw(`
        DELETE FROM ${tableName}
        WHERE user_id = "${userId}" AND following_user_id = "${followingUserId}";
    `)
}