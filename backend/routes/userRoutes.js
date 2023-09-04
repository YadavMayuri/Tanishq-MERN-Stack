import express from "express"
import { Login, Register, getCartProducts, getCurrentUser } from "../controllers/userControllers.js";
import buyerRoutes from "../routes/buyerRoutes.js"

const userRouter = express.Router()

//user routes
userRouter.post('/register',Register)
userRouter.post('/login',Login)
userRouter.post('/getCurrentUser',getCurrentUser)


//buyer routes 
userRouter.use('/buyer',buyerRoutes)

export default userRouter;