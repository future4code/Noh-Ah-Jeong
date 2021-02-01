import jwt from 'jsonwebtoken'
import { authenticationData } from '../entities/user'
import dotenv from 'dotenv'

dotenv.config()

export const generateToken = (
    payload: authenticationData
): string => {
    return jwt.sign(
        payload,
        process.env.JWT_KEY as string,
        { expiresIn: process.env.JWT_EXPIRE_TIME }
    )
}

export const getTokenData = (
    token: string
): authenticationData => {
    return jwt.verify(
        token,
        process.env.JWT_KEY as string
    ) as authenticationData
}