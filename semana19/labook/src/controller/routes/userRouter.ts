import express from "express"
import { UserController } from "../userController"

export const userRouter = express.Router()

const userController: UserController = new UserController()

userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)