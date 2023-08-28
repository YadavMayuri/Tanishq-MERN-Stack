console.log("working");

import express from "express"
import morgan from "morgan"
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
dotenv.config()

const app = express()

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/user',userRouter)

const Port = process.env.PORT || 8000;

app.listen(Port,()=>console.log(`Server listining on Port ${Port}`))