import express from "express"
import { Register } from "../controllers/userControllers.js";
import { RegisterChecks } from "../middleware/authMiddleware.js";

const userRouter = express.Router()

userRouter.post('/register',RegisterChecks,Register)


export default userRouter;