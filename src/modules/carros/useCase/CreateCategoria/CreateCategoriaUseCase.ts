import { inject, injectable } from "tsyringe";

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
            throw new Error("Categoria já existente")
        }

        this.categoriaRepositorio.create({ name, description })
    }
}

export { CreateCategoriaUseCase }