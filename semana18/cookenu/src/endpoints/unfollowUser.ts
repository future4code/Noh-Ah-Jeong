import { Request, Response } from "express"
import { deleteFollowingUser } from "../datas/deleteFollowingUser"
import { selectUserById } from "../datas/selectUserById"
import { getTokenData } from "../services/authenticator"
import { user } from "../types/user"

export const unfollowUser = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string

        const authenticationData = getTokenData(token)

        const userId: string = authenticationData.id

        if (!req.body.userToUnfollowId) {
            throw new Error("Please fill in the field 'userToUnfollowId'.")
        }

        const unfollowingUserId: string = req.body.userToUnfollowId

        const unfollowingUser: user = await selectUserById(unfollowingUserId)

        if (!unfollowingUser) {
            throw new Error("Not registered ID.")
        }

        await deleteFollowingUser(userId, unfollowingUserId)

        res.status(200).send({ message: "Unfollowed successfully."})
    } catch (error) {
        res.status(400).send({ message: error.message || error.sqlMessage })
    }
}