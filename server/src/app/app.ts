// Imports
import express from "express";
const app = express();

import authRouter from "../views/authRouter";

// Router
app.use("/auth", authRouter);

// Export
export default app;
