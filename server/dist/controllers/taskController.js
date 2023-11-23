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
exports.create = void 0;
const Task_1 = require("../entities/Task");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Task_1.Task.create(Object.assign(Object.assign({}, req.body), { userId: 1 })).save();
        return res.status(200).json({
            success: true,
            message: "Nueva tarea añadida",
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
exports.create = create;
