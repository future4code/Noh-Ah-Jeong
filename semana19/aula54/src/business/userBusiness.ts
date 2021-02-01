import { deleteUserById, insertUser, selectAllUsers, selectUserByEmail } from "../data/userDatabase";
import { USER_ROLES } from "./entities/user";
import { generateToken, getTokenData } from "./services/authenticator";
import { compareHash, hash } from "./services/hashManager";
import { generateId } from "./services/idGenerator";

export const signupBusiness = async (input: any) => {
    if (!input.name || !input.email || !input.password || !input.role) {
        throw new Error("Preencha os campos 'name', 'email', 'password' e 'role'.")
    }

    if (input.email.indexOf("@") === -1) {
        throw new Error("Email must have '@'.")
    }

    if (input.password.length < 6) {
        throw new Error("Password must have at least 6 characters.")
    }

    const id: string = generateId()

    const cypherPassword = await hash(input.password)

    await insertUser(id, input.name, input.email, cypherPassword, input.role)

    const token: string = generateToken({ id, role: input.role })

    return { token, id, role: input.role }
}

export const loginBusiness = async (input: any) => {
    const user = await selectUserByEmail(input.email)

    if (!user) {
        throw new Error("User not found.")
    }

    const isPasswordCorrect = await compareHash(input.password, user.password)

    if (!isPasswordCorrect) {
        throw new Error("Incorrect password.")
    }

    const token = generateToken({ id: user.id, role: user.role })

    return { token, id: user.id, role: user.role }
}

export const getAllUsersBusiness = async (input: any) => {
    getTokenData(input)

    const users = await selectAllUsers()

    return { users }
}

export const deleteUserBusiness = async (input: {id: string, token: string}) => {
    const token = getTokenData(input.token)

    if (token.role !== USER_ROLES.ADMIN) {
        throw new Error("User do not have permission.")
    }

    return await deleteUserById(input.id)
}