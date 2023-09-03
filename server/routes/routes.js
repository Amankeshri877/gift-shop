import express from "express";
import { userSignup, userLogin } from "../controller/user-controller.js";

import {
  getproducts,
  getProductById,
} from "../controller/product-controller.js";
import { addPaymentGateway } from "../controller/payment-controller.js";
const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.get("/products", getproducts);
router.get("/product/:id", getProductById);
router.post('/payment',addPaymentGateway);

export default router;
