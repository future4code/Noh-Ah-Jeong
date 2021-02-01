import { Request, Response } from 'express'
import { deleteUserBusiness, getAllUsersBusiness, loginBusiness, signupBusiness } from '../business/userBusiness'

export const signup = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const input = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        }

        const result = await signupBusiness(input)

        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const login = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const input = {
            email: req.body.email,
            password: req.body.password
        }

        const result = await loginBusiness(input)

        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const getAllUsers = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const token = req.headers.authorization

        const result = await getAllUsersBusiness(token)

        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const deleteUser = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const input = {
            id: req.params.id,
            token: req.headers.authorization!
        }

        await deleteUserBusiness(input)

        res.status(200).send({ message: "User deleted." })
    } catch (error) {
        res.status(400).send(error.message)
    }
}