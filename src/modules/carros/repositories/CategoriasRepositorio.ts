import { Categorias } from "../model/categoria"
import { ICategoriasRepository, ICreateCategoriaDTO } from "./interfaces/ICategoriasRepository";

class CategoriasRepositorio implements ICategoriasRepository {
    private categorias: Categorias[]

    private static INSTANCE: CategoriasRepositorio;

    constructor() {
        this.categorias = []
    }

    public static getInstance(): CategoriasRepositorio {
        if (!CategoriasRepositorio.INSTANCE) {
            CategoriasRepositorio.INSTANCE = new CategoriasRepositorio()
        }

        return CategoriasRepositorio.INSTANCE
    }

    create({ nome, descricao }: ICreateCategoriaDTO) {
        const categoria = new Categorias()

        Object.assign(categoria, { nome, descricao, dataCriacao: new Date })

        this.categorias.push(categoria)
    }

    list(): Categorias[] {
        return this.categorias
    }

    findByName(nome: string): Categorias {
        const categoria = this.categorias.find((categoria) => categoria.nome === nome)
        return categoria
    }
}

export { CategoriasRepositorio }