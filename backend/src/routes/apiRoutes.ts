import { Router } from "express";
import { getCustomers } from "../controllers/customerController.js";

const router = Router();

router.get("/", (req,res) =>{
    res.json("Hello")
})

router.get("/customers", getCustomers) // api/customers

export default router //default export is usually for a single main item