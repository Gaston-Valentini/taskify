import { Router } from "express";
import { create } from "../controllers/taskController";

import { auth } from "../middlewares/authMiddleware";

const router = Router();

router.post("/create", auth, create);

export default router;
