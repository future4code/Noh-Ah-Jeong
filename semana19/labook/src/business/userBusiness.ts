import { insertUser, selectUserByEmail } from "../data/userDatabase"
import { loginInputDTO, signupInputDTO, User } from "./entities/user"
import { generateToken } from "./services/authenticator"
import { compareHash, generateHash } from "./services/hashManager"
import { generateId } from "./services/idGenerator"

export class UserBusiness {
    public signup = async (
        input: signupInputDTO
    ) => {
        if (!input.name || !input.email || !input.password) {
            let message = '"name", "email" and "password" must be provided'
    
            throw new Error(message)
        }
    
        const id: string = generateId()
    
        const cypherPassword = await generateHash(input.password)
    
        const user: User = {
            id: id,
            name: input.name,
            email: input.email,
            password: cypherPassword
        }
    
        await insertUser(user)
    
        const token: string = generateToken({ id })
    
        return token
    }

    public login = async (
        input: loginInputDTO
    ) => {
        if (!input.email || !input.password) {
            let message = '"email" and "password" must be provided'
    
            throw new Error(message)
        }
    
        const queryResult: any = await selectUserByEmail(input.email)
    
        if (!queryResult[0]) {
            let message = "Invalid credentials"
    
            throw new Error(message)
        }
    
        const user: User = {
            id: queryResult[0].id,
            name: queryResult[0].name,
            email: queryResult[0].email,
            password: queryResult[0].password
        }
    
        const passwordIsCorrect: boolean = await compareHash(input.password, user.password)
    
        if (!passwordIsCorrect) {
            let message = "Invalid credentials"
    
            throw new Error(message)
        }
    
        const token: string = generateToken({
            id: user.id
        })
    
        return token
    }
}