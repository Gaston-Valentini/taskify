import { Request, Response } from "express";
import bcryp from "bcrypt";
import { User } from "../entities/User";

const register = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    try {
        const userFound = await User.findOne({ where: { email } });

        if (userFound) {
            return res.status(409).json({
                success: false,
                message:
                    "Ya existe un usuario registrado con ese correo electrónico",
            });
        }

        const hashedPassword = bcryp.hashSync(password, 10);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        }).save();

        return res.status(201).json({
            success: true,
            message: "Usuario registrado correctamente",
            user: {
                username: newUser.username,
                email: newUser.email,
            },
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error durante el registro",
        });
    }
};

export { register };
