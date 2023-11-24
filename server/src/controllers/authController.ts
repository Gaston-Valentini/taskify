import { Request, Response } from "express";
import bcryp from "bcrypt";
import jwt from "jsonwebtoken";
import { validateFields } from "../validations/authValidation";
import { User } from "../entities/User";

const register = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    const validateResponse = validateFields(email, password);

    if (validateResponse.success === false) {
        return res.status(400).json(validateResponse);
    }

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

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const validateResponse = validateFields(email, password);

    if (validateResponse.success === false) {
        return res.status(400).json(validateResponse);
    }

    try {
        const userFound = await User.findOne({ where: { email } });
        if (!userFound) {
            return res.status(400).json({
                success: false,
                message:
                    "No existe un usuario registrado con ese correo electrónico",
            });
        }

        const unhashedPassword = bcryp.compareSync(
            password,
            userFound.password
        );
        if (!unhashedPassword) {
            return res.status(400).json({
                success: false,
                message: "Contraseña incorrecta",
            });
        }

        const token = jwt.sign({ id: userFound.id }, "secret", {
            expiresIn: "24h",
        });

        return res.status(200).json({
            success: true,
            message: "Inicio de sesión exitoso",
            token,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error durante el inicio de sesión",
        });
    }
};

export { register, login };
