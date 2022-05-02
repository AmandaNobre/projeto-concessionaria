import { DataSource } from "typeorm";
import { Categorias } from "./entities/Categoria";
import { Especificacoes } from "./entities/Especificacao";
import { CreateCategories } from "./migrations/CreateCategories";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "12345678",
    database: "rentx",
    synchronize: true,
    logging: false,
    entities: [Categorias, Especificacoes],
    subscribers: [],
    // migrations: ["./src/atabases/migrations/*.ts"],
    migrations: [CreateCategories]
})