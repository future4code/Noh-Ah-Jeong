import * as jwt from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config()

const expiresIn = process.env.JWT_EXPIRE_TIME

type AuthenticationData = {
    id: string,
    role: string
}

export const generateToken = (input: AuthenticationData): string => {
    const token = jwt.sign(
        { id: input.id, role: input.role },
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