import { container } from "tsyringe";
import { IUsersRepository } from "../../modules/account/repositories/interfaces/IUsersRepository";
import { UserRepository } from "../../modules/account/repositories/UserRepository";

import { CategoriasRepositorio } from "../../modules/carros/repositories/CategoriasRepositorio";
import { EspecificacoesRepositorio } from "../../modules/carros/repositories/EspecificacoesRepositorio";
import { ICategoriasRepository } from "../../modules/carros/repositories/interfaces/ICategoriasRepository";
import { IEspecificacoesRepository } from "../../modules/carros/repositories/interfaces/IEspecificacoesRepository";

container.registerSingleton<ICategoriasRepository>(
    "CategoriasRepositorio",
    CategoriasRepositorio
)

container.registerSingleton<IEspecificacoesRepository>(
    "EspecificacoesRepositorio",
    EspecificacoesRepositorio
)

container.registerSingleton<IUsersRepository>(
    "UserRepository",
    UserRepository
)
