import { Request, Response } from "express";
import { Task } from "../entities/Task";

const create = async (req: Request, res: Response) => {
    try {
        await Task.create({ ...req.body, userId: 1 }).save();
        return res.status(200).json({
            success: true,
            message: "Nueva tarea añadida",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error durante el registro",
        });
    }
};

export { create };
