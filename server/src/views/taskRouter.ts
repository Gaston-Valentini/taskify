import { Router } from "express";
import { create, getTask } from "../controllers/taskController";
import { auth } from "../middlewares/authMiddleware";

const router = Router();

router.post("/create", auth, create);
router.get("/getTask/:id", auth, getTask);

export default router;
