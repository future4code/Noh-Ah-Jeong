import { Request, Response } from "express"
import { insertFollowingUser } from "../datas/insertFollowingUser"
import { selectUserById } from "../datas/selectUserById"
import { getTokenData } from "../services/authenticator"
import { user } from "../types/user"

export const createFollowingUser = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string

        const authenticationData = getTokenData(token)

        const userId: string = authenticationData.id

        if (!req.body.userToFollowId) {
            throw new Error("Please fill in the field 'userToFollowId'.")
        }

        const followingUserId: string = req.body.userToFollowId

        if (userId === followingUserId) {
            throw new Error("User can't follow himself.")
        }

        const followingUser: user = await selectUserById(followingUserId)

        if (!followingUser) {
            throw new Error("Not registered ID.")
        }

        await insertFollowingUser(userId, followingUser.id)

        res.status(200).send({ message: "Followed successfully."})
    } catch (error) {
        res.status(400).send({ message: error.message || error.sqlMessage })
    }
}