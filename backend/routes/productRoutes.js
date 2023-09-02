import express from "express"
import { addProduct, getAllProducts } from "../controllers/productControllers.js";

const productRouter = express.Router()

productRouter.post('/addProduct',addProduct)
productRouter.get('/getAllProducts',getAllProducts)

export default productRouter;