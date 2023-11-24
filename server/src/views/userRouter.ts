import { Router } from "express";
import { getUser } from "../controllers/userController";

import { auth } from "../middlewares/authMiddleware";

const router = Router();

router.get("/getUser", auth, getUser);

export default router;
