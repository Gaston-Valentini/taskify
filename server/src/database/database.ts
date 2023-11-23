import "reflect-metadata";
import { DataSource } from "typeorm";
import app from "../app/app";

import { Users1699989447248 } from "../migrations/1700589613196-users";
import { Tasks1700767616912 } from "../migrations/1700767616912-tasks";
import { User } from "../entities/User";

const database = new DataSource({
    type: "mysql",
    host: app.get("DB_HOST"),
    port: app.get("DB_PORT"),
    username: app.get("DB_USERNAME"),
    password: app.get("DB_PASSWORD"),
    database: app.get("DB_NAME"),
    entities: [User],
    migrations: [Users1699989447248, Tasks1700767616912],
    logging: false,
    synchronize: true,
});

export default database;
