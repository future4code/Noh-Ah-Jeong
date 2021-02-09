import { Request, Response } from "express"
import { loginInputDTO, signupInputDTO } from "../business/entities/user"
import { UserBusiness } from "../business/userBusiness"

const userBusiness: UserBusiness = new UserBusiness()

export class UserController {
    public signup = async (
        req: Request,
        res: Response
    ) => {
        try {
            const input: signupInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const token = await userBusiness.signup(input)

            let message = "Success!"

            res.status(201).send({ message, token })
        } catch (error) {
            let message = error.sqlMessage || error.message

            res.status(400).send({ message })
        }
    }

    public login = async (
        req: Request,
        res: Response
    ) => {
        try {
            const input: loginInputDTO = {
                email: req.body.email,
                password: req.body.password
            }

            const token = await userBusiness.login(input)

            let message = "Success!"

            res.status(200).send({ message, token })
        } catch (error) {
            let message = error.sqlMessage || error.message

            res.status(400).send({ message })
        }
    }
}