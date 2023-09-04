import express from "express";
import { addCart, emptyCart, getCartProducts, removeproduct } from "../controllers/userControllers.js";

const router = express.Router()

router.post('/addCart',addCart)
router.post('/getCartProducts',getCartProducts)
router.post('/removeproduct',removeproduct)
router.post('/emptyCart',emptyCart)



export default router;