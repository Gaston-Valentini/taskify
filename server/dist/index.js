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
const database_1 = __importDefault(require("./database/database"));
const app_1 = __importDefault(require("./app/app"));
const startApp = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield database_1.default.initialize();
        console.log("Conected to database");
        try {
            app_1.default.listen(app_1.default.get("SERVER_PORT"), () => {
                console.log(`Server listening on port ${app_1.default.get("SERVER_PORT")}`);
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    catch (error) {
        console.error(error);
    }
});
startApp();
