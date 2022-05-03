import { DataSource } from "typeorm";

import { Especificacoes } from "./entities/Especificacao";
import { Categorias } from "./entities/Categoria";
import { Users } from "./entities/Users";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "12345678",
    database: "rentx",
    synchronize: true,
    logging: false,
    entities: [Categorias, Especificacoes, Users],
    subscribers: [],
    migrations: [],
})