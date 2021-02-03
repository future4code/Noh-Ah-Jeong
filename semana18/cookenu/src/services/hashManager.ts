import * as bcrypt from "bcryptjs"
import dotenv from "dotenv"

dotenv.config()

export const generateHash = async (plainText: string): Promise<string> => {
    const rounds: number = Number(process.env.BCRYPT_COST)
    const salt: string = await bcrypt.genSalt(rounds)
    const result: string = await bcrypt.hash(plainText, salt)

    return result
}

export const compareHash = async (plainText: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(plainText, hash)
}