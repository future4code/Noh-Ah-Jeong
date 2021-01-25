import * as jwt from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config()

const expiresIn = "5min"

type AuthenticationData = {
    id: string
}

export const generateToken = (input: AuthenticationData): string => {
    const token = jwt.sign(
        { id: input.id },
        process.env.JWT_KEY as string,
        { expiresIn }
    )

    return token
}

export const getTokenData = (token: string): AuthenticationData => {
    console.log("entrou")
    const payload = jwt.verify(
        token,
        process.env.JWT_KEY!
    )
    console.log("payload", payload)

    return payload as AuthenticationData
}