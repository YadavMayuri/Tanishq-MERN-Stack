import express from "express";
import { addCart, getCartProducts } from "../controllers/userControllers.js";

const router = express.Router()

router.post('/addCart',addCart)
router.post('/getCartProducts',getCartProducts)



export default router;