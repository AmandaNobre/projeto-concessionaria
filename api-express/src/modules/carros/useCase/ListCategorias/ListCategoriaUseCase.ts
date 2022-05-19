import { ParsedQs } from "qs";
import { inject, injectable } from "tsyringe";

import { Categorias } from "../../../../database/entities/Categoria";
import { ICategoriasRepository } from "../../repositories/interfaces/ICategoriasRepository";

type IRequest = {
    name: string | ParsedQs | string[] | ParsedQs[]
}

@injectable()
class ListCategoriaUseCase {

    constructor(
        @inject("CategoriasRepositorio")
        private categoriasRepositorio: ICategoriasRepository
    ) { }

    async execute({ name }: IRequest): Promise<Categorias[]> {

        const query = { name }
        const categorias = await this.categoriasRepositorio.list(query)

        return categorias
    }
}

export { ListCategoriaUseCase }