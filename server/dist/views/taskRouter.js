"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taskController_1 = require("../controllers/taskController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
router.post("/create", authMiddleware_1.auth, taskController_1.create);
router.get("/getTask/:id", authMiddleware_1.auth, taskController_1.getTask);
router.post("/update/:id", authMiddleware_1.auth, taskController_1.update);
router.delete("/remove/:id", authMiddleware_1.auth, taskController_1.remove);
exports.default = router;
