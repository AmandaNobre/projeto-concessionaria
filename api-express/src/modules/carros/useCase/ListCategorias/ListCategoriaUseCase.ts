import { inject, injectable } from "tsyringe";

import { Categorias } from "../../../../database/entities/Categoria";
import { ICategoriasRepository } from "../../repositories/interfaces/ICategoriasRepository";

@injectable()
class ListCategoriaUseCase {

    constructor(
        @inject("CategoriasRepositorio")
        private categoriasRepositorio: ICategoriasRepository
    ) { }

    async execute(): Promise<Categorias[]> {
        const categorias = await this.categoriasRepositorio.list()

        return categorias
    }
}

export { ListCategoriaUseCase }