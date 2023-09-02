import express from "express"
import { addProduct, getAllProducts, getSingleProduct } from "../controllers/productControllers.js";

const productRouter = express.Router()

productRouter.post('/addProduct',addProduct)
productRouter.get('/getAllProducts',getAllProducts)
productRouter.get('/getSingleProduct/:id',getSingleProduct)

export default productRouter;