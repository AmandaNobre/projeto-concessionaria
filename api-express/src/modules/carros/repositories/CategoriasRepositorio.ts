import { Repository } from "typeorm";

import { ICategoriasRepository, ICreateCategoriaDTO } from "./interfaces/ICategoriasRepository";
import { Categorias } from "../../../database/entities/Categoria";
import { AppDataSource } from "../../../database/dataSource";

class CategoriasRepositorio implements ICategoriasRepository {
    private repository: Repository<Categorias>

    constructor() {
        this.repository = AppDataSource.getRepository(Categorias)
    }

    async create({ name, description }: ICreateCategoriaDTO) {

        const category = this.repository.create({
            name,
            description
        })

        await this.repository.save(category)
    }

    async list(filter): Promise<Categorias[]> {
        const categories = await this.repository.find({ where: filter, })
        return categories;
    }

    async findByName(name: string): Promise<Categorias> {
        const categoria = await this.repository.findOne({
            where: {
                name
            }
        })
        return categoria
    }
}

export { CategoriasRepositorio }