import { DataSource } from "typeorm"
import { User } from "./entities/user.entity";
import { error } from "console";
import { Imovel } from "./entities/imovel.entity";
import "dotenv/config"
import {InitialMigration1681324964959} from "./migrations/1681324964959-initialMigration"
import {GenerateTables1681324971971} from "./migrations/1681324971971-generateTables"
import {Cascade1681565144418} from "./migrations/1681565144418-cascade"
import {StatusChange1681557515781} from "./migrations/1681557515781-statusChange"

export const AppDataSource = new DataSource({
    type: "postgres",
    
    url: process.env.DATABASE_URL,

    synchronize: false,
    logging: true,
    entities: [User, Imovel],
    migrations: [InitialMigration1681324964959, GenerateTables1681324971971, Cascade1681565144418, StatusChange1681557515781],
})
