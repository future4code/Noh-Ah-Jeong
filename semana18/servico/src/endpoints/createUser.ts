import { Request, Response } from "express"
import { insertAddress } from "../data/insertAddress"
import { insertUser } from "../data/insertUser"
import { generateToken } from "../services/authenticator"
import { generateHash } from "../services/hashManager"
import { generateId } from "../services/idGenerator"
import { getAddressByCep } from "../services/viacep"
import { USER_ROLES } from "../types/user"

export const createUser = async (req: Request, res: Response) => {
    try {
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Email deve ser preenchido e deve ter um '@'.")
        }

        if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Senha deve ser preenchida com 6 caracteres ou mais.")
        }

        if (req.body.role !== USER_ROLES.ADMIN && req.body.role !== USER_ROLES.NORMAL) {
            throw new Error("'role' deve ser 'NORMAL' ou 'ADMIN'.")
        }

        if (!req.body.cep || !req.body.address_number) {
            throw new Error("Preencha os campos 'cep' e 'address_number'.")
        }

        if (isNaN(Number(req.body.cep)) || req.body.cep.includes("-")) {
            throw new Error("Passe o 'cep' somente com valores numéricos.");
        }

        const userData = {
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
            cep: req.body.cep,
            address_number: req.body.address_number,
            address_complement: req.body.address_complement
        }

        const userId: string = generateId()

        const hashPassword: string = await generateHash(userData.password)

        await insertUser(userId, userData.email, hashPassword, userData.role)

        const addressData = await getAddressByCep(userData.cep)

        const addressId: string = generateId()

        await insertAddress(addressId, addressData.address, userData.address_number, userData.address_complement, addressData.neighborhood, addressData.city, addressData.state, userId)

        const token = generateToken({
            id: userId,
            role: req.body.role
        })

        res.status(200).send({
            token
        })
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}