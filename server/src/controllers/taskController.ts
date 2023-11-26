import { Request, Response } from "express";
import { Task } from "../entities/Task";

const create = async (req: Request, res: Response) => {
    try {
        await Task.create({ ...req.body, userId: req.token.id }).save();
        return res.status(200).json({
            success: true,
            message: "Nueva tarea añadida",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error durante la creación de tarea",
        });
    }
};

const getTask = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    try {
        const task = await Task.findOne({ where: { id } });
        return res.status(200).json({
            success: true,
            task,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error durante la obtención de tarea",
        });
    }
};

export { create, getTask };
