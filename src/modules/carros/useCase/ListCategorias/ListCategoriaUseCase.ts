import { Categorias } from "../../model/categoria";
import { ICategoriasRepository } from "../../repositories/interfaces/ICategoriasRepository";

class ListCategoriaUseCase {

    constructor(private categoriasRepositorio: ICategoriasRepository) { }
    execute(): Categorias[] {
        const categorias = this.categoriasRepositorio.list()

        return categorias
    }
}

export { ListCategoriaUseCase }