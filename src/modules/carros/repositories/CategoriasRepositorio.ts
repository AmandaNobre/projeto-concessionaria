import { Repository } from "typeorm";
import { AppDataSource } from "../../../database/dataSource";
import { Categorias } from "../../../database/entities/Categoria";
import { ICategoriasRepository, ICreateCategoriaDTO } from "./interfaces/ICategoriasRepository";

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

    async list(): Promise<Categorias[]> {
        const categories = await this.repository.find()
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