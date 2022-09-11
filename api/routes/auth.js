import express from "express";
import { login, register } from "../controllers/auth.js";
const router = express.Router();

router.post("/register",register)
router.post("/login",login)

// router.get("/", (req, res)=>{
//     res.send("Hello, this is auth endpoint")
// })
// router.get("/register", (req, res)=>{
//     res.send("Hello, this is auth register endpoint")
// })

export default router;
