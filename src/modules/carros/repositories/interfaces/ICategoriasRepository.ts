import { Categorias } from "../model/categoria"

interface ICreateCategoriaDTO {
    nome: string;
    descricao: string
}

interface ICategoriasRepository {
    create({ nome, descricao }: ICreateCategoriaDTO): void;
    list(): Categorias[];
    findByName(nome: string): Categorias
}

export { ICategoriasRepository, ICreateCategoriaDTO }