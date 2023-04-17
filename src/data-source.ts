import { DataSource } from "typeorm"
import { User } from "./entities/user.entity";
import { error } from "console";
import { Imovel } from "./entities/imovel.entity";

require("dotenv").config();

export const AppDataSource = new DataSource({
    type: "postgres",
    
    url: process.env.DATABASE_URL,

    synchronize: false,
    logging: true,
    entities: [User, Imovel],
    migrations: ["src/migrations/*.ts"],
})
