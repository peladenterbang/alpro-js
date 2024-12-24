import express from "express";

const router = express.Router();

import authController from "../controller/auth.controller";
import authMiddleware from "../middleware/auth.middleware";
import rbacMiddleware from "../middleware/rbac.middleware";

router.post("/auth/login", authController.login);
router.post("/auth/register", authController.register);
router.get("/auth/me",[authMiddleware,rbacMiddleware("admin")], authController.me);
router.put("/auth/update-profile", authMiddleware,authController.updateProfile);

export default router;