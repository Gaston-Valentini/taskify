import "reflect-metadata";
import { DataSource } from "typeorm";

const database = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "taskify",
    entities: [],
    migrations: [],
    logging: false,
    synchronize: true,
});

export default database;
