import { DataSource } from "typeorm"
import { User } from "./entities/user.entity";
import { error } from "console";
import { Imovel } from "./entities/imovel.entity";

require("dotenv").config();

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    // host: "localhost",
    // port: 5432,

    // username: process.env.POSTGRES_USER,
    // password: process.env.POSTGRES_PASSWORD,
    // database:  process.env.POSTGRES_DB,

    synchronize: false,
    logging: true,
    entities: [User, Imovel],
    migrations: ["src/migrations/*.ts"],
})
