import express from "express";
import { registerUser, loginUser } from "../controller/registrationController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser); // Single login endpoint for all roles

export default router;
