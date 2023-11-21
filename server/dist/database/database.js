"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const _1700589613196_users_1 = require("../migrations/1700589613196-users");
const database = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "taskify",
    entities: [_1700589613196_users_1.Users1699989447248],
    migrations: [],
    logging: false,
    synchronize: true,
});
exports.default = database;
