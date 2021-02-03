import { connection } from "../index"
import { TABLE_NAME } from "../types/dataBaseTables"

export const deleteFollowingUser = async (userId: string, followingUserId: string) => {
    await connection.raw(`
        DELETE FROM ${TABLE_NAME.FOLLOW}
        WHERE user_id = "${userId}" AND following_user_id = "${followingUserId}";
    `)
}