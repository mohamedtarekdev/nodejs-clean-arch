import express from "express";
import * as userController from "./controller/user.controller.js";

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/refresh", userController.refresh);
router.get("/me", userController.getMe);

export default router;
