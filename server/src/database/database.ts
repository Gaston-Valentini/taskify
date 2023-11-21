import "reflect-metadata";
import { DataSource } from "typeorm";

import { Users1699989447248 } from "../migrations/1700589613196-users";

const database = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "taskify",
    entities: [Users1699989447248],
    migrations: [],
    logging: false,
    synchronize: true,
});

export default database;
