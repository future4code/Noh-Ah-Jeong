import * as jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

type AuthenticationData = {
    id: string
}

export const generateToken = (input: AuthenticationData): string => {
    const expiresIn = process.env.JWT_EXPIRE_TIME

    const token = jwt.sign(
        { id: input.id },
        process.env.JWT_KEY as string,
        { expiresIn }
    )

    return token
}

export const getTokenData = (token: string): AuthenticationData => {
    const payload = jwt.verify(
        token,
        process.env.JWT_KEY!
    ) as AuthenticationData

    return payload
}