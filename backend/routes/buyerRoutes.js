import express from "express";
import { addCart, buyNow, getCartProducts, removeproduct } from "../controllers/userControllers.js";

const router = express.Router()

router.post('/addCart',addCart)
router.post('/getCartProducts',getCartProducts)
router.post('/removeproduct',removeproduct)
router.post('/buyNow',buyNow)



export default router;