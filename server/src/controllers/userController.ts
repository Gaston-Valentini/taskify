import { Request, Response } from "express";
import { User } from "../entities/User";

const getUser = async (req: Request, res: Response) => {
    const userId = req.token.id;

    try {
        const user = await User.find({
            where: { id: userId },
            select: ["id", "username", "email", "createdAt", "updatedAt"],
            relations: ["tasks"],
        });
        return res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error durante la obtención de tareas",
        });
    }
};

export { getUser };
