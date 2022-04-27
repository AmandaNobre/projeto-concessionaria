import { ICategoriasRepository } from "../../repositories/interfaces/ICategoriasRepository";

interface IRequest {
    nome: string;
    descricao: string
}

class CreateCategoriaUseCase {

    constructor(private categoriaRepositorio: ICategoriasRepository) { }

    execute({ nome, descricao }: IRequest) {
        const categoriaExiste = this.categoriaRepositorio.findByName(nome)

        if (categoriaExiste) {
            throw new Error("Categoria já existente")
        }

        this.categoriaRepositorio.create({ nome, descricao })
    }
}

export { CreateCategoriaUseCase }