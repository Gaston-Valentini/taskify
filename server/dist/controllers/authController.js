"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const authValidation_1 = require("../validations/authValidation");
const User_1 = require("../entities/User");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    const validateResponse = (0, authValidation_1.validateFields)(email, password);
    if (validateResponse.success === false) {
        return res.status(400).json(validateResponse);
    }
    try {
        const userFound = yield User_1.User.findOne({ where: { email } });
        if (userFound) {
            return res.status(409).json({
                success: false,
                message: "Ya existe un usuario registrado con ese correo electrónico",
            });
        }
        const hashedPassword = bcrypt_1.default.hashSync(password, 10);
        const newUser = yield User_1.User.create({
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
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error durante el registro",
        });
    }
});
exports.register = register;
