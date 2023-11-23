"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const app_1 = __importDefault(require("../app/app"));
const _1700589613196_users_1 = require("../migrations/1700589613196-users");
const _1700767616912_tasks_1 = require("../migrations/1700767616912-tasks");
const User_1 = require("../entities/User");
const database = new typeorm_1.DataSource({
    type: "mysql",
    host: app_1.default.get("DB_HOST"),
    port: app_1.default.get("DB_PORT"),
    username: app_1.default.get("DB_USERNAME"),
    password: app_1.default.get("DB_PASSWORD"),
    database: app_1.default.get("DB_NAME"),
    entities: [User_1.User],
    migrations: [_1700589613196_users_1.Users1699989447248, _1700767616912_tasks_1.Tasks1700767616912],
    logging: false,
    synchronize: true,
});
exports.default = database;
