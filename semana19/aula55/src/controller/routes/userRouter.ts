import express from 'express'
import { signup, login } from '../userController'

export const userRouter = express.Router()

userRouter.post("/signup", signup)
userRouter.post("/login", login)