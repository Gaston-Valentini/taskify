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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const User_1 = require("../entities/User");
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.token.id;
    try {
        const user = yield User_1.User.find({
            where: { id: userId },
            select: ["id", "username", "email", "createdAt", "updatedAt"],
            relations: ["tasks"],
        });
        return res.status(200).json({
            success: true,
            user,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error durante la obtención de tareas",
        });
    }
});
exports.getUser = getUser;
