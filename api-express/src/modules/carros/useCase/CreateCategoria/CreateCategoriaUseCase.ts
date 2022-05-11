import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";

import { ICategoriasRepository } from "../../repositories/interfaces/ICategoriasRepository";

interface IRequest {
    name: string;
    description: string
}

@injectable()
class CreateCategoriaUseCase {

    constructor(
        @inject("CategoriasRepositorio")
        private categoriaRepositorio: ICategoriasRepository
    ) { }

    async execute({ name, description }: IRequest) {
        const categoriaExiste = await this.categoriaRepositorio.findByName(name)

        if (categoriaExiste) {
            throw new AppError("Categoria já existente", 401)
        }

        this.categoriaRepositorio.create({ name, description })
    }
}

export { CreateCategoriaUseCase }