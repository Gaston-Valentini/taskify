"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const authRouter_1 = __importDefault(require("../views/authRouter"));
// Router
app.use("/auth", authRouter_1.default);
// Export
exports.default = app;
