import { Router } from "express";
import { create } from "../controllers/taskController";

const router = Router();

router.post("/create", create);

export default router;
