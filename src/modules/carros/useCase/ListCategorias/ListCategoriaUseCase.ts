import { Categorias } from "../../../../database/entities/Categoria";
import { ICategoriasRepository } from "../../repositories/interfaces/ICategoriasRepository";

class ListCategoriaUseCase {

    constructor(private categoriasRepositorio: ICategoriasRepository) { }
    async execute(): Promise<Categorias[]> {
        const categorias = await this.categoriasRepositorio.list()

        return categorias
    }
}

export { ListCategoriaUseCase }