import { Router } from "express";
import { create, getTask, update, remove } from "../controllers/taskController";
import { auth } from "../middlewares/authMiddleware";

const router = Router();

router.post("/create", auth, create);
router.get("/getTask/:id", auth, getTask);
router.post("/update/:id", auth, update);
router.delete("/remove/:id", auth, remove);

export default router;
