import express from "express"
import { Login, Register, getCurrentUser } from "../controllers/userControllers.js";

const userRouter = express.Router()

userRouter.post('/register',Register)
userRouter.post('/login',Login)
userRouter.post('/getCurrentUser',getCurrentUser)


export default userRouter;